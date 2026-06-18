import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroDespesa() {
  usePageTitle("Despesa");

  return (
    <AppShell role="administrador" activeSection="cadastros" activeItem="/cadastro-despesa">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="despesa" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Despesa">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="descricao" placeholder="Descrição" />
                    <label htmlFor="descricao">
                      <i className="bi bi-card-text me-2"></i>
                      Descrição
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="number" className="form-control" id="valor" placeholder="Valor" step="0.01" min="0" />
                    <label htmlFor="valor">
                      <i className="bi bi-currency-dollar me-2"></i>
                      Valor
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="date" className="form-control" id="vencimento" placeholder="Vencimento" />
                    <label htmlFor="vencimento">
                      <i className="bi bi-calendar-event-fill me-2"></i>
                      Vencimento
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="status" defaultValue="Selecione o status">
                      <option disabled>Selecione o status</option>
                      <option value="pago">Pago</option>
                      <option value="nao_pago">Não Pago</option>
                    </select>
                    <label htmlFor="status">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Status
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control-plaintext" id="criador" placeholder="Criador" readOnly />
                    <label htmlFor="criador">
                      <i className="bi bi-person-fill me-2"></i>
                      Criador
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
