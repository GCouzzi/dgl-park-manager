import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarDespesa() {
  return <ResourceListPage config={resourceConfigs['despesa']} title="Listar Despesas" />;
}
