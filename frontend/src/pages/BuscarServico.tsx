import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarServico() {
  usePageTitle("Serviço — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/cadastro-servico">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="servico" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Atualizar Serviço">
              <div className="card border">
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-person-badge-fill me-1 text-primary"></i>
                        Prestador
                      </label>
                      <select className="form-select" defaultValue="Maria Oliveira">
                        <option>João Silva</option>
                        <option>Maria Oliveira</option>
                        <option>Carlos Souza</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-tag-fill me-1 text-primary"></i>
                        Tipo de Serviço
                      </label>
                      <select className="form-select" defaultValue="Lava rápido">
                        <option>Troca de óleo</option>
                        <option>Lava rápido</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-percent me-1 text-primary"></i>
                        Desconto
                      </label>
                      <input type="number" className="form-control" min="0" max="100" defaultValue="10" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-truck-front-fill me-1 text-primary"></i>
                        Placa
                      </label>
                      <select className="form-select" defaultValue="XYZ-5678">
                        <option>ABC-1234</option>
                        <option>XYZ-5678</option>
                        <option>BRA-2024</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-clock-fill me-1 text-primary"></i>
                        Data do Serviço
                      </label>
                      <input type="text" className="form-control" readOnly defaultValue="12/04/2026 14:30" />
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </PageCard>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
