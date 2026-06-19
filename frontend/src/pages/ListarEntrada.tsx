import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarEntrada() {
  return <ResourceListPage config={resourceConfigs['entrada']} title="Listar Entradas" />;
}
