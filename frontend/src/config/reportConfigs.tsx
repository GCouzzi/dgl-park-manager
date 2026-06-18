import type { ReportConfig } from '../components/reports/ReportPage';
import type { RelatorioCarrosBanidosResponse, RelatorioFinanceiroResponse, Veiculo } from '../api/types';
import { formatCurrency, formatDate, formatDateTime, formatPercent, humanizeEnum } from '../utils/format';

type Row = Record<string, unknown>;

function asRows(response: unknown) {
  return Array.isArray(response) ? response as Row[] : [];
}

export const relatorioCarrosBanidosConfig: ReportConfig<Veiculo> = {
  title: 'Carros Banidos',
  pageTitle: 'Carros Banidos',
  endpoint: '/relatorios/carros-banidos',
  role: 'funcionario',
  activeItem: '/relatorio-carros-banidos',
  fields: [
    { name: 'modelo', label: 'Modelo exato', type: 'text' },
  ],
  columns: [
    { header: '#', path: 'id' },
    { header: 'Placa', path: 'placa' },
    { header: 'Modelo', render: (row) => `${row.modelo?.marca ?? ''} ${row.modelo?.nome ?? ''} ${row.modelo?.ano ?? ''}`.trim() || '-' },
    { header: 'Cor', render: (row) => humanizeEnum(row.cor) },
    { header: 'Motivo', path: 'motivo' },
  ],
  transformResponse: (response) => {
    const data = response as RelatorioCarrosBanidosResponse;
    return data?.carrosBanidos ?? [];
  },
  renderSummary: (response) => {
    const data = response as RelatorioCarrosBanidosResponse | null;
    if (!data) return null;
    return <div className="alert alert-info">Total de carros banidos: <strong>{data.totalCarrosBanidos}</strong></div>;
  },
};

export const relatorioFinanceiroConfig: ReportConfig<Row> = {
  title: 'Relatório Financeiro',
  pageTitle: 'Relatório Financeiro',
  endpoint: '/relatorios/financeiro',
  role: 'administrador',
  activeItem: '/relatorio-financeiro',
  fields: [
    { name: 'dataInicial', label: 'Data inicial', type: 'date' },
    { name: 'dataFinal', label: 'Data final', type: 'date' },
  ],
  columns: [
    { header: 'Tipo', path: 'tipo' },
    { header: 'Item', path: 'item' },
    { header: 'Valor', render: (row) => formatCurrency(row.valor ?? row.total) },
    { header: 'Data', render: (row) => formatDate(row.data) },
  ],
  transformResponse: (response) => {
    const data = response as RelatorioFinanceiroResponse;
    return (data?.itens ?? []) as unknown as Row[];
  },
  renderSummary: (response) => {
    const data = response as RelatorioFinanceiroResponse | null;
    if (!data?.totais) return null;
    const saldo = Number(data.totais.totalReceitas ?? 0) - Number(data.totais.totalDespesas ?? 0);
    return (
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4"><div className="alert alert-success mb-0">Receitas: <strong>{formatCurrency(data.totais.totalReceitas)}</strong></div></div>
        <div className="col-12 col-md-4"><div className="alert alert-danger mb-0">Despesas: <strong>{formatCurrency(data.totais.totalDespesas)}</strong></div></div>
        <div className="col-12 col-md-4"><div className="alert alert-info mb-0">Saldo: <strong>{formatCurrency(saldo)}</strong></div></div>
      </div>
    );
  },
};

export const relatorioEntradasVeiculosConfig: ReportConfig<Row> = {
  title: 'Total de Entradas por Tipo de Veículo',
  pageTitle: 'Entradas por Veículo',
  endpoint: '/relatorios/entradas-veiculos',
  role: 'funcionario',
  activeItem: '/relatorio-entradas-veiculos',
  intro: 'Informe o período para consultar a quantidade de entradas agrupada por tipo de vaga/veículo.',
  fields: [
    { name: 'dataInicial', label: 'Data inicial', type: 'date', required: true },
    { name: 'dataFinal', label: 'Data final', type: 'date', required: true },
    { name: 'tipoVeiculo', label: 'Tipo de veículo', type: 'select', options: [
      { value: 'CARRO', label: 'Carro' },
      { value: 'MOTO', label: 'Moto' },
    ] },
  ],
  columns: [
    { header: 'Tipo', render: (row) => humanizeEnum(row.tipo) },
    { header: 'Entradas', path: 'entradas' },
  ],
  transformResponse: asRows,
};

export const relatorioEntradasUsuariosConfig: ReportConfig<Row> = {
  title: 'Entradas Registradas por Usuário',
  pageTitle: 'Entradas por Usuário',
  endpoint: '/relatorios/usuarios-entradas',
  role: 'funcionario',
  activeItem: '/relatorio-entradas-usuarios',
  intro: 'Informe o período para consultar quantas entradas cada usuário registrou.',
  fields: [
    { name: 'dataInicial', label: 'Data inicial', type: 'date', required: true },
    { name: 'dataFinal', label: 'Data final', type: 'date', required: true },
  ],
  columns: [
    { header: 'Usuário', path: 'usuario' },
    { header: 'Entradas', path: 'entradas' },
  ],
  transformResponse: asRows,
};

export const relatorioTotalUsuarioConfig: ReportConfig<Row> = {
  title: 'Total Gasto por Cliente',
  pageTitle: 'Total Gasto por Cliente',
  endpoint: '/relatorios/usuarios-saidas',
  role: 'funcionario',
  activeItem: '/relatorio-total-usuario',
  fields: [
    { name: 'dataInicial', label: 'Data inicial', type: 'date' },
    { name: 'dataFinal', label: 'Data final', type: 'date' },
    { name: 'cliente', label: 'Cliente', type: 'text' },
  ],
  columns: [
    { header: 'Cliente', path: 'cliente' },
    { header: 'Total gasto', render: (row) => formatCurrency(row.totalGasto) },
    { header: 'Número de saídas', path: 'numeroDeSaidas' },
  ],
  transformResponse: asRows,
};

export const relatorioMediaSaidaConfig: ReportConfig<Row> = {
  title: 'Média Gasta por Saída de Cada Cliente',
  pageTitle: 'Média por Saída',
  endpoint: '/relatorios/clientes-media-saida',
  role: 'funcionario',
  activeItem: '/relatorio-media-saida',
  fields: [
    { name: 'dataInicial', label: 'Data inicial', type: 'date' },
    { name: 'dataFinal', label: 'Data final', type: 'date' },
    { name: 'cliente', label: 'Cliente', type: 'text' },
  ],
  columns: [
    { header: 'Cliente', path: 'cliente' },
    { header: 'Número de saídas', path: 'numeroDeSaidas' },
    { header: 'Média por saída', render: (row) => formatCurrency(row.mediaPorSaida) },
  ],
  transformResponse: asRows,
};
