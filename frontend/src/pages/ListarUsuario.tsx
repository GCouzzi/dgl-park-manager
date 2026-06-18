import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarUsuario() {
  return <ResourceListPage config={resourceConfigs['usuario']} title="Listar Usuários" />;
}
