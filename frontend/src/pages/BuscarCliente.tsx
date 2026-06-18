import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarCliente() {
  usePageTitle("Cliente — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-cliente">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="cliente" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Buscar Cliente">
              <form method="post" onSubmit={(event) => event.preventDefault()}>
                <div className="row g-2 mb-4">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person-fill"></i>
                      </span>
                      <input type="text" className="form-control" id="nome" name="nome" placeholder="Digite o nome do cliente" />
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
                        <i className="bi bi-person-fill me-1 text-primary"></i>
                        Nome
                      </label>
                      <input type="text" className="form-control" defaultValue="João Silva" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-card-text me-1 text-primary"></i>
                        CPF
                      </label>
                      <input type="text" className="form-control" defaultValue="123.456.789-00" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-telephone-fill me-1 text-primary"></i>
                        Telefone
                      </label>
                      <input type="text" className="form-control" defaultValue="(11) 99999-0000" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-tag-fill me-1 text-primary"></i>
                        Tipo
                      </label>
                      <select className="form-select" defaultValue="conveniado">
                        <option value="avulso">Avulso</option>
                        <option value="conveniado">Conveniado</option>
                        <option value="mensalista">Mensalista</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash me-2"></i>
                        Excluir Cliente
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
