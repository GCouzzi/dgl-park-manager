import { usePageTitle } from '../hooks/usePageTitle';
import AuthShell from '../components/AuthShell';

export default function EsqueceuSenha() {
  usePageTitle("Esqueceu a Senha — E-Estacionamento");

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
            <h2 className="h5 text-muted text-center mb-1">Recuperar Senha</h2>
            <p className="text-center text-muted small mb-4">Informe seu nome de usuário para redefinir a senha.</p>
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
                  <input type="password" className="form-control" id="novaSenha" placeholder="Nova senha" />
                  <label htmlFor="novaSenha">
                    <i className="bi bi-lock-fill me-2"></i>
                    Nova senha
                  </label>
                </div>
                <div className="form-floating col-12">
                  <input type="password" className="form-control" id="confirmarSenha" placeholder="Confirmar nova senha" />
                  <label htmlFor="confirmarSenha">
                    <i className="bi bi-lock-fill me-2"></i>
                    Confirmar nova senha
                  </label>
                </div>
                <div className="col-12 d-flex gap-2 mt-2">
                  <button type="button" className="btn btn-warning flex-grow-1" onClick={() => { window.location.hash = '/login'; }}>
                    <i className="bi bi-key me-2"></i>
                    Redefinir senha
                  </button>
                  <a href="#/login" className="btn btn-outline-secondary flex-grow-1">
                    <i className="bi bi-arrow-left me-2"></i>
                    Voltar
                  </a>
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
