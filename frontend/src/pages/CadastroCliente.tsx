import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroCliente() {
  return <ResourceCreatePage config={resourceConfigs['cliente']} title="Inserir Cliente" />;
}
