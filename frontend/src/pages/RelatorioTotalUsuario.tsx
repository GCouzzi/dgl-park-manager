import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import PageCard from '../components/PageCard';

export default function RelatorioTotalUsuario() {
  usePageTitle("Total por Usuário");

  return (
    <AppShell role="funcionario" activeSection="relatorios" activeItem="/relatorio-total-usuario">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <section className="col-12 p-5">
          <PageCard title="Total Gasto por Usuário">
              <div className="row g-2 mb-4">
                <div className="col-12 col-xxl-3">
                  <div className="input-group input-group-sm">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Filtrar por nome do usuário" />
                    <button type="button" className="btn btn-primary">
                      <i className="bi bi-search"></i>
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">Limpar</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th>#</th>
                      <th>Usuário</th>
                      <th>Total Gasto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gabriel</td>
                      <td>R$ 1.250,00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Lucas</td>
                      <td>R$ 980,00</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Diogo</td>
                      <td>R$ 1.540,00</td>
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
        </section>
      </div>
    </main>
    </AppShell>
  );
}
