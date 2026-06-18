import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import PageCard from '../components/PageCard';

export default function RelatorioFinanceiro() {
  usePageTitle("Relatório Financeiro");

  return (
    <AppShell role="administrador" activeSection="relatorios" activeItem="/relatorio-financeiro">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <section className="col-12 p-5">
          <PageCard title="Relatório Financeiro">
              <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                  <thead className="table-primary">
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Tipo</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Estacionamento</td>
                      <td>
                        <span className="badge bg-success">Receita</span>
                      </td>
                      <td>R$ 50,00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gastos com Produtos</td>
                      <td>
                        <span className="badge bg-danger">Despesa</span>
                      </td>
                      <td>R$ 200,00</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Lava rápido</td>
                      <td>
                        <span className="badge bg-success">Receita</span>
                      </td>
                      <td>R$ 30,00</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Conta de Energia</td>
                      <td>
                        <span className="badge bg-danger">Despesa</span>
                      </td>
                      <td>R$ 150,00</td>
                    </tr>
                    <tr className="table-light">
                      <td colSpan={3} className="text-end fw-bold">Total Receitas</td>
                      <td className="fw-bold text-success">R$ 80,00</td>
                    </tr>
                    <tr className="table-light">
                      <td colSpan={3} className="text-end fw-bold">Total Despesas</td>
                      <td className="fw-bold text-danger">R$ 350,00</td>
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
