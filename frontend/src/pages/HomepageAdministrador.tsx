import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';

export default function HomepageAdministrador() {
  usePageTitle("Home");

  return (
    <AppShell role="administrador" activeSection="home" showSessionActions>
    <main className="container flex-grow-1 py-5">
      <div className="text-center mb-5">
        <h1 className="display-6">Bem-vindo</h1>
        <p className="text-muted">Selecione uma opção abaixo para começar</p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-12 col-md-4">
          <a href="#/listar-usuario" className="text-decoration-none">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-people-fill display-6 text-primary"></i>
                <h5 className="mt-3">Usuários</h5>
                <p className="text-muted small">Gerenciar usuários do sistema</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4">
          <a href="#/listar-despesa" className="text-decoration-none">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-cash-stack display-6 text-primary"></i>
                <h5 className="mt-3">Despesas</h5>
                <p className="text-muted small">Controlar despesas</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-4">
          <a href="#/relatorio-financeiro" className="text-decoration-none">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="bi bi-bar-chart-fill display-6 text-primary"></i>
                <h5 className="mt-3">Relatórios</h5>
                <p className="text-muted small">Visualizar relatório financeiro</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
    </AppShell>
  );
}
