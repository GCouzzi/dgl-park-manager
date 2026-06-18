import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarTipoServico() {
  return <ResourceEditPage config={resourceConfigs['tipo-servico']} title="Alterar Tipo de Serviço" />;
}
