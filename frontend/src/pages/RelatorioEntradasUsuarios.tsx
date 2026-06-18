import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import PageCard from '../components/PageCard';

export default function RelatorioEntradasUsuarios() {
  usePageTitle("Entradas por Usuário — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="relatorios" activeItem="/relatorio-entradas-usuarios">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <section className="col-12 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Quantia de vezes cada usuário registrou entrada">
                <div className="row g-3 mb-4">
                  <div className="form-floating col-12 col-md-6">
                    <input type="date" className="form-control" id="dataInicio" />
                    <label htmlFor="dataInicio">
                      <i className="bi bi-calendar-check me-2"></i>
                      Início
                    </label>
                  </div>
                  <div className="form-floating col-12 col-md-6">
                    <input type="date" className="form-control" id="dataFim" />
                    <label htmlFor="dataFim">
                      <i className="bi bi-calendar-x me-2"></i>
                      Fim
                    </label>
                  </div>
                  <div className="col-12 d-flex gap-2 justify-content-end mt-2">
                    <button type="button" className="btn btn-primary px-4">
                      <i className="bi bi-search me-2"></i>
                      Buscar
                    </button>
                    <button type="reset" className="btn btn-outline-secondary px-4">Limpar</button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover align-middle">
                    <thead className="table-secondary">
                      <tr>
                        <th className="w-75">Usuário</th>
                        <th>Entradas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lucas</td>
                        <td>21</td>
                      </tr>
                      <tr>
                        <td>Gabriel</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>Diogo</td>
                        <td>19</td>
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
