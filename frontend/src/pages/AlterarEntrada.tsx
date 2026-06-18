import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarEntrada() {
  return <ResourceEditPage config={resourceConfigs['entrada']} title="Alterar Entrada" />;
}
