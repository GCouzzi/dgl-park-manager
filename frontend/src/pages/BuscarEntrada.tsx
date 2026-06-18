import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarEntrada() {
  usePageTitle("Buscar Entrada — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/processo-entrada">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="entrada" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Buscar Entrada" className="mb-4">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="buscaVaga" placeholder="Vaga" />
                    <label htmlFor="buscaVaga">
                      <i className="bi bi-p-square-fill me-2"></i>
                      Vaga
                    </label>
                  </div>
                  <div className="col-12 d-flex gap-2">
                    <button type="button" className="btn btn-primary w-100">
                      <i className="bi bi-search me-2"></i>
                      Buscar
                    </button>
                    <button type="reset" className="btn btn-outline-secondary w-100">Limpar</button>
                  </div>
                </div>
              
            </PageCard>
            <div className="card shadow-sm">
              <div className="card-header p-3 bg-secondary text-white">
                <h2 className="h5 mb-0">
                  <i className="bi bi-card-list me-2"></i>
                  Resultado
                </h2>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="resultVaga" placeholder="Vaga" defaultValue="A01" />
                    <label htmlFor="resultVaga">
                      <i className="bi bi-p-square-fill me-2"></i>
                      Vaga
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="resultCliente" defaultValue="João Silva">
                      <option>João Silva</option>
                      <option>Maria Oliveira</option>
                      <option>Carlos Souza</option>
                    </select>
                    <label htmlFor="resultCliente">
                      <i className="bi bi-person-fill me-2"></i>
                      Cliente
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="resultVeiculo" defaultValue="ABC-1234">
                      <option>ABC-1234</option>
                      <option>DEF-5678</option>
                      <option>GHI-9012</option>
                    </select>
                    <label htmlFor="resultVeiculo">
                      <i className="bi bi-car-front-fill me-2"></i>
                      Veículo
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control-plaintext" id="resultHorario" placeholder="Horário" readOnly defaultValue="09/04/2026 08:32" />
                    <label htmlFor="resultHorario">
                      <i className="bi bi-clock-fill me-2"></i>
                      Horário
                    </label>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-success w-100">
                      <i className="bi bi-save me-2"></i>
                      Salvar Alterações
                    </button>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-danger w-100">
                      <i className="bi bi-trash me-2"></i>
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
