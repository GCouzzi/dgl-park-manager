import { Link } from 'react-router-dom';
import { NAVIGATION_BY_ROLE, ROLE_DETAILS, type NavigationDropdown, type Role, type RouteItem } from '../config/navigation';
import Icon from './Icon';

interface DropdownItemProps {
  item: RouteItem;
  activeItem?: string;
}

function DropdownItem({ item, activeItem }: DropdownItemProps) {
  return (
    <li>
      <Link className={`dropdown-item${activeItem === item.to ? ' active' : ''}`} to={item.to}>
        {item.label}
      </Link>
    </li>
  );
}

interface NavDropdownProps {
  group: NavigationDropdown;
  activeSection?: string;
  activeItem?: string;
}

function NavDropdown({ group, activeSection, activeItem }: NavDropdownProps) {
  const isActive = activeSection === group.key;

  return (
    <li className="nav-item dropdown">
      <a
        className={`nav-link dropdown-toggle${isActive ? ' active' : ''}`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        onClick={(event) => event.preventDefault()}
        aria-expanded="false"
      >
        {group.label}
      </a>
      <ul className="dropdown-menu">
        {group.items.map((item) => (
          <DropdownItem key={item.to} item={item} activeItem={activeItem} />
        ))}
      </ul>
    </li>
  );
}

export interface AppNavbarProps {
  role?: Role;
  activeSection?: string;
  activeItem?: string;
  showSessionActions?: boolean;
}

export default function AppNavbar({
  role = 'funcionario',
  activeSection,
  activeItem,
  showSessionActions = false,
}: AppNavbarProps) {
  const navigation = NAVIGATION_BY_ROLE[role] ?? NAVIGATION_BY_ROLE.funcionario;
  const roleDetails = ROLE_DETAILS[role];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/login">E-Estacionamento</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Alternar navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navigation.map((item) => (
                item.type === 'dropdown' ? (
                  <NavDropdown
                    key={item.key}
                    group={item}
                    activeSection={activeSection}
                    activeItem={activeItem}
                  />
                ) : (
                  <li className="nav-item" key={item.key}>
                    <Link
                      className={`nav-link${activeSection === item.key ? ' active' : ''}`}
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
            {showSessionActions && roleDetails && (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <span className="nav-link">
                    <Icon name={roleDetails.icon} className="me-1" />
                    {roleDetails.label}
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Sair</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
