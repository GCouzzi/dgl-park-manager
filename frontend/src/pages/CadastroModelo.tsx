import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroModelo() {
  return <ResourceCreatePage config={resourceConfigs['modelo']} title="Inserir Modelo" />;
}
