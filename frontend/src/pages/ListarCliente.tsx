import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarCliente() {
  return <ResourceListPage config={resourceConfigs['cliente']} title="Listar Clientes" />;
}
