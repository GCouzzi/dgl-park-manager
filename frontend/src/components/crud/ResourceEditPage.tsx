import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from '../../api/client';
import type { EntityRecord } from '../../api/types';
import type { FormValues, ResourceConfig } from '../../config/resourceConfigs';
import { RESOURCE_ROUTES } from '../../config/navigation';
import { usePageTitle } from '../../hooks/usePageTitle';
import { useRelatedOptions } from '../../hooks/useRelatedOptions';
import { AlertMessage, CrudPageShell, LoadingMessage } from './CrudHelpers';
import DynamicForm from './DynamicForm';

interface ResourceEditPageProps<T extends EntityRecord> {
  config: ResourceConfig<T>;
  title?: string;
}

function getInitialValues<T extends EntityRecord>(config: ResourceConfig<T>, entity?: T | null) {
  if (entity && config.fromEntity) {
    return config.fromEntity(entity);
  }

  return config.fields.reduce<FormValues>((acc, field) => {
    const value = entity?.[field.name];

    if (field.type === 'checkbox') {
      acc[field.name] = Boolean(value);
    } else if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'string') {
      acc[field.name] = value;
    } else {
      acc[field.name] = '';
    }

    return acc;
  }, {});
}

export default function ResourceEditPage<T extends EntityRecord>({ config, title }: ResourceEditPageProps<T>) {
  const pageTitle = title ?? `Alterar ${config.singular}`;
  usePageTitle(`${config.singular} — E-Estacionamento`);

  const [searchParams] = useSearchParams();
  const recordId = searchParams.get('id')?.trim() ?? '';
  const listPath = RESOURCE_ROUTES[config.key].list ?? '/';
  const [entity, setEntity] = useState<T | null>(null);
  const [values, setValues] = useState<FormValues>(() => getInitialValues(config));
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'danger' | 'info'; text: string } | null>(null);
  const related = useRelatedOptions(config.fields);

  async function loadEntity(targetId: string) {
    if (!targetId.trim()) {
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const data = await api.get<T>(`${config.endpoint}/${targetId.trim()}`);

      if (!data) {
        setEntity(null);
        setValues(getInitialValues(config));
        setMessage({ type: 'danger', text: `${config.singular} não encontrado.` });
        return;
      }

      setEntity(data);
      setValues(getInitialValues(config, data));
      setMessage({ type: 'success', text: `${config.singular} #${data.id} carregado.` });
    } catch (err) {
      setEntity(null);
      setValues(getInitialValues(config));
      setMessage({ type: 'danger', text: err instanceof Error ? err.message : `Erro ao carregar ${config.singular.toLowerCase()}.` });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (recordId) {
      void loadEntity(recordId);
    } else {
      setEntity(null);
      setValues(getInitialValues(config));
      setMessage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordId]);

  function handleChange(name: string, value: string | number | boolean) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!entity) {
      setMessage({ type: 'danger', text: 'Selecione um registro na listagem antes de salvar alterações.' });
      return;
    }

    setSubmitting(true);
    setMessage(null);

    try {
      const payload = config.toPayload ? config.toPayload(values, 'edit') : values;
      const updated = await api.put<T>(`${config.endpoint}/${entity.id}`, payload);
      setEntity(updated);
      setValues(getInitialValues(config, updated));
      setMessage({ type: 'success', text: `${config.singular} atualizado com sucesso.` });
    } catch (err) {
      setMessage({ type: 'danger', text: err instanceof Error ? err.message : `Erro ao atualizar ${config.singular.toLowerCase()}.` });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!entity) return;
    const confirmed = window.confirm(`Deseja realmente excluir ${config.singular.toLowerCase()} #${entity.id}?`);
    if (!confirmed) return;

    setSubmitting(true);
    setMessage(null);

    try {
      await api.delete<T>(`${config.endpoint}/${entity.id}`);
      setEntity(null);
      setValues(getInitialValues(config));
      setMessage({ type: 'success', text: `${config.singular} excluído com sucesso.` });
    } catch (err) {
      setMessage({ type: 'danger', text: err instanceof Error ? err.message : `Erro ao excluir ${config.singular.toLowerCase()}.` });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <CrudPageShell config={config} action="edit" title={pageTitle}>
      {!recordId && (
        <AlertMessage type="info">
          Selecione um registro na listagem para alterar.{' '}
          <Link to={listPath} className="alert-link">
            Ir para a listagem de {config.plural.toLowerCase()}
          </Link>
          .
        </AlertMessage>
      )}

      {related.loading && <LoadingMessage />}
      {related.error && <AlertMessage type="danger">{related.error}</AlertMessage>}
      {message && <AlertMessage type={message.type}>{message.text}</AlertMessage>}
      {loading && <LoadingMessage />}

      {entity && (
        <DynamicForm
          fields={config.fields}
          values={values}
          relatedOptions={related.options}
          mode="edit"
          submitLabel="Salvar alterações"
          submitting={submitting}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={() => {
            setValues(getInitialValues(config, entity));
            setMessage(null);
          }}
          extraActions={
            config.canDelete ? (
              <button type="button" className="btn btn-danger flex-fill" disabled={submitting} onClick={() => void handleDelete()}>
                <i className="bi bi-trash me-2" />
                Excluir
              </button>
            ) : undefined
          }
        />
      )}
    </CrudPageShell>
  );
}
