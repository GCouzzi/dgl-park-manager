import { usePageTitle } from '../hooks/usePageTitle';
import AppShell from '../components/AppShell';
import CrudSidebar from '../components/CrudSidebar';
import PageCard from '../components/PageCard';

export default function BuscarUsuario() {
  usePageTitle("Usuário — E-Estacionamento");

  return (
    <AppShell role="administrador" activeSection="cadastros" activeItem="/cadastro-usuario">
    <main className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <CrudSidebar resource="usuario" activeAction="search" />
        <section className="col-12 col-md-10 col-xl-9 col-xxl-10 p-5">
          <PageCard title="Alterar Usuário">
              <div className="card border">
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-person-fill me-1 text-primary"></i>
                        Nome de Usuário
                      </label>
                      <input type="text" className="form-control" defaultValue="João Silva" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-card-text me-1 text-primary"></i>
                        CPF
                      </label>
                      <input type="text" className="form-control" defaultValue="123.456.789-00" />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-geo-alt-fill me-1 text-primary"></i>
                        Endereço
                      </label>
                      <input type="text" className="form-control" defaultValue="Rua das Flores, 123" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-telephone-fill me-1 text-primary"></i>
                        Telefone
                      </label>
                      <input type="text" className="form-control" defaultValue="(11) 99999-0000" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-shield-lock-fill me-1 text-primary"></i>
                        Tipo
                      </label>
                      <select className="form-select" defaultValue="administrador">
                        <option value="funcionario">Funcionário</option>
                        <option value="administrador">Administrador</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <hr />
                      <h6 className="text-muted">Alterar senha</h6>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-lock-fill me-1 text-primary"></i>
                        Nova senha
                      </label>
                      <input type="password" className="form-control" placeholder="Digite a nova senha" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">
                        <i className="bi bi-lock-fill me-1 text-primary"></i>
                        Confirmar senha
                      </label>
                      <input type="password" className="form-control" placeholder="Confirme a nova senha" />
                    </div>
                    <div className="col-12">
                      <hr />
                      <button type="button" className="btn btn-success me-2">
                        <i className="bi bi-save me-2"></i>
                        Salvar
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="bi bi-trash me-2"></i>
                        Excluir Usuário
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
