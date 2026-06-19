import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/client';
import type { EntityRecord } from '../../api/types';
import type { FilterConfig, ResourceConfig } from '../../config/resourceConfigs';
import { usePageTitle } from '../../hooks/usePageTitle';
import { useResourceData } from '../../hooks/useResourceData';
import { getNestedValue, humanizeEnum } from '../../utils/format';
import { AlertMessage, CrudPageShell, EmptyMessage, LoadingMessage } from './CrudHelpers';

interface ResourceListPageProps<T extends EntityRecord> {
  config: ResourceConfig<T>;
  title?: string;
}

type Filters = Record<string, string>;

function getFilterValue<T extends EntityRecord>(item: T, filter: FilterConfig) {
  return getNestedValue(item, filter.path ?? filter.name);
}

function matchesFilter<T extends EntityRecord>(item: T, filter: FilterConfig, value: string) {
  if (!value) return true;
  const source = getFilterValue(item, filter);

  if (filter.type === 'select') {
    return String(source) === value;
  }

  return String(source ?? '').toLowerCase().includes(value.toLowerCase());
}

function renderCell<T extends EntityRecord>(item: T, path?: string) {
  if (!path) return '-';
  const value = getNestedValue(item, path);
  if (typeof value === 'boolean') return value ? 'Sim' : 'Não';
  if (value === undefined || value === null || value === '') return '-';
  return String(value);
}

export default function ResourceListPage<T extends EntityRecord>({ config, title }: ResourceListPageProps<T>) {
  const pageTitle = title ?? `Listar ${config.plural}`;
  usePageTitle(`${config.plural} — E-Estacionamento`);

  const { items, loading, error, reload } = useResourceData<T>(config.endpoint);
  const [filters, setFilters] = useState<Filters>({});
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => config.filters.every((filter) => matchesFilter(item, filter, filters[filter.name] ?? '')));
  }, [config.filters, filters, items]);

  async function handleDelete(item: T) {
    const confirmed = window.confirm(`Deseja realmente excluir ${config.singular.toLowerCase()} #${item.id}?`);
    if (!confirmed) return;

    setDeletingId(item.id);
    setDeleteError(null);
    setDeleteSuccess(null);

    try {
      await api.delete<T>(`${config.endpoint}/${item.id}`);
      setDeleteSuccess(`${config.singular} excluído com sucesso.`);
      await reload();
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : `Erro ao excluir ${config.singular.toLowerCase()}.`);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <CrudPageShell config={config} action="list" title={pageTitle}>
      {error && <AlertMessage type="danger">{error}</AlertMessage>}
      {deleteError && <AlertMessage type="danger">{deleteError}</AlertMessage>}
      {deleteSuccess && <AlertMessage type="success">{deleteSuccess}</AlertMessage>}

      <form
        className="row g-2 mb-4"
        onSubmit={(event) => event.preventDefault()}
        onReset={() => setFilters({})}
      >
        {config.filters.map((filter) => (
          <div className="col-12 col-md-3" key={filter.name}>
            {filter.type === 'select' ? (
              <select
                className="form-select form-select-sm"
                value={filters[filter.name] ?? ''}
                onChange={(event) => setFilters((current) => ({ ...current, [filter.name]: event.target.value }))}
              >
                <option value="">{filter.label}</option>
                {(filter.options ?? []).map((option) => (
                  <option key={String(option.value)} value={String(option.value)}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder={filter.label}
                value={filters[filter.name] ?? ''}
                onChange={(event) => setFilters((current) => ({ ...current, [filter.name]: event.target.value }))}
              />
            )}
          </div>
        ))}

        <div className="col-12 col-md-3 d-flex gap-2">
          <button type="button" className="btn btn-primary btn-sm w-100" onClick={() => void reload()}>
            <i className="bi bi-arrow-clockwise me-1" />
            Atualizar
          </button>
          <button type="reset" className="btn btn-outline-secondary btn-sm w-100">Limpar</button>
        </div>
      </form>

      {loading ? (
        <LoadingMessage />
      ) : filteredItems.length === 0 ? (
        <EmptyMessage />
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                {config.columns.map((column) => (
                  <th key={column.header} className={column.className}>{column.header}</th>
                ))}
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  {config.columns.map((column) => (
                    <td key={`${item.id}-${column.header}`} className={column.className}>
                      {column.render ? column.render(item) : humanizeEnum(renderCell(item, column.path))}
                    </td>
                  ))}
                  <td className="text-center text-nowrap">
                    {config.canUpdate && config.editPath && (
                      <Link to={`${config.editPath}?id=${item.id}`} className="btn btn-sm btn-primary me-1" title="Alterar">
                        <i className="bi bi-pencil" />
                      </Link>
                    )}
                    {config.canDelete && (
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        title="Excluir"
                        disabled={deletingId === item.id}
                        onClick={() => void handleDelete(item)}
                      >
                        {deletingId === item.id ? <span className="spinner-border spinner-border-sm" /> : <i className="bi bi-trash" />}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </CrudPageShell>
  );
}
