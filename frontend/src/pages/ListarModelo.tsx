import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarModelo() {
  return <ResourceListPage config={resourceConfigs['modelo']} title="Listar Modelos" />;
}
