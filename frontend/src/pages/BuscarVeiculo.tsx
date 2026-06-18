import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarVeiculo() {
  usePageTitle("Veículo");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-veiculo">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="veiculo" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Buscar Veículo">
              <form method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="row g-2 mb-4">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-car-front-fill"></i>
                      </span>
                      <input type="text" className="form-control" id="placa" name="placa" placeholder="Digite a placa do veículo" />
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
                        <i className="bi bi-car-front-fill me-1 text-primary"></i>
                        Placa
                      </label>
                      <input type="text" className="form-control" defaultValue="ABC-1234" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-car-front me-1 text-primary"></i>
                        Modelo
                      </label>
                      <select className="form-select" defaultValue="Honda Civic Touring 2021">
                        <option>Honda Civic Touring 2021</option>
                        <option>Toyota Corolla XEi 2022</option>
                        <option>Volkswagen Gol 1.0 2020</option>
                        <option>Chevrolet Onix LTZ 2023</option>
                        <option>Fiat Argo Drive 2022</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-palette-fill me-1 text-primary"></i>
                        Cor
                      </label>
                      <select className="form-select" defaultValue="Preto">
                        <option>Preto</option>
                        <option>Branco</option>
                        <option>Prata</option>
                        <option>Vermelho</option>
                        <option>Azul</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-shield-fill-exclamation me-1 text-primary"></i>
                        Banido
                      </label>
                      <select className="form-select" defaultValue="sim">
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-exclamation-circle-fill me-1 text-primary"></i>
                        Motivo
                      </label>
                      <textarea className="form-control" rows={3} defaultValue="Veículo com débitos pendentes e histórico de infrações no estacionamento." />
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash me-2"></i>
                        Excluir Veículo
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
