import type { ReactNode } from 'react';
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
  return (
    <div className={`app-shell d-flex flex-column min-vh-100 ${className}`.trim()}>
      {showNavbar && (
        <AppNavbar
          role={role}
          activeSection={activeSection}
          activeItem={activeItem}
          showSessionActions={showSessionActions}
        />
      )}
      {children}
      <AppFooter />
    </div>
  );
}
