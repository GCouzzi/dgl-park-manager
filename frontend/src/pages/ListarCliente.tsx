import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ListarCliente() {
  usePageTitle("Cliente — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-cliente">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="cliente" activeAction="list" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Listar Clientes">
                <div className="row g-2 mb-4">
                  <div className="col-12 col-xxl-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Nome" />
                  </div>
                  <div className="col-12 col-xxl-2">
                    <input type="text" className="form-control form-control-sm" placeholder="CPF" maxLength={14} />
                  </div>
                  <div className="col-12 col-xxl-2">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Tipo</option>
                      <option value="avulso">Avulso</option>
                      <option value="conveniado">Conveniado</option>
                      <option value="mensalista">Mensalista</option>
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
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th className="text-center">Tipo</th>
                        <th className="text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>123.456.789-00</td>
                        <td>(11) 99999-0000</td>
                        <td className="text-center">
                          <span className="badge bg-secondary">Avulso</span>
                        </td>
                        <td className="text-center">
                          <a href="#/buscar-cliente" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Maria Oliveira</td>
                        <td>987.654.321-00</td>
                        <td>(21) 98888-1111</td>
                        <td className="text-center">
                          <span className="badge bg-success">Mensalista</span>
                        </td>
                        <td className="text-center">
                          <a href="#/buscar-cliente" className="btn btn-sm btn-primary me-1">
                            <i className="bi bi-pencil"></i>
                          </a>
                          <button type="button" className="btn btn-sm btn-danger">
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Carlos Souza</td>
                        <td>111.222.333-44</td>
                        <td>(31) 97777-2222</td>
                        <td className="text-center">
                          <span className="badge bg-info text-dark">Conveniado</span>
                        </td>
                        <td className="text-center">
                          <a href="#/buscar-cliente" className="btn btn-sm btn-primary me-1">
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
