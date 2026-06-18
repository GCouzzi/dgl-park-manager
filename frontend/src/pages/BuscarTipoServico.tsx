import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarTipoServico() {
  usePageTitle("Tipo de Serviço — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-tipo-servico">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="tipo-servico" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Alterar Tipo de Serviço">
              <div className="card border">
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-tag-fill me-1 text-primary"></i>
                        Nome
                      </label>
                      <input type="text" className="form-control" defaultValue="Troca de óleo" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-currency-dollar me-1 text-primary"></i>
                        Valor (R$)
                      </label>
                      <input type="number" step="0.01" className="form-control" defaultValue="400.00" />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-card-text me-1 text-primary"></i>
                        Descrição
                      </label>
                      <textarea className="form-control" rows={2} defaultValue="Troca de óleo muito boa" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-percent me-1 text-primary"></i>
                        Desconto (%)
                      </label>
                      <input type="number" step="1" className="form-control" max="100" defaultValue="0" />
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
