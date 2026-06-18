import type { Role } from '../config/navigation';

export type UsuarioTipo = 'FUNCIONARIO' | 'ADMINISTRADOR';

export interface AuthUser {
  id: number;
  nomeUsuario: string;
  tipoUsuario: UsuarioTipo;
}

export const AUTH_STORAGE_KEY = 'usuarioLogado';

export function roleFromTipoUsuario(tipoUsuario: UsuarioTipo): Role {
  return tipoUsuario === 'ADMINISTRADOR' ? 'administrador' : 'funcionario';
}

export function homePathForRole(role: Role): string {
  return role === 'administrador' ? '/homepage-administrador' : '/homepage-funcionario';
}

export function homePathForUser(user: AuthUser): string {
  return homePathForRole(roleFromTipoUsuario(user.tipoUsuario));
}

export function isAuthUser(value: unknown): value is AuthUser {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<AuthUser>;

  return (
    typeof candidate.id === 'number' &&
    typeof candidate.nomeUsuario === 'string' &&
    (candidate.tipoUsuario === 'FUNCIONARIO' || candidate.tipoUsuario === 'ADMINISTRADOR')
  );
}

export function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as unknown;
    return isAuthUser(parsed) ? parsed : null;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function persistUser(user: AuthUser) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
