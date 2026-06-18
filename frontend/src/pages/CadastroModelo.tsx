import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroModelo() {
  usePageTitle("Modelo");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-modelo">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="modelo" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Modelo" bodyClassName="card-body col-12">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="nome" placeholder="Nome" />
                    <label htmlFor="nome">
                      <i className="bi bi-person-fill me-2"></i>
                      Nome
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="number" className="form-control" id="ano" placeholder="Ano" />
                    <label htmlFor="ano">
                      <i className="bi bi-calendar-fill me-2"></i>
                      Ano
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="marca" placeholder="Marca" />
                    <label htmlFor="marca">
                      <i className="bi bi-tag-fill me-2"></i>
                      Marca
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
