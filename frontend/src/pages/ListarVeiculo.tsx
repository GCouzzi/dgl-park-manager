import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarVeiculo() {
  return <ResourceListPage config={resourceConfigs['veiculo']} title="Listar Veículos" />;
}
