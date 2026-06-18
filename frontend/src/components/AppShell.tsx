import type { ReactNode } from 'react';
import { useAuth } from '../auth/AuthContext';
import type { Role } from '../config/navigation';
import AppFooter from './AppFooter';
import AppNavbar from './AppNavbar';

interface AppShellProps {
  children: ReactNode;
  role?: Role;
  activeSection?: string;
  activeItem?: string;
  showNavbar?: boolean;
  showSessionActions?: boolean;
  className?: string;
}

export default function AppShell({
  children,
  role = 'funcionario',
  activeSection,
  activeItem,
  showNavbar = true,
  showSessionActions = false,
  className = '',
}: AppShellProps) {
  const { appRole, isAuthenticated } = useAuth();
  const resolvedRole = appRole ?? role;
  const shouldShowSessionActions = showSessionActions || isAuthenticated;

  return (
    <div className={`app-shell d-flex flex-column min-vh-100 ${className}`.trim()}>
      {showNavbar && (
        <AppNavbar
          role={resolvedRole}
          activeSection={activeSection}
          activeItem={activeItem}
          showSessionActions={shouldShowSessionActions}
        />
      )}
      {children}
      <AppFooter />
    </div>
  );
}
