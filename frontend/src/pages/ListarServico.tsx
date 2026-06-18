import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ListarServico() {
  usePageTitle("Serviço — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/cadastro-servico">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="servico" activeAction="list" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Listar Serviços">
                <div className="row g-2 mb-4">
                  <div className="col-12 col-xxl-3">
                    <input type="text" className="form-control form-control-sm" placeholder="Prestador" />
                  </div>
                  <div className="col-12 col-xxl-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Placa" />
                  </div>
                  <div className="col-12 col-xxl-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Tipo de Serviço" />
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
                        <th>Prestador</th>
                        <th>Tipo</th>
                        <th>Placa</th>
                        <th>Desconto (%)</th>
                        <th>Data do Serviço</th>
                        <th className="text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>Lava rápido</td>
                        <td>ABC-1234</td>
                        <td>0%</td>
                        <td>12/04/2026 09:30</td>
                        <td className="text-center">
                          <a href="#/buscar-servico" className="btn btn-sm btn-primary me-1">
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
                        <td>Troca de óleo</td>
                        <td>XYZ-5678</td>
                        <td>10%</td>
                        <td>12/04/2026 11:00</td>
                        <td className="text-center">
                          <a href="#/buscar-servico" className="btn btn-sm btn-primary me-1">
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
                        <td>Troca de óleo</td>
                        <td>BRA-2024</td>
                        <td>5%</td>
                        <td>12/04/2026 14:30</td>
                        <td className="text-center">
                          <a href="#/buscar-servico" className="btn btn-sm btn-primary me-1">
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
