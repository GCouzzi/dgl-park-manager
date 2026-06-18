import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import type { Usuario } from '../api/types';
import { homePathForUser, type AuthUser } from '../auth/auth';
import { useAuth } from '../auth/AuthContext';
import AuthShell from '../components/AuthShell';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Login() {
  usePageTitle('Login — E-Estacionamento');

  const navigate = useNavigate();
  const { isAuthenticated, getHomePath, login } = useAuth();
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(getHomePath(), { replace: true });
    }
  }, [getHomePath, isAuthenticated, navigate]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const usuarios = await api.get<Usuario[]>('/usuarios');
      const normalizedNomeUsuario = nomeUsuario.trim();
      const usuario = usuarios.find((item) => item.nomeUsuario === normalizedNomeUsuario && item.senha === senha);

      if (!usuario) {
        setError('Usuário ou senha inválidos.');
        return;
      }

      const usuarioLogado: AuthUser = {
        id: usuario.id,
        nomeUsuario: usuario.nomeUsuario,
        tipoUsuario: usuario.tipoUsuario,
      };

      login(usuarioLogado);
      navigate(homePathForUser(usuarioLogado), { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao consultar usuários na API.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell>
      <main className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
          <div className="card shadow-sm">
            <div className="card-header p-4 bg-primary text-white text-center">
              <h1 className="display-6 mb-0">
                <i className="bi bi-p-circle-fill me-2" />
                E-Estacionamento
              </h1>
            </div>
            <div className="card-body p-4">
              <h2 className="h5 text-muted text-center mb-4">Entrar no Sistema</h2>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="form-floating col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="nomeUsuario"
                      placeholder="Nome de usuário"
                      value={nomeUsuario}
                      required
                      onChange={(event) => setNomeUsuario(event.target.value)}
                    />
                    <label htmlFor="nomeUsuario">
                      <i className="bi bi-person-fill me-2" />
                      Nome de usuário
                    </label>
                  </div>
                  <div className="form-floating col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="senha"
                      placeholder="Senha"
                      value={senha}
                      required
                      onChange={(event) => setSenha(event.target.value)}
                    />
                    <label htmlFor="senha">
                      <i className="bi bi-lock-fill me-2" />
                      Senha
                    </label>
                  </div>
                  <div className="col-12 mt-2">
                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                      {loading ? <span className="spinner-border spinner-border-sm me-2" /> : <i className="bi bi-box-arrow-in-right me-2" />}
                      Entrar
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
