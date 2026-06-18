import { usePageTitle } from '../hooks/usePageTitle';
import AuthShell from '../components/AuthShell';

export default function Login() {
  usePageTitle("Login — E-Estacionamento");

  return (
    <AuthShell>
    <main className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center">
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <div className="card shadow-sm">
          <div className="card-header p-4 bg-primary text-white text-center">
            <h1 className="display-6 mb-0">
              <i className="bi bi-p-circle-fill me-2"></i>
              E-Estacionamento
            </h1>
          </div>
          <div className="card-body p-4">
            <h2 className="h5 text-muted text-center mb-4">Entrar no Sistema</h2>
            <form method="post" action="#" onSubmit={(event) => event.preventDefault()}>
              <div className="row g-3">
                <div className="form-floating col-12">
                  <input type="text" className="form-control" id="nomeUsuario" placeholder="Nome de usuário" />
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
                <div className="col-12 d-flex gap-2 mt-2">
                  <button type="button" className="btn btn-success flex-grow-1" onClick={() => { window.location.hash = '/homepage-funcionario'; }}>
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login (Funcionário Demo)
                  </button>
                  <button type="button" className="btn btn-success flex-grow-1" onClick={() => { window.location.hash = '/homepage-administrador'; }}>
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login (Administrador Demo)
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    </AuthShell>
  );
}
