import ReportPage from '../components/reports/ReportPage';
import { relatorioEntradasUsuariosConfig } from '../config/reportConfigs';

export default function RelatorioEntradasUsuarios() {
  return <ReportPage config={relatorioEntradasUsuariosConfig} />;
}
