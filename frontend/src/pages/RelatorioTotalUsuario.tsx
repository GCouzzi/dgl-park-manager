import ReportPage from '../components/reports/ReportPage';
import { relatorioTotalUsuarioConfig } from '../config/reportConfigs';

export default function RelatorioTotalUsuario() {
  return <ReportPage config={relatorioTotalUsuarioConfig} />;
}
