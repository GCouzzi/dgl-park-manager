import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroSaida() {
  return <ResourceCreatePage config={resourceConfigs['saida']} title="Registrar Saída" />;
}
