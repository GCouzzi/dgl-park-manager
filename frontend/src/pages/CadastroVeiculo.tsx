import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroVeiculo() {
  return <ResourceCreatePage config={resourceConfigs['veiculo']} title="Inserir Veículo" />;
}
