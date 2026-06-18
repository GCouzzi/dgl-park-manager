import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ListarEntrada() {
  usePageTitle("Listar Entradas — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/processo-entrada">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="entrada" activeAction="list" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Listar Entradas">
                <div className="row g-2 mb-4">
                  <div className="col-12 col-xxl-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Vaga" />
                  </div>
                  <div className="col-12 col-xxl-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Cliente" />
                  </div>
                  <div className="col-12 col-xxl-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Veículo (placa)" />
                  </div>
                  <div className="col-12 col-xxl-2 d-flex gap-2">
                    <button type="button" className="btn btn-primary btn-sm w-100">
                      <i className="bi bi-search"></i>
                    </button>
                    <button type="reset" className="btn btn-outline-secondary btn-sm w-100">Limpar</button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle">
                    <thead className="table-primary">
                      <tr>
                        <th>#</th>
                        <th>Vaga</th>
                        <th>Cliente</th>
                        <th>Veículo</th>
                        <th>Horário</th>
                        <th className="text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>A01</td>
                        <td>João Silva</td>
                        <td>ABC-1234</td>
                        <td>09/04/2026 08:32</td>
                        <td className="text-center">
                          <a href="#/buscar-entrada" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>B03</td>
                        <td>Maria Oliveira</td>
                        <td>DEF-5678</td>
                        <td>09/04/2026 10:15</td>
                        <td className="text-center">
                          <a href="#/buscar-entrada" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>C07</td>
                        <td>Carlos Souza</td>
                        <td>GHI-9012</td>
                        <td>09/04/2026 14:50</td>
                        <td className="text-center">
                          <a href="#/buscar-entrada" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav className="mt-4">
                  <ul className="pagination justify-content-center d-flex flex-column flex-sm-row">
                    <li className="page-item disabled">
                      <a className="page-link">Anterior</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">Próxima</a>
                    </li>
                  </ul>
                </nav>
              
            </PageCard>
          </form>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
