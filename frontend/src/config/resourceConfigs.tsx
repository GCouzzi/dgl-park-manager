import type { ReactNode } from 'react';
import type { Role, ResourceKey } from './navigation';
import type {
  Cliente,
  Despesa,
  Entrada,
  EntityRecord,
  Modelo,
  Saida,
  Servico,
  TipoServico,
  Usuario,
  Vaga,
  Veiculo,
} from '../api/types';
import {
  formatBoolean,
  formatCpf,
  formatCurrency,
  formatDate,
  formatDateTime,
  formatPercent,
  formatTelefone,
  getNestedValue,
  humanizeEnum,
  onlyDigits,
  toDateInputValue,
} from '../utils/format';

export type FieldType = 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'textarea' | 'password';

export interface StaticOption {
  value: string | number | boolean;
  label: string;
}

export interface OptionSource {
  key: string;
  endpoint: string;
  getValue: (item: EntityRecord) => string | number;
  getLabel: (item: EntityRecord) => string;
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
  options?: StaticOption[];
  optionSource?: OptionSource;
  helperText?: string;
  readOnlyOnEdit?: boolean;
  uppercase?: boolean;
}

export interface FilterConfig {
  name: string;
  label: string;
  type: 'text' | 'select';
  path?: string;
  options?: StaticOption[];
}

export interface ColumnConfig<T extends EntityRecord = EntityRecord> {
  header: string;
  path?: string;
  className?: string;
  render?: (item: T) => ReactNode;
}

export interface ResourceConfig<T extends EntityRecord = EntityRecord> {
  key: ResourceKey;
  endpoint: string;
  singular: string;
  plural: string;
  role: Role;
  activeSection: string;
  activeItem: string;
  editPath?: string;
  canCreate?: boolean;
  canUpdate?: boolean;
  canDelete?: boolean;
  fields: FieldConfig[];
  filters: FilterConfig[];
  columns: ColumnConfig<T>[];
  getSearchText?: (item: T) => string;
  toPayload?: (values: FormValues, mode: 'create' | 'edit') => Record<string, unknown>;
  fromEntity?: (entity: T) => FormValues;
  renderSuccess?: (entity: T) => ReactNode;
}

export type FormValues = Record<string, string | number | boolean>;

const tipoClienteOptions = [
  { value: 'AVULSO', label: 'Avulso' },
  { value: 'MENSALISTA', label: 'Mensalista' },
  { value: 'CONVENIADO', label: 'Conveniado' },
];

const tipoUsuarioOptions = [
  { value: 'FUNCIONARIO', label: 'Funcionário' },
  { value: 'ADMINISTRADOR', label: 'Administrador' },
];

const tipoVagaOptions = [
  { value: 'CARRO', label: 'Carro' },
  { value: 'MOTO', label: 'Moto' },
];

const statusVagaOptions = [
  { value: 'LIVRE', label: 'Livre' },
  { value: 'OCUPADA', label: 'Ocupada' },
  { value: 'MANUTENCAO', label: 'Manutenção' },
];

const statusPagamentoOptions = [
  { value: 'PAGO', label: 'Pago' },
  { value: 'NAO_PAGO', label: 'Não pago' },
];

const tipoPagamentoOptions = [
  { value: 'PIX', label: 'PIX' },
  { value: 'DEBITO', label: 'Débito' },
  { value: 'CREDITO', label: 'Crédito' },
  { value: 'DINHEIRO', label: 'Dinheiro' },
];

const corOptions = [
  'BRANCO',
  'PRETO',
  'PRATA',
  'CINZA',
  'VERMELHO',
  'AZUL',
  'LARANJA',
  'AMARELO',
  'VERDE',
  'ROXO',
  'ROSA',
  'MARROM',
  'BEGE',
  'BRONZE',
].map((value) => ({ value, label: humanizeEnum(value) }));

const booleanOptions = [
  { value: true, label: 'Sim' },
  { value: false, label: 'Não' },
];

const modeloSource: OptionSource = {
  key: 'modelos',
  endpoint: '/modelos',
  getValue: (item) => item.id,
  getLabel: (item) => `${String(item.marca ?? '')} ${String(item.nome ?? '')} ${String(item.ano ?? '')}`.trim(),
};

