import ResourceCreatePage from '../components/crud/ResourceCreatePage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function CadastroDespesa() {
  return <ResourceCreatePage config={resourceConfigs['despesa']} title="Inserir Despesa" />;
}
