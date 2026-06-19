import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarSaida() {
  return <ResourceEditPage config={resourceConfigs['saida']} title="Alterar Saída" />;
}
