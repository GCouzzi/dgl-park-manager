import { useState, type FormEvent, type ReactNode } from 'react';
import AppShell from '../AppShell';
import PageCard from '../PageCard';
import { api } from '../../api/client';
import type { Role } from '../../config/navigation';
import { usePageTitle } from '../../hooks/usePageTitle';
import { getNestedValue } from '../../utils/format';
import { AlertMessage, EmptyMessage, LoadingMessage } from '../crud/CrudHelpers';

export interface ReportField {
  name: string;
  label: string;
  type: 'text' | 'date' | 'select';
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
}

export interface ReportColumn<Row extends Record<string, unknown> = Record<string, unknown>> {
  header: string;
  path?: string;
  className?: string;
  render?: (row: Row) => ReactNode;
}

export interface ReportConfig<Row extends Record<string, unknown> = Record<string, unknown>> {
  title: string;
  pageTitle: string;
  endpoint: string;
  role: Role;
  activeItem: string;
  fields: ReportField[];
  columns: ReportColumn<Row>[];
  transformResponse: (response: unknown) => Row[];
  renderSummary?: (response: unknown, rows: Row[]) => ReactNode;
  loadOnMount?: boolean;
  intro?: string;
}

type FilterValues = Record<string, string>;

function initialFilters(fields: ReportField[]) {
  return fields.reduce<FilterValues>((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});
}

function renderCell(row: Record<string, unknown>, path?: string) {
  if (!path) return '-';
  const value = getNestedValue(row, path);
  if (value === undefined || value === null || value === '') return '-';
  return String(value);
}

export default function ReportPage<Row extends Record<string, unknown>>({ config }: { config: ReportConfig<Row> }) {
  usePageTitle(`${config.pageTitle} — E-Estacionamento`);

  const [filters, setFilters] = useState<FilterValues>(() => initialFilters(config.fields));
  const [rows, setRows] = useState<Row[]>([]);
  const [lastResponse, setLastResponse] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(Boolean(config.loadOnMount));

  async function load() {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await api.get<unknown>(config.endpoint, filters);
      setLastResponse(response);
      setRows(config.transformResponse(response));
    } catch (err) {
      setRows([]);
      setLastResponse(null);
      setError(err instanceof Error ? err.message : 'Erro ao carregar relatório.');
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void load();
  }

  return (
    <AppShell role={config.role} activeSection="relatorios" activeItem={config.activeItem}>
      <main className="container py-5 flex-grow-1">
        <PageCard title={config.title}>
          {config.intro && <p className="text-muted">{config.intro}</p>}

          <form className="row g-3 mb-4" onSubmit={handleSubmit} onReset={() => { setFilters(initialFilters(config.fields)); setRows([]); setLastResponse(null); setError(null); setHasSearched(false); }}>
            {config.fields.map((field) => (
              <div className="col-12 col-md-3" key={field.name}>
                {field.type === 'select' ? (
                  <select
                    className="form-select"
                    value={filters[field.name] ?? ''}
                    required={field.required}
                    onChange={(event) => setFilters((current) => ({ ...current, [field.name]: event.target.value }))}
                  >
                    <option value="">{field.label}</option>
                    {(field.options ?? []).map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="form-control"
                    type={field.type}
                    placeholder={field.label}
                    aria-label={field.label}
                    value={filters[field.name] ?? ''}
                    required={field.required}
                    onChange={(event) => setFilters((current) => ({ ...current, [field.name]: event.target.value }))}
                  />
                )}
              </div>
            ))}

            <div className="col-12 col-md-3 d-flex gap-2">
              <button type="submit" className="btn btn-primary flex-fill" disabled={loading}>
                {loading ? <span className="spinner-border spinner-border-sm me-2" /> : <i className="bi bi-search me-2" />}
                Gerar
              </button>
              <button type="reset" className="btn btn-outline-secondary flex-fill">Limpar</button>
            </div>
          </form>

          {error && <AlertMessage type="danger">{error}</AlertMessage>}
          {loading && <LoadingMessage />}

          {!loading && hasSearched && config.renderSummary?.(lastResponse, rows)}

          {!loading && hasSearched && rows.length === 0 && !error && <EmptyMessage />}

          {!loading && rows.length > 0 && (
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    {config.columns.map((column) => (
                      <th key={column.header} className={column.className}>{column.header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={String(row.id ?? index)}>
                      {config.columns.map((column) => (
                        <td key={`${index}-${column.header}`} className={column.className}>
                          {column.render ? column.render(row) : renderCell(row, column.path)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </PageCard>
      </main>
    </AppShell>
  );
}
