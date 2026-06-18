import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import PageCard from '../components/PageCard';

export default function RelatorioEntradasVeiculos() {
  usePageTitle("Entradas de Veículos — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="relatorios" activeItem="/relatorio-entradas-veiculos">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <section className="col-12 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Total de entradas de veículos em um certo período">
                <div className="row g-3 mb-4">
                  <div className="form-floating col-12 col-md-4">
                    <input type="date" className="form-control" id="dataInicio" />
                    <label htmlFor="dataInicio">
                      <i className="bi bi-calendar-check me-2"></i>
                      Início
                    </label>
                  </div>
                  <div className="form-floating col-12 col-md-4">
                    <input type="date" className="form-control" id="dataFim" />
                    <label htmlFor="dataFim">
                      <i className="bi bi-calendar-x me-2"></i>
                      Fim
                    </label>
                  </div>
                  <div className="form-floating col-12 col-md-4">
                    <select className="form-select" id="tipoVeiculo" defaultValue="Tipo de veículo">
                      <option disabled>Tipo de veículo</option>
                      <option value="carro">Carro</option>
                      <option value="moto">Moto</option>
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
                        <th className="w-75">Tipo</th>
                        <th>Entradas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Carro</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>Moto</td>
                        <td>13</td>
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
