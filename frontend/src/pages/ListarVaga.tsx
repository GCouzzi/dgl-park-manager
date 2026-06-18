import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ListarVaga() {
  usePageTitle("Vaga — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-vaga">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="vaga" activeAction="list" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Listar Vagas">
                <div className="row g-2 mb-4">
                  <div className="col-12 col-xxl-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Tipo</option>
                      <option value="carro">Carro</option>
                      <option value="moto">Moto</option>
                    </select>
                  </div>
                  <div className="col-12 col-xxl-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Status</option>
                      <option value="livre">Livre</option>
                      <option value="ocupada">Ocupada</option>
                      <option value="manutencao">Manutenção</option>
                    </select>
                  </div>
                  <div className="col-12 col-xxl-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Coberta</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                  <div className="col-12 col-xxl-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Preferencial</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-2 d-flex gap-2">
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
                        <th>Código</th>
                        <th>Tipo</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Coberta</th>
                        <th className="text-center">Preferencial</th>
                        <th className="text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>V-001</td>
                        <td>Carro</td>
                        <td className="text-center">
                          <span className="badge bg-success">Livre</span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-secondary">Sim</span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-secondary">Não</span>
                        </td>
                        <td className="text-center">
                          <a href="#/buscar-vaga" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>V-002</td>
                        <td>Moto</td>
                        <td className="text-center">
                          <span className="badge bg-danger">Ocupada</span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-secondary">Não</span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-warning text-dark">Sim</span>
                        </td>
                        <td className="text-center">
                          <a href="#/buscar-vaga" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>V-003</td>
                        <td>Carro</td>
                        <td className="text-center">
                          <span className="badge bg-warning text-dark">Manutenção</span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-secondary">Sim</span>
                        </td>
                        <td className="text-center">
                          <span className="badge bg-warning text-dark">Sim</span>
                        </td>
                        <td className="text-center">
                          <a href="#/buscar-vaga" className="btn btn-sm btn-primary me-1">
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
