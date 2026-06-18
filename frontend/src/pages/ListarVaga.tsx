import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarVaga() {
  return <ResourceListPage config={resourceConfigs['vaga']} title="Listar Vagas" />;
}
