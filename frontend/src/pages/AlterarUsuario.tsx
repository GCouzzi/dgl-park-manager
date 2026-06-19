import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarUsuario() {
  return <ResourceEditPage config={resourceConfigs['usuario']} title="Alterar Usuário" />;
}
