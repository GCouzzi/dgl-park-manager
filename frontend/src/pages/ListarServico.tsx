import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarServico() {
  return <ResourceListPage config={resourceConfigs['servico']} title="Listar Serviços" />;
}
