export interface EntityRecord {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface Modelo extends EntityRecord {
  nome: string;
  ano: number;
  marca: string;
}

export interface Veiculo extends EntityRecord {
  placa: string;
  modeloId: number;
  modelo?: Modelo;
  banido: boolean;
  motivo?: string | null;
  cor: string;
}

export interface Cliente extends EntityRecord {
  nome: string;
  cpf: string;
  telefone: string;
  tipo: 'AVULSO' | 'MENSALISTA' | 'CONVENIADO';
}

export interface Vaga extends EntityRecord {
  tipo: 'CARRO' | 'MOTO';
  status: 'LIVRE' | 'OCUPADA' | 'MANUTENCAO';
  possuiCobertura: boolean;
  preferencial: boolean;
}

export interface Usuario extends EntityRecord {
  nomeUsuario: string;
  senha?: string;
  cpf: string;
  telefone: string;
  endereco: string;
  tipoUsuario: 'FUNCIONARIO' | 'ADMINISTRADOR';
}

export interface Despesa extends EntityRecord {
  descricao: string;
  valor: number;
  vencimento: string;
  status: 'PAGO' | 'NAO_PAGO';
  usuarioId?: number;
  usuario?: Usuario;
}

export interface Entrada extends EntityRecord {
  horario: string;
  clienteId: number;
  vagaId: number;
  veiculoId: number;
  usuarioId?: number;
  cliente?: Cliente;
  vaga?: Vaga;
  veiculo?: Veiculo;
  usuario?: Usuario;
}

export interface Saida extends EntityRecord {
  entradaId: number;
  usuarioId?: number;
  desconto: number;
  dataSaida: string;
  tipoPagamento: 'PIX' | 'DEBITO' | 'CREDITO' | 'DINHEIRO';
  statusPagamento: 'PAGO' | 'NAO_PAGO';
  observacoes?: string | null;
  entrada?: Entrada;
  usuario?: Usuario;
}

export interface TipoServico extends EntityRecord {
  nome: string;
  descricao: string;
  valor: number;
  descontoAtivo?: number | null;
}

export interface Servico extends EntityRecord {
  usuarioId: number;
  tipoServicoId: number;
  entradaId: number;
  desconto?: number | null;
  dataServico: string;
  usuario?: Usuario;
  tipoServico?: TipoServico;
  entrada?: Entrada;
}

export interface RelatorioCarrosBanidosResponse {
  carrosBanidos: Veiculo[];
  totalCarrosBanidos: number;
}

export interface RelatorioFinanceiroItem {
  tipo: string;
  item: string;
  valor?: number;
  total?: number;
  data: string;
}

export interface RelatorioFinanceiroResponse {
  itens: RelatorioFinanceiroItem[];
  totais: {
    totalReceitas: number;
    totalDespesas: number;
  };
}
