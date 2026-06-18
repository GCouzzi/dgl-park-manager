import ResourceEditPage from '../components/crud/ResourceEditPage';
import { resourceConfigs } from '../config/resourceConfigs';

export default function AlterarServico() {
  return <ResourceEditPage config={resourceConfigs['servico']} title="Alterar Serviço" />;
}
