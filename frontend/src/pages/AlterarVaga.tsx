import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarVaga() {
  return <ResourceEditPage config={resourceConfigs['vaga']} title="Alterar Vaga" />;
}
