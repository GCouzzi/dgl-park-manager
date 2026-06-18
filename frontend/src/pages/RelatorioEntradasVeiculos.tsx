import ReportPage from '../components/reports/ReportPage';
import { relatorioEntradasVeiculosConfig } from '../config/reportConfigs';

export default function RelatorioEntradasVeiculos() {
  return <ReportPage config={relatorioEntradasVeiculosConfig} />;
}
