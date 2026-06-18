import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function CadastroUsuario() {
  usePageTitle("Usuário — E-Estacionamento");

  return (
    <AppShell role="administrador" activeSection="cadastros" activeItem="/cadastro-usuario">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="usuario" activeAction="insert" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <form method="post" onSubmit={(event) => event.preventDefault()}>
            <PageCard title="Inserir Usuário">
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="nomeUsuario" placeholder="Nome de Usuário" />
                    <label htmlFor="nomeUsuario">
                      <i className="bi bi-person-fill me-2"></i>
                      Nome de usuário
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="password" className="form-control" id="senha" placeholder="Senha" />
                    <label htmlFor="senha">
                      <i className="bi bi-lock-fill me-2"></i>
                      Senha
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
                    <input type="tel" className="form-control" id="telefone" placeholder="Telefone" />
                    <label htmlFor="telefone">
                      <i className="bi bi-telephone-fill me-2"></i>
                      Telefone
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input type="text" className="form-control" id="endereco" placeholder="Endereço" />
                    <label htmlFor="endereco">
                      <i className="bi bi-card-text me-2"></i>
                      Endereço
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <select className="form-select" id="tipo" defaultValue="Selecione o tipo de usuário">
                      <option disabled>Selecione o tipo de usuário</option>
                      <option value="funcionario">Funcionário</option>
                      <option value="administrador">Administrador</option>
                    </select>
                    <label htmlFor="tipo">
                      <i className="bi bi-shield-fill me-2"></i>
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
