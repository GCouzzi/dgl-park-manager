import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ProcessoEntrada() {
  usePageTitle("Entrada — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/processo-entrada">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="entrada" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Registrar Entrada">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="vaga" placeholder="Vaga" />
                    <label htmlFor="vaga">
                      <i className="bi bi-p-square-fill me-2"></i>
                      Vaga
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="cliente" defaultValue="Selecione o cliente">
                      <option disabled>Selecione o cliente</option>
                      <option value="1">João Silva</option>
                      <option value="2">Maria Oliveira</option>
                      <option value="3">Carlos Souza</option>
                    </select>
                    <label htmlFor="cliente">
                      <i className="bi bi-person-fill me-2"></i>
                      Cliente
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="veiculo" defaultValue="Selecione o veículo">
                      <option disabled>Selecione o veículo</option>
                      <option value="1">ABC-1234</option>
                      <option value="2">DEF-5678</option>
                      <option value="3">GHI-9012</option>
                    </select>
                    <label htmlFor="veiculo">
                      <i className="bi bi-car-front-fill me-2"></i>
                      Veículo
                    </label>
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
