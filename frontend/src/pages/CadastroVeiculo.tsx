import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroVeiculo() {
  usePageTitle("Modelo");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-veiculo">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="veiculo" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Veículo">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="placa" placeholder="Placa" />
                    <label htmlFor="placa">
                      <i className="bi bi-car-front-fill me-2"></i>
                      Placa
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="modelo" defaultValue="Selecione um modelo">
                      <option disabled>Selecione um modelo</option>
                      <option value="1">Gol</option>
                      <option value="2">Civic</option>
                      <option value="3">Corolla</option>
                    </select>
                    <label htmlFor="modelo">
                      <i className="bi bi-car-front me-2"></i>
                      Modelo
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="cor" defaultValue="Selecione a cor">
                      <option disabled>Selecione a cor</option>
                      <option>Preto</option>
                      <option>Branco</option>
                      <option>Prata</option>
                      <option>Vermelho</option>
                      <option>Azul</option>
                    </select>
                    <label htmlFor="cor">
                      <i className="bi bi-palette-fill me-2"></i>
                      Cor
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="banido" defaultValue="Está banido?">
                      <option disabled>Está banido?</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                    <label htmlFor="banido">
                      <i className="bi bi-shield-fill-exclamation me-2"></i>
                      Banido
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <textarea className="form-control" placeholder="Motivo" id="motivo"></textarea>
                    <label htmlFor="motivo">
                      <i className="bi bi-exclamation-circle-fill me-2"></i>
                      Motivo
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
