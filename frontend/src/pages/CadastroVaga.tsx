import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroVaga() {
  usePageTitle("Vaga — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-vaga">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="vaga" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Vaga">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <select className="form-select" id="tipo" defaultValue="Selecione o tipo">
                      <option disabled>Selecione o tipo</option>
                      <option value="carro">Carro</option>
                      <option value="moto">Moto</option>
                    </select>
                    <label htmlFor="tipo">
                      <i className="bi bi-car-front-fill me-2"></i>
                      Tipo
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="status" defaultValue="Selecione o status">
                      <option disabled>Selecione o status</option>
                      <option value="livre">Livre</option>
                      <option value="ocupada">Ocupada</option>
                      <option value="manutencao">Manutenção</option>
                    </select>
                    <label htmlFor="status">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Status
                    </label>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-umbrella-fill me-2"></i>
                      Coberta
                    </label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="coberta" id="cobertaSim" defaultValue="sim" />
                        <label className="form-check-label" htmlFor="cobertaSim">Sim</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="coberta" id="cobertaNao" defaultValue="nao" />
                        <label className="form-check-label" htmlFor="cobertaNao">Não</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-star-fill me-2"></i>
                      Preferencial
                    </label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="preferencial" id="preferencialSim" defaultValue="sim" />
                        <label className="form-check-label" htmlFor="preferencialSim">Sim</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="preferencial" id="preferencialNao" defaultValue="nao" />
                        <label className="form-check-label" htmlFor="preferencialNao">Não</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-success w-100">
                      <i className="bi bi-save me-2"></i>
                      Salvar
                    </button>
                  </div>
                  <div className="col-12">
                    <button type="reset" className="btn btn-warning w-100">
                      <i className="bi bi-x-circle me-2"></i>
                      Limpar
                    </button>
                  </div>
                </div>
              
            </PageCard>
          </form>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
