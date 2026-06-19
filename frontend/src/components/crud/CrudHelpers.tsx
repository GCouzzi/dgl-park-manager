import type { ReactNode } from 'react';
import AppShell from '../AppShell';
import CrudSidebar from '../CrudSidebar';
import PageCard from '../PageCard';
import type { Role, ResourceKey } from '../../config/navigation';

interface CrudPageShellProps {
  config: { key: ResourceKey; role: Role; activeSection: string; activeItem: string; };
  action: 'insert' | 'list' | 'edit';
  title: string;
  children: ReactNode;
}

export function CrudPageShell({ config, action, title, children }: CrudPageShellProps) {
  return (
    <AppShell role={config.role} activeSection={config.activeSection} activeItem={config.activeItem}>
      <main className="container-fluid flex-grow-1 d-flex flex-column">
        <div className="row flex-grow-1">
          <CrudSidebar resource={config.key} activeAction={action} />
          <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
            <PageCard title={title}>{children}</PageCard>
          </section>
        </div>
      </main>
    </AppShell>
  );
}

export function AlertMessage({ type, children }: { type: 'success' | 'danger' | 'warning' | 'info'; children: ReactNode }) {
  return <div className={`alert alert-${type}`} role="alert">{children}</div>;
}

export function LoadingMessage() {
  return (
    <div className="d-flex align-items-center gap-2 text-muted py-3">
      <span className="spinner-border spinner-border-sm" aria-hidden="true" />
      <span>Carregando dados da API...</span>
    </div>
  );
}

export function EmptyMessage({ children = 'Nenhum registro encontrado.' }: { children?: ReactNode }) {
  return <p className="text-muted mb-0 py-3">{children}</p>;
}
