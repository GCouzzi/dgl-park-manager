import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarDespesa() {
  usePageTitle("Despesa");

  return (
    <AppShell role="administrador" activeSection="cadastros" activeItem="/cadastro-despesa">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="despesa" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Buscar Despesa">
              <form method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="row g-2 mb-4">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-hash"></i>
                      </span>
                      <input type="number" className="form-control" id="" name="id" placeholder="Digite o ID da despesa" min="1" />
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
                        <i className="bi bi-card-text me-1 text-primary"></i>
                        Descrição
                      </label>
                      <input type="text" className="form-control" defaultValue="Conta de energia" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-currency-dollar me-1 text-primary"></i>
                        Valor
                      </label>
                      <input type="number" className="form-control" step="0.01" min="0" defaultValue="350" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-calendar-event-fill me-1 text-primary"></i>
                        Vencimento
                      </label>
                      <input type="date" className="form-control" defaultValue="2026-04-15" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-check-circle-fill me-1 text-primary"></i>
                        Status
                      </label>
                      <select className="form-select" defaultValue="nao_pago">
                        <option value="pago">Pago</option>
                        <option value="nao_pago">Não Pago</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-person-fill me-1 text-primary"></i>
                        Criado Por
                      </label>
                      <input type="text" className="form-control-plaintext" readOnly defaultValue="Gabriel" />
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash me-2"></i>
                        Excluir Despesa
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
