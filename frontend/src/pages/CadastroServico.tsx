import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroServico() {
  usePageTitle("Serviço — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="processos" activeItem="/cadastro-servico">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="servico" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Serviço">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <select className="form-select" id="prestador" defaultValue="Selecione o prestador">
                      <option disabled>Selecione o prestador</option>
                      <option value="1">João Silva</option>
                      <option value="2">Maria Oliveira</option>
                      <option value="3">Carlos Souza</option>
                    </select>
                    <label htmlFor="prestador">
                      <i className="bi bi-person-badge-fill me-2"></i>
                      Prestador
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="tipo" defaultValue="Selecione o tipo">
                      <option disabled>Selecione o tipo</option>
                      <option value="1">Troca de óleo</option>
                      <option value="2">Lava rápido</option>
                    </select>
                    <label htmlFor="tipo">
                      <i className="bi bi-tag-fill me-2"></i>
                      Tipo de Serviço
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="number" className="form-control" id="desconto" placeholder="Desconto" min="0" max="100" step="1" />
                    <label htmlFor="desconto">
                      <i className="bi bi-percent me-2"></i>
                      Desconto
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="placa" defaultValue="Selecione a placa">
                      <option disabled>Selecione a placa</option>
                      <option value="1">ABC-1234</option>
                      <option value="2">XYZ-5678</option>
                      <option value="3">BRA-2024</option>
                    </select>
                    <label htmlFor="placa">
                      <i className="bi bi-truck-front-fill me-2"></i>
                      Placa do Veículo
                    </label>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-success w-100">
                      <i className="bi bi-save me-2"></i>
                      Salvar
                    </button>
                  </div>
                  <div className="col-12">
                    <button type="reset" className="btn btn-warning w-100">
                      <i className="bi bi-x-circle me-2"></i>
                      Limpar
                    </button>
                  </div>
                </div>
              
            </PageCard>
          </form>
        </section>
      </div>
    </main>
    </AppShell>
  );
}
