import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarSaida() {
  return <ResourceListPage config={resourceConfigs['saida']} title="Listar Saídas" />;
}
