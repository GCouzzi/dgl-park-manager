import ResourceListPage from '../components/crud/ResourceListPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ListarTipoServico() {
  return <ResourceListPage config={resourceConfigs['tipo-servico']} title="Listar Tipos de Serviço" />;
}
