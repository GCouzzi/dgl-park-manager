import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function ListarSaida() {
  usePageTitle("Saída");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/cadastro-saida">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="saida" activeAction="list" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Listar Saídas">
                <div className="row g-2 mb-4">
                  <div className="col-12 col-xxl-2">
                    <input type="text" className="form-control form-control-sm" placeholder="Placa" />
                  </div>
                  <div className="col-12 col-xxl-2">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">De</span>
                      <input type="date" className="form-control" id="dataInicial" />
                    </div>
                  </div>
                  <div className="col-12 col-xxl-2">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">Até</span>
                      <input type="date" className="form-control" id="dataFinal" />
                    </div>
                  </div>
                  <div className="col-12 col-xxl-1">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Pagamento</option>
                      <option value="debito">Débito</option>
                      <option value="credito">Crédito</option>
                      <option value="dinheiro">Dinheiro</option>
                      <option value="pix">Pix</option>
                    </select>
                  </div>
                  <div className="col-12 col-xxl-1">
                    <select className="form-select form-select-sm" defaultValue="">
                      <option value="">Status</option>
                      <option value="pago">Pago</option>
                      <option value="nao_pago">Não Pago</option>
                    </select>
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
                        <th>Placa</th>
                        <th>Desconto</th>
                        <th>Data Saída</th>
                        <th>Pagamento</th>
                        <th>Criador</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>ABC-1234</td>
                        <td>R$ 5,00</td>
                        <td>09/04/2026</td>
                        <td>Pix</td>
                        <td>Gabriel</td>
                        <td className="text-center">
                          <span className="badge bg-success">Pago</span>
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
                        <td>R$ 0,00</td>
                        <td>09/04/2026</td>
                        <td>Crédito</td>
                        <td>Lucas</td>
                        <td className="text-center">
                          <span className="badge bg-danger">Não Pago</span>
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
                        <td>R$ 10,00</td>
                        <td>08/04/2026</td>
                        <td>Dinheiro</td>
                        <td>Diogo</td>
                        <td className="text-center">
                          <span className="badge bg-success">Pago</span>
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
