import { useMemo, useState, type FormEvent } from 'react';
import { api } from '../../api/client';
import type { EntityRecord } from '../../api/types';
import type { FormValues, ResourceConfig } from '../../config/resourceConfigs';
import { usePageTitle } from '../../hooks/usePageTitle';
import { useRelatedOptions } from '../../hooks/useRelatedOptions';
import { AlertMessage, CrudPageShell, LoadingMessage } from './CrudHelpers';
import DynamicForm from './DynamicForm';

interface ResourceCreatePageProps<T extends EntityRecord> {
  config: ResourceConfig<T>;
  title?: string;
}

function getInitialValues<T extends EntityRecord>(config: ResourceConfig<T>) {
  return config.fields.reduce<FormValues>((acc, field) => {
    if (field.type === 'checkbox') {
      acc[field.name] = false;
    } else {
      acc[field.name] = '';
    }

    return acc;
  }, {});
}

export default function ResourceCreatePage<T extends EntityRecord>({ config, title }: ResourceCreatePageProps<T>) {
  const pageTitle = title ?? `Inserir ${config.singular}`;
  usePageTitle(`${config.singular} — E-Estacionamento`);

  const initialValues = useMemo(() => getInitialValues(config), [config]);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const related = useRelatedOptions(config.fields);

  function handleChange(name: string, value: string | number | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const payload = config.toPayload ? config.toPayload(values, 'create') : values;
      await api.post<T>(config.endpoint, payload);
      setValues(initialValues);
      setSuccess(`${config.singular} cadastrado com sucesso.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : `Erro ao cadastrar ${config.singular.toLowerCase()}.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <CrudPageShell config={config} action="insert" title={pageTitle}>
      {related.loading && <LoadingMessage />}
      {related.error && <AlertMessage type="danger">{related.error}</AlertMessage>}
      {success && <AlertMessage type="success">{success}</AlertMessage>}
      {error && <AlertMessage type="danger">{error}</AlertMessage>}

      <DynamicForm
        fields={config.fields}
        values={values}
        relatedOptions={related.options}
        mode="create"
        submitLabel="Salvar"
        submitting={submitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={() => {
          setValues(initialValues);
          setSuccess(null);
          setError(null);
        }}
      />
    </CrudPageShell>
  );
}
