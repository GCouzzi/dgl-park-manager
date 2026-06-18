import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ListarVeiculo() {
  usePageTitle("Veículo");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-veiculo">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="veiculo" activeAction="list" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Listar Veículos">
                <div className="row g-2 mb-4">
                  <div className="col-12 col-md-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Placa" />
                  </div>
                  <div className="col-12 col-md-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Modelo" />
                  </div>
                  <div className="col-6 col-md-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Cor</option>
                      <option>Preto</option>
                      <option>Branco</option>
                      <option>Prata</option>
                      <option>Vermelho</option>
                      <option>Azul</option>
                    </select>
                  </div>
                  <div className="col-6 col-md-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Banido?</option>
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
                        <th>#</th>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Cor</th>
                        <th className="text-center">Banido</th>
                        <th className="text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>ABC-1234</td>
                        <td>Civic</td>
                        <td>Preto</td>
                        <td className="text-center">
                          <span className="badge bg-danger">Sim</span>
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>DEF-5678</td>
                        <td>Corolla</td>
                        <td>Branco</td>
                        <td className="text-center">
                          <span className="badge bg-success">Não</span>
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>GHI-9012</td>
                        <td>Onix</td>
                        <td>Prata</td>
                        <td className="text-center">
                          <span className="badge bg-success">Não</span>
                        </td>
                        <td className="text-center">
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
