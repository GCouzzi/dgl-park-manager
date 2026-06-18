import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import PageCard from '../components/PageCard';

export default function RelatorioCarrosBanidos() {
  usePageTitle("Carros Banidos — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="relatorios" activeItem="/relatorio-carros-banidos">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <section className="col-12 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Carros Banidos">
                <div className="row g-3 mb-4">
                  <div className="form-floating col-12 col-md-4">
                    <select className="form-select" id="modelo" defaultValue="Modelo">
                      <option disabled>Modelo</option>
                      <option value="carro">Corsa</option>
                      <option value="moto">Uno</option>
                    </select>
                    <label htmlFor="tipoVeiculo">
                      <i className="bi bi-car-front me-2"></i>
                      Tipo
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
                        <th className="w-75">Modelo</th>
                        <th>Entradas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Uno</td>
                        <td>MPB123</td>
                      </tr>
                      <tr>
                        <td>Corsa</td>
                        <td>KMO800</td>
                      </tr>
                      <tr className="table-light">
                        <td className="text-end fw-bold">Número de Carros Banidos</td>
                        <td className="fw-bold text-danger">2</td>
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
