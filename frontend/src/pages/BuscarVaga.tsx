import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarVaga() {
  usePageTitle("Vaga — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-vaga">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="vaga" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Buscar Vaga">
              <form method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="row g-2 mb-4">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-hash"></i>
                      </span>
                      <input type="text" className="form-control" id="codigo" name="codigo" placeholder="Digite o código da vaga" />
                      <button type="button" className="btn btn-primary">
                        <i className="bi bi-search me-1"></i>
                        Buscar
                      </button>
                      <button type="reset" className="btn btn-outline-secondary">Limpar</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="card border">
                <div className="card-header bg-light">
                  <h6 className="mb-0 text-muted">Resultado da busca</h6>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-hash me-1 text-primary"></i>
                        Código
                      </label>
                      <input type="text" className="form-control" readOnly defaultValue="V-001" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-car-front-fill me-1 text-primary"></i>
                        Tipo
                      </label>
                      <select className="form-select" defaultValue="carro">
                        <option value="carro">Carro</option>
                        <option value="moto">Moto</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-check-circle-fill me-1 text-primary"></i>
                        Status
                      </label>
                      <select className="form-select" defaultValue="livre">
                        <option value="livre">Livre</option>
                        <option value="ocupada">Ocupada</option>
                        <option value="manutencao">Manutenção</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-3">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-umbrella-fill me-1 text-primary"></i>
                        Coberta
                      </label>
                      <div className="d-flex gap-4 mt-1">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="coberta" id="cobertaSim" defaultValue="sim" defaultChecked />
                          <label className="form-check-label" htmlFor="cobertaSim">Sim</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="coberta" id="cobertaNao" defaultValue="nao" />
                          <label className="form-check-label" htmlFor="cobertaNao">Não</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-star-fill me-1 text-primary"></i>
                        Preferencial
                      </label>
                      <div className="d-flex gap-4 mt-1">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="preferencial" id="preferencialSim" defaultValue="sim" />
                          <label className="form-check-label" htmlFor="preferencialSim">Sim</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="preferencial" id="preferencialNao" defaultValue="nao" defaultChecked />
                          <label className="form-check-label" htmlFor="preferencialNao">Não</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash me-2"></i>
                        Excluir Vaga
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </PageCard>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
