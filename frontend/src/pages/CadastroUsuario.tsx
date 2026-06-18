import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroUsuario() {
  return <ResourceCreatePage config={resourceConfigs['usuario']} title="Inserir Usuário" />;
}
