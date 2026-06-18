import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroCliente() {
  usePageTitle("Cliente — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-cliente">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="cliente" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Cliente">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="nome" placeholder="Nome" />
                    <label htmlFor="nome">
                      <i className="bi bi-person-fill me-2"></i>
                      Nome
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="cpf" placeholder="CPF" maxLength={14} />
                    <label htmlFor="cpf">
                      <i className="bi bi-card-text me-2"></i>
                      CPF
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="tel" className="form-control" id="telefone" placeholder="Telefone" maxLength={15} />
                    <label htmlFor="telefone">
                      <i className="bi bi-telephone-fill me-2"></i>
                      Telefone
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="tipo" defaultValue="Selecione o tipo">
                      <option disabled>Selecione o tipo</option>
                      <option value="avulso">Avulso</option>
                      <option value="conveniado">Conveniado</option>
                      <option value="mensalista">Mensalista</option>
                    </select>
                    <label htmlFor="tipo">
                      <i className="bi bi-tag-fill me-2"></i>
                      Tipo
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
