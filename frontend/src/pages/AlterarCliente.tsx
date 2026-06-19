import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarCliente() {
  return <ResourceEditPage config={resourceConfigs['cliente']} title="Alterar Cliente" />;
}
