import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarSaida() {
  usePageTitle("Saída");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/cadastro-saida">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="saida" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Buscar Saída">
              <form method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="row g-2 mb-4">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-hash"></i>
                      </span>
                      <input type="number" className="form-control" id="" name="id" placeholder="Digite o ID da saída" min="1" />
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
                        Entrada (Placa)
                      </label>
                      <input type="text" className="form-control-plaintext" readOnly defaultValue="ABC-1234" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-percent me-1 text-primary"></i>
                        Desconto
                      </label>
                      <input type="number" className="form-control" step="0.01" min="0" defaultValue="5" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-calendar-check-fill me-1 text-primary"></i>
                        Data Saída
                      </label>
                      <input type="text" className="form-control-plaintext" readOnly defaultValue="09/04/2026" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-credit-card-fill me-1 text-primary"></i>
                        Tipo de Pagamento
                      </label>
                      <select className="form-select" defaultValue="pix">
                        <option value="debito">Débito</option>
                        <option value="credito">Crédito</option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="pix">Pix</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-check-circle-fill me-1 text-primary"></i>
                        Status
                      </label>
                      <select className="form-select" defaultValue="pago">
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
                      <label className="form-label fw-semibold">
                        <i className="bi bi-chat-left-text-fill me-1 text-primary"></i>
                        Observações
                      </label>
                      <textarea className="form-control" rows={3} defaultValue="Cliente frequente, aplicado desconto de fidelidade." />
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash me-2"></i>
                        Excluir Saída
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
