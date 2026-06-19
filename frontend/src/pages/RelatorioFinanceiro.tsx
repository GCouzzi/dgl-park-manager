import ReportPage from '../components/reports/ReportPage';
import { relatorioFinanceiroConfig } from '../config/reportConfigs';

export default function RelatorioFinanceiro() {
  return <ReportPage config={relatorioFinanceiroConfig} />;
}
