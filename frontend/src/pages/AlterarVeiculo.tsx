import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarVeiculo() {
  return <ResourceEditPage config={resourceConfigs['veiculo']} title="Alterar Veículo" />;
}
