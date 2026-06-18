import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';

export default function HomepageFuncionario() {
  usePageTitle("Home — Funcionário");

  return (
    <AppShell role="funcionario" activeSection="home" showSessionActions>
    <main className="container flex-grow-1 py-5">
      <div className="text-center mb-5">
        <h1 className="display-6">Bem-vindo</h1>
        <p className="text-muted">Acesso rápido</p>
      </div>
      <div className="row g-4">
        <div className="col-12">
          <h5 className="mb-3 text-muted">Cadastros</h5>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-modelo" className="btn btn-outline-primary w-100">
            <i className="bi bi-car-front me-2"></i>
            Modelo
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-veiculo" className="btn btn-outline-primary w-100">
            <i className="bi bi-truck me-2"></i>
            Veículo
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-despesa" className="btn btn-outline-primary w-100">
            <i className="bi bi-cash-stack me-2"></i>
            Despesa
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-cliente" className="btn btn-outline-primary w-100">
            <i className="bi bi-person me-2"></i>
            Cliente
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-vaga" className="btn btn-outline-primary w-100">
            <i className="bi bi-grid me-2"></i>
            Vaga
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-tipo-servico" className="btn btn-outline-primary w-100">
            <i className="bi bi-tag me-2"></i>
            Tipo Serviço
          </a>
        </div>
        <div className="col-12 mt-4">
          <h5 className="mb-3 text-muted">Processos</h5>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/processo-entrada" className="btn btn-primary w-100">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Entrada
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-saida" className="btn btn-primary w-100">
            <i className="bi bi-box-arrow-right me-2"></i>
            Saída
          </a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/cadastro-servico" className="btn btn-primary w-100">
            <i className="bi bi-tools me-2"></i>
            Serviço
          </a>
        </div>
        <div className="col-12 mt-4">
          <h5 className="mb-3 text-muted">Relatórios</h5>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/relatorio-media-saida" className="btn btn-outline-secondary w-100">Média Saída</a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/relatorio-total-usuario" className="btn btn-outline-secondary w-100">Total Usuário</a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/relatorio-entradas-veiculos" className="btn btn-outline-secondary w-100">Entradas Veículo</a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/relatorio-entradas-usuarios" className="btn btn-outline-secondary w-100">Entradas Usuário</a>
        </div>
        <div className="col-6 col-md-3">
          <a href="#/relatorio-carros-banidos" className="btn btn-outline-secondary w-100">Carros Banidos</a>
        </div>
      </div>
    </main>
    </AppShell>
  );
}
