import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarDespesa() {
  return <ResourceEditPage config={resourceConfigs['despesa']} title="Alterar Despesa" />;
}
