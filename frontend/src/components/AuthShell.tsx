import type { ReactNode } from 'react';
import AppShell from './AppShell';

interface AuthShellProps {
  children: ReactNode;
}

export default function AuthShell({ children }: AuthShellProps) {
  return (
    <AppShell showNavbar={false} className="auth-shell bg-light">
      {children}
    </AppShell>
  );
}
