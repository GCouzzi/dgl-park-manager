import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroTipoServico() {
  usePageTitle("Tipo de Serviço — E-Estacionamento");

  return (
    <AppShell role="funcionario" activeSection="cadastros" activeItem="/cadastro-tipo-servico">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="tipo-servico" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Tipo de Serviço">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="nome" placeholder="Nome" />
                    <label htmlFor="nome">Nome</label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="descricao" placeholder="Descrição" />
                    <label htmlFor="descricao">Descrição</label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="number" className="form-control" id="valor" placeholder="Valor" step="0.01" min="0" />
                    <label htmlFor="valor">
                      <i className="bi bi-currency-dollar me-2"></i>
                      Valor
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="number" className="form-control" id="desconto-ativo" placeholder="Desconto Ativo" step="1" min="0" max="100" />
                    <label htmlFor="desconto-ativo">
                      <i className="bi bi-percent me-2"></i>
                      Desconto
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
