import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Role } from '../config/navigation';
import {
  clearStoredUser,
  homePathForUser,
  persistUser,
  readStoredUser,
  roleFromTipoUsuario,
  type AuthUser,
} from './auth';

interface AuthContextValue {
  user: AuthUser | null;
  appRole: Role | null;
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  getHomePath: () => string;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());

  const value = useMemo<AuthContextValue>(() => {
    const appRole = user ? roleFromTipoUsuario(user.tipoUsuario) : null;

    return {
      user,
      appRole,
      isAuthenticated: Boolean(user),
      login: (nextUser) => {
        persistUser(nextUser);
        setUser(nextUser);
      },
      logout: () => {
        clearStoredUser();
        setUser(null);
      },
      getHomePath: () => (user ? homePathForUser(user) : '/login'),
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider.');
  }

  return context;
}
