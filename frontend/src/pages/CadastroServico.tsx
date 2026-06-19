import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroServico() {
  return <ResourceCreatePage config={resourceConfigs['servico']} title="Registrar Serviço" />;
}