const clienteSource: OptionSource = {
  key: 'clientes',
  endpoint: '/clientes',
  getValue: (item) => item.id,
  getLabel: (item) => `${String(item.nome ?? 'Cliente')} — ${formatCpf(item.cpf)}`,
};

const vagaSource: OptionSource = {
  key: 'vagas',
  endpoint: '/vagas',
  getValue: (item) => item.id,
  getLabel: (item) => `#${item.id} — ${humanizeEnum(item.tipo)} — ${humanizeEnum(item.status)}`,
};

const vagaLivreSource: OptionSource = {
  key: 'vagasLivres',
  endpoint: '/vagas/livres',
  getValue: (item) => item.id,
  getLabel: (item) => `#${item.id} — ${humanizeEnum(item.tipo)}${item.possuiCobertura ? ' — Com cobertura' : ''}${item.preferencial ? ' — Preferencial' : ''}`,
};

const veiculoSource: OptionSource = {
  key: 'veiculos',
  endpoint: '/veiculos',
  getValue: (item) => item.id,
  getLabel: (item) => `${String(item.placa ?? 'Veículo')} — ${String(getNestedValue(item, 'modelo.nome') ?? '')}`,
};

const entradaSource: OptionSource = {
  key: 'entradas',
  endpoint: '/entradas',
  getValue: (item) => item.id,
  getLabel: (item) => {
    const cliente = String(getNestedValue(item, 'cliente.nome') ?? 'Cliente não informado');
    const placa = String(getNestedValue(item, 'veiculo.placa') ?? 'Placa não informada');
    return `#${item.id} — ${cliente} — ${placa}`;
  },
};

const entradaSemSaidaSource: OptionSource = {
  key: 'entradasSemSaida',
  endpoint: '/entradas/sem-saida',
  getValue: (item) => item.id,
  getLabel: (item) => {
    const cliente = String(getNestedValue(item, 'cliente.nome') ?? 'Cliente não informado');
    const placa = String(getNestedValue(item, 'veiculo.placa') ?? 'Placa não informada');
    return `#${item.id} — ${cliente} — ${placa}`;
  },
};

const usuarioSource: OptionSource = {
  key: 'usuarios',
  endpoint: '/usuarios',
  getValue: (item) => item.id,
  getLabel: (item) => `${String(item.nomeUsuario ?? 'Usuário')} — ${humanizeEnum(item.tipoUsuario)}`,
};

const tipoServicoSource: OptionSource = {
  key: 'tiposServico',
  endpoint: '/tipo-servico',
  getValue: (item) => item.id,
  getLabel: (item) => `${String(item.nome ?? 'Serviço')} — ${formatCurrency(item.valor)}`,
};

function commonText(item: EntityRecord) {
  return JSON.stringify(item).toLowerCase();
}

function badge(text: string, className = 'bg-secondary') {
  return <span className={`badge ${className}`}>{text}</span>;
}

