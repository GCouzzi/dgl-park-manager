import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function ProcessoEntrada() {
  return <ResourceCreatePage config={resourceConfigs['entrada']} title="Registrar Entrada" />;
}
