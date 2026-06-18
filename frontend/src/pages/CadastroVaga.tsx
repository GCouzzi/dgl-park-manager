import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroVaga() {
  return <ResourceCreatePage config={resourceConfigs['vaga']} title="Inserir Vaga" />;
}