export const resourceConfigs = {
  cliente: {
    key: 'cliente',
    endpoint: '/clientes',
    singular: 'Cliente',
    plural: 'Clientes',
    role: 'funcionario',
    activeSection: 'cadastros',
    activeItem: '/cadastro-cliente',
    editPath: '/alterar-cliente',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true, maxLength: 50 },
      { name: 'cpf', label: 'CPF', type: 'text', required: true, maxLength: 14 },
      { name: 'telefone', label: 'Telefone', type: 'text', required: true, maxLength: 15 },
      { name: 'tipo', label: 'Tipo', type: 'select', required: true, options: tipoClienteOptions },
    ],
    filters: [
      { name: 'nome', label: 'Nome', type: 'text' },
      { name: 'cpf', label: 'CPF', type: 'text' },
      { name: 'tipo', label: 'Tipo', type: 'select', options: tipoClienteOptions },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Nome', path: 'nome' },
      { header: 'CPF', render: (item) => formatCpf(item.cpf) },
      { header: 'Telefone', render: (item) => formatTelefone(item.telefone) },
      { header: 'Tipo', className: 'text-center', render: (item) => badge(humanizeEnum(item.tipo), 'bg-primary') },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      nome: String(values.nome ?? '').trim(),
      cpf: onlyDigits(String(values.cpf ?? '')),
      telefone: onlyDigits(String(values.telefone ?? '')),
      tipo: String(values.tipo ?? ''),
    }),
  } satisfies ResourceConfig<Cliente>,

  despesa: {
    key: 'despesa',
    endpoint: '/despesas',
    singular: 'Despesa',
    plural: 'Despesas',
    role: 'administrador',
    activeSection: 'cadastros',
    activeItem: '/cadastro-despesa',
    editPath: '/alterar-despesa',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'descricao', label: 'Descrição', type: 'text', required: true, maxLength: 100 },
      { name: 'valor', label: 'Valor', type: 'number', required: true, min: 1, step: 0.01 },
      { name: 'vencimento', label: 'Vencimento', type: 'date', required: true },
      { name: 'status', label: 'Status', type: 'select', required: true, options: statusPagamentoOptions },
    ],
    filters: [
      { name: 'descricao', label: 'Descrição', type: 'text' },
      { name: 'status', label: 'Status', type: 'select', options: statusPagamentoOptions },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Descrição', path: 'descricao' },
      { header: 'Valor', render: (item) => formatCurrency(item.valor) },
      { header: 'Vencimento', render: (item) => formatDate(item.vencimento) },
      { header: 'Status', className: 'text-center', render: (item) => badge(humanizeEnum(item.status), item.status === 'PAGO' ? 'bg-success' : 'bg-warning text-dark') },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      descricao: String(values.descricao ?? '').trim(),
      valor: Number(values.valor),
      vencimento: String(values.vencimento ?? ''),
      status: String(values.status ?? ''),
    }),
    fromEntity: (entity) => ({
      descricao: entity.descricao,
      valor: entity.valor,
      vencimento: toDateInputValue(entity.vencimento),
      status: entity.status,
    }),
  } satisfies ResourceConfig<Despesa>,

  modelo: {
    key: 'modelo',
    endpoint: '/modelos',
    singular: 'Modelo',
    plural: 'Modelos',
    role: 'funcionario',
    activeSection: 'cadastros',
    activeItem: '/cadastro-modelo',
    canCreate: true,
    canUpdate: false,
    canDelete: true,
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true, maxLength: 50 },
      { name: 'ano', label: 'Ano', type: 'number', required: true, min: 1886, max: new Date().getFullYear() + 1, step: 1 },
      { name: 'marca', label: 'Marca', type: 'text', required: true, maxLength: 50 },
    ],
    filters: [
      { name: 'nome', label: 'Nome', type: 'text' },
      { name: 'marca', label: 'Marca', type: 'text' },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Marca', path: 'marca' },
      { header: 'Modelo', path: 'nome' },
      { header: 'Ano', path: 'ano' },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      nome: String(values.nome ?? '').trim(),
      ano: Number(values.ano),
      marca: String(values.marca ?? '').trim(),
    }),
  } satisfies ResourceConfig<Modelo>,

  veiculo: {
    key: 'veiculo',
    endpoint: '/veiculos',
    singular: 'Veículo',
    plural: 'Veículos',
    role: 'funcionario',
    activeSection: 'cadastros',
    activeItem: '/cadastro-veiculo',
    editPath: '/alterar-veiculo',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'placa', label: 'Placa', type: 'text', required: true, maxLength: 8, uppercase: true, helperText: 'Use placa antiga ou Mercosul. Ex.: ABC1234 ou ABC1D23.' },
      { name: 'modeloId', label: 'Modelo', type: 'select', required: true, optionSource: modeloSource },
      { name: 'cor', label: 'Cor', type: 'select', required: true, options: corOptions },
      { name: 'banido', label: 'Banido?', type: 'checkbox' },
      { name: 'motivo', label: 'Motivo do banimento', type: 'textarea', maxLength: 100 },
    ],
    filters: [
      { name: 'placa', label: 'Placa', type: 'text' },
      { name: 'modelo', label: 'Modelo', type: 'text', path: 'modelo.nome' },
      { name: 'cor', label: 'Cor', type: 'select', options: corOptions },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Placa', path: 'placa' },
      { header: 'Modelo', render: (item) => `${item.modelo?.marca ?? ''} ${item.modelo?.nome ?? ''} ${item.modelo?.ano ?? ''}`.trim() || '-' },
      { header: 'Cor', render: (item) => humanizeEnum(item.cor) },
      { header: 'Banido', className: 'text-center', render: (item) => badge(formatBoolean(item.banido), item.banido ? 'bg-danger' : 'bg-success') },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      placa: String(values.placa ?? '').trim().toUpperCase(),
      modeloId: Number(values.modeloId),
      cor: String(values.cor ?? ''),
      banido: Boolean(values.banido),
      motivo: values.banido ? String(values.motivo ?? '').trim() : null,
    }),
  } satisfies ResourceConfig<Veiculo>,

  vaga: {
    key: 'vaga',
    endpoint: '/vagas',
    singular: 'Vaga',
    plural: 'Vagas',
    role: 'funcionario',
    activeSection: 'cadastros',
    activeItem: '/cadastro-vaga',
    editPath: '/alterar-vaga',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'tipo', label: 'Tipo', type: 'select', required: true, options: tipoVagaOptions },
      { name: 'status', label: 'Status', type: 'select', required: true, options: statusVagaOptions },
      { name: 'possuiCobertura', label: 'Possui cobertura?', type: 'checkbox' },
      { name: 'preferencial', label: 'Preferencial?', type: 'checkbox' },
    ],
    filters: [
      { name: 'tipo', label: 'Tipo', type: 'select', options: tipoVagaOptions },
      { name: 'status', label: 'Status', type: 'select', options: statusVagaOptions },
      { name: 'possuiCobertura', label: 'Cobertura', type: 'select', options: booleanOptions },
      { name: 'preferencial', label: 'Preferencial', type: 'select', options: booleanOptions },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Tipo', render: (item) => humanizeEnum(item.tipo) },
      { header: 'Status', className: 'text-center', render: (item) => badge(humanizeEnum(item.status), item.status === 'LIVRE' ? 'bg-success' : item.status === 'OCUPADA' ? 'bg-danger' : 'bg-warning text-dark') },
      { header: 'Cobertura', className: 'text-center', render: (item) => formatBoolean(item.possuiCobertura) },
      { header: 'Preferencial', className: 'text-center', render: (item) => formatBoolean(item.preferencial) },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      tipo: String(values.tipo ?? ''),
      status: String(values.status ?? ''),
      possuiCobertura: Boolean(values.possuiCobertura),
      preferencial: Boolean(values.preferencial),
    }),
  } satisfies ResourceConfig<Vaga>,

  usuario: {
    key: 'usuario',
    endpoint: '/usuarios',
    singular: 'Usuário',
    plural: 'Usuários',
    role: 'administrador',
    activeSection: 'cadastros',
    activeItem: '/cadastro-usuario',
    editPath: '/alterar-usuario',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'nomeUsuario', label: 'Nome de usuário', type: 'text', required: true },
      { name: 'senha', label: 'Senha', type: 'password', required: true },
      { name: 'cpf', label: 'CPF', type: 'text', required: true, maxLength: 14 },
      { name: 'telefone', label: 'Telefone', type: 'text', required: true, maxLength: 15 },
      { name: 'endereco', label: 'Endereço', type: 'text', required: true },
      { name: 'tipoUsuario', label: 'Tipo de usuário', type: 'select', required: true, options: tipoUsuarioOptions },
    ],
    filters: [
      { name: 'nomeUsuario', label: 'Nome', type: 'text' },
      { name: 'cpf', label: 'CPF', type: 'text' },
      { name: 'tipoUsuario', label: 'Tipo', type: 'select', options: tipoUsuarioOptions },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Usuário', path: 'nomeUsuario' },
      { header: 'CPF', render: (item) => formatCpf(item.cpf) },
      { header: 'Telefone', render: (item) => formatTelefone(item.telefone) },
      { header: 'Tipo', className: 'text-center', render: (item) => badge(humanizeEnum(item.tipoUsuario), item.tipoUsuario === 'ADMINISTRADOR' ? 'bg-dark' : 'bg-primary') },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      nomeUsuario: String(values.nomeUsuario ?? '').trim(),
      senha: String(values.senha ?? ''),
      cpf: onlyDigits(String(values.cpf ?? '')),
      telefone: onlyDigits(String(values.telefone ?? '')),
      endereco: String(values.endereco ?? '').trim(),
      tipoUsuario: String(values.tipoUsuario ?? ''),
    }),
  } satisfies ResourceConfig<Usuario>,

  entrada: {
    key: 'entrada',
    endpoint: '/entradas',
    singular: 'Entrada',
    plural: 'Entradas',
    role: 'funcionario',
    activeSection: 'processos',
    activeItem: '/processo-entrada',
    editPath: '/alterar-entrada',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'clienteId', label: 'Cliente', type: 'select', required: true, optionSource: clienteSource },
      { name: 'vagaId', label: 'Vaga', type: 'select', required: true, optionSource: vagaLivreSource },
      { name: 'veiculoId', label: 'Veículo', type: 'select', required: true, optionSource: veiculoSource },
    ],
    filters: [
      { name: 'cliente', label: 'Cliente', type: 'text', path: 'cliente.nome' },
      { name: 'veiculo', label: 'Placa', type: 'text', path: 'veiculo.placa' },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Cliente', path: 'cliente.nome' },
      { header: 'Veículo', path: 'veiculo.placa' },
      { header: 'Vaga', render: (item) => item.vaga ? `#${item.vaga.id} — ${humanizeEnum(item.vaga.tipo)}` : String(item.vagaId) },
      { header: 'Horário', render: (item) => formatDateTime(item.horario) },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      clienteId: Number(values.clienteId),
      vagaId: Number(values.vagaId),
      veiculoId: Number(values.veiculoId),
    }),
  } satisfies ResourceConfig<Entrada>,

  saida: {
    key: 'saida',
    endpoint: '/saidas',
    singular: 'Saída',
    plural: 'Saídas',
    role: 'funcionario',
    activeSection: 'processos',
    activeItem: '/cadastro-saida',
    editPath: '/alterar-saida',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'entradaId', label: 'Entrada', type: 'select', required: true, optionSource: entradaSemSaidaSource, readOnlyOnEdit: true },
      { name: 'desconto', label: 'Desconto', type: 'number', min: 0, max: 1, step: 0.01, helperText: 'Use fração decimal. Ex.: 0.1 para 10%.' },
      { name: 'tipoPagamento', label: 'Tipo de pagamento', type: 'select', required: true, options: tipoPagamentoOptions },
      { name: 'statusPagamento', label: 'Status do pagamento', type: 'select', required: true, options: statusPagamentoOptions },
      { name: 'observacoes', label: 'Observações', type: 'textarea', maxLength: 100 },
    ],
    filters: [
      { name: 'entradaId', label: 'Entrada ID', type: 'text' },
      { name: 'tipoPagamento', label: 'Pagamento', type: 'select', options: tipoPagamentoOptions },
      { name: 'statusPagamento', label: 'Status', type: 'select', options: statusPagamentoOptions },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Entrada', path: 'entradaId' },
      { header: 'Data', render: (item) => formatDateTime(item.dataSaida) },
      { header: 'Desconto', render: (item) => formatPercent(item.desconto, true) },
      { header: 'Pagamento', render: (item) => humanizeEnum(item.tipoPagamento) },
      { header: 'Status', className: 'text-center', render: (item) => badge(humanizeEnum(item.statusPagamento), item.statusPagamento === 'PAGO' ? 'bg-success' : 'bg-warning text-dark') },
      { header: 'Total', className: 'text-end', render: (item) => item.valorTotal != null ? formatCurrency(item.valorTotal) : '-' },
      { header: 'Observações', className: 'text-break', render: (item) => String(item.observacoes ?? '').trim() || '-' },
    ],
    getSearchText: commonText,
    toPayload: (values, mode) => ({
      ...(mode === 'create' ? { entradaId: Number(values.entradaId) } : {}),
      desconto: Number(values.desconto || 0),
      tipoPagamento: String(values.tipoPagamento ?? ''),
      statusPagamento: String(values.statusPagamento ?? ''),
      observacoes: String(values.observacoes ?? '').trim(),
    }),
    renderSuccess: (entity) => {
      const s = entity as Saida & { valorTotal?: number };
      return (
        <div className="card mt-4 border-success">
          <div className="card-header bg-success text-white d-flex align-items-center gap-2">
            <i className="bi bi-receipt fs-5" />
            <strong>Comprovante de Saída</strong>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Entrada #</span>
                <strong>{s.entradaId}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Data de saída</span>
                <strong>{formatDateTime(s.dataSaida)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Desconto aplicado</span>
                <strong>{formatPercent(s.desconto, true)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Pagamento</span>
                <strong>{humanizeEnum(s.tipoPagamento)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="text-muted">Status</span>
                <strong>{humanizeEnum(s.statusPagamento)}</strong>
              </li>
              {s.observacoes && (
                <li className="list-group-item d-flex justify-content-between">
                  <span className="text-muted">Observações</span>
                  <span>{s.observacoes}</span>
                </li>
              )}
            </ul>
            <div className="mt-3 p-3 bg-success bg-opacity-10 rounded d-flex justify-content-between align-items-center">
              <span className="fs-5 fw-semibold">Total a cobrar</span>
              <span className="fs-4 fw-bold text-success">
                {s.valorTotal != null ? formatCurrency(s.valorTotal) : '-'}
              </span>
            </div>
          </div>
        </div>
      );
    },
  } satisfies ResourceConfig<Saida>,

  'tipo-servico': {
    key: 'tipo-servico',
    endpoint: '/tipo-servico',
    singular: 'Tipo de Serviço',
    plural: 'Tipos de Serviço',
    role: 'funcionario',
    activeSection: 'cadastros',
    activeItem: '/cadastro-tipo-servico',
    editPath: '/alterar-tipo-servico',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true, maxLength: 100 },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true, maxLength: 150 },
      { name: 'valor', label: 'Valor', type: 'number', required: true, min: 0, step: 0.01 },
      { name: 'descontoAtivo', label: 'Desconto ativo (%)', type: 'number', min: 0, max: 100, step: 0.01 },
    ],
    filters: [
      { name: 'nome', label: 'Nome', type: 'text' },
      { name: 'descricao', label: 'Descrição', type: 'text' },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Nome', path: 'nome' },
      { header: 'Descrição', path: 'descricao' },
      { header: 'Valor', render: (item) => formatCurrency(item.valor) },
      { header: 'Desconto', render: (item) => `${Number(item.descontoAtivo ?? 0)}%` },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      nome: String(values.nome ?? '').trim(),
      descricao: String(values.descricao ?? '').trim(),
      valor: Number(values.valor),
      descontoAtivo: Number(values.descontoAtivo || 0),
    }),
  } satisfies ResourceConfig<TipoServico>,

  servico: {
    key: 'servico',
    endpoint: '/servicos',
    singular: 'Serviço',
    plural: 'Serviços',
    role: 'funcionario',
    activeSection: 'processos',
    activeItem: '/cadastro-servico',
    editPath: '/alterar-servico',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    fields: [
      { name: 'prestadorId', label: 'Prestador', type: 'select', required: true, optionSource: usuarioSource },
      { name: 'tipoDeServicoId', label: 'Tipo de serviço', type: 'select', required: true, optionSource: tipoServicoSource },
      { name: 'placa', label: 'Placa do veículo', type: 'text', required: true, uppercase: true, helperText: 'A API vincula o serviço à última entrada ativa dessa placa.' },
      { name: 'desconto', label: 'Desconto (%)', type: 'number', min: 0, max: 100, step: 0.01 },
    ],
    filters: [
      { name: 'prestador', label: 'Prestador', type: 'text', path: 'usuario.nomeUsuario' },
      { name: 'tipoServico', label: 'Tipo', type: 'text', path: 'tipoServico.nome' },
      { name: 'placa', label: 'Placa', type: 'text', path: 'entrada.veiculo.placa' },
    ],
    columns: [
      { header: '#', path: 'id' },
      { header: 'Prestador', path: 'usuario.nomeUsuario' },
      { header: 'Tipo de Serviço', path: 'tipoServico.nome' },
      { header: 'Placa', path: 'entrada.veiculo.placa' },
      { header: 'Data', render: (item) => formatDateTime(item.dataServico) },
      { header: 'Desconto', render: (item) => `${Number(item.desconto ?? 0)}%` },
    ],
    getSearchText: commonText,
    toPayload: (values) => ({
      prestadorId: Number(values.prestadorId),
      tipoDeServicoId: Number(values.tipoDeServicoId),
      placa: String(values.placa ?? '').trim().toUpperCase(),
      desconto: Number(values.desconto || 0),
    }),
    fromEntity: (entity) => ({
      prestadorId: entity.usuarioId,
      tipoDeServicoId: entity.tipoServicoId,
      placa: String(entity.entrada?.veiculo?.placa ?? ''),
      desconto: Number(entity.desconto ?? 0),
    }),
  } satisfies ResourceConfig<Servico>,
} as const;

export type ResourceConfigKey = keyof typeof resourceConfigs;
