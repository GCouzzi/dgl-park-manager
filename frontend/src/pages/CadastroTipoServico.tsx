import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroTipoServico() {
  return <ResourceCreatePage config={resourceConfigs['tipo-servico']} title="Inserir Tipo de Serviço" />;
}
