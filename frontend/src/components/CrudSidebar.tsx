import { Link } from 'react-router-dom';
import { CRUD_ACTIONS, RESOURCE_ROUTES, type CrudActionKey, type ResourceKey } from '../config/navigation';
import Icon from './Icon';

interface CrudSidebarProps {
  resource: ResourceKey;
  activeAction?: CrudActionKey;
}

export default function CrudSidebar({ resource, activeAction }: CrudSidebarProps) {
  const routes = RESOURCE_ROUTES[resource] ?? {};
  const actions = CRUD_ACTIONS.filter((action) => routes[action.key]);

  return (
    <aside className="crud-sidebar col-12 col-md-2 col-xl-3 col-xxl-2 border-end border-1 mb-5 mb-md-0">
      <nav className="d-flex flex-column gap-2 mt-5">
        {actions.map((action) => (
          <Link
            key={action.key}
            to={routes[action.key] as string}
            className={`btn btn-primary${activeAction === action.key ? ' active' : ''} text-start`}
          >
            <Icon name={action.icon} className="me-2" />
            {action.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
