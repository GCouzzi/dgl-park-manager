export type ResourceKey =
  | 'cliente'
  | 'despesa'
  | 'entrada'
  | 'modelo'
  | 'saida'
  | 'servico'
  | 'tipo-servico'
  | 'usuario'
  | 'vaga'
  | 'veiculo';

export type CrudActionKey = 'insert' | 'list' | 'edit';

export type Role = 'funcionario' | 'administrador';

export interface RouteItem {
  label: string;
  to: string;
}

export interface NavigationLink extends RouteItem {
  type: 'link';
  key: string;
}

export interface NavigationDropdown {
  type: 'dropdown';
  key: string;
  label: string;
  items: RouteItem[];
}

export type NavigationItem = NavigationLink | NavigationDropdown;

export const RESOURCE_LABELS: Record<ResourceKey, string> = {
  cliente: 'Cliente',
  despesa: 'Despesa',
  entrada: 'Entrada',
  modelo: 'Modelo',
  saida: 'Saída',
  servico: 'Serviço',
  'tipo-servico': 'Tipo de Serviço',
  usuario: 'Usuário',
  vaga: 'Vaga',
  veiculo: 'Veículo',
};

export const RESOURCE_ROUTES: Record<ResourceKey, Partial<Record<CrudActionKey, string>>> = {
  cliente: {
    insert: '/cadastro-cliente',
    list: '/listar-cliente',
    edit: '/alterar-cliente',
  },
  despesa: {
    insert: '/cadastro-despesa',
    list: '/listar-despesa',
    edit: '/alterar-despesa',
  },
  entrada: {
    insert: '/processo-entrada',
    list: '/listar-entrada',
    edit: '/alterar-entrada',
  },
  modelo: {
    insert: '/cadastro-modelo',
    list: '/listar-modelo',
  },
  saida: {
    insert: '/cadastro-saida',
    list: '/listar-saida',
    edit: '/alterar-saida',
  },
  servico: {
    insert: '/cadastro-servico',
    list: '/listar-servico',
    edit: '/alterar-servico',
  },
  'tipo-servico': {
    insert: '/cadastro-tipo-servico',
    list: '/listar-tipo-servico',
    edit: '/alterar-tipo-servico',
  },
  usuario: {
    insert: '/cadastro-usuario',
    list: '/listar-usuario',
    edit: '/alterar-usuario',
  },
  vaga: {
    insert: '/cadastro-vaga',
    list: '/listar-vaga',
    edit: '/alterar-vaga',
  },
  veiculo: {
    insert: '/cadastro-veiculo',
    list: '/listar-veiculo',
    edit: '/alterar-veiculo',
  },
};

export const CRUD_ACTIONS: Array<{ key: CrudActionKey; label: string; icon: string }> = [
  { key: 'insert', label: 'Inserir', icon: 'bi-plus-circle-fill' },
  { key: 'list', label: 'Listar', icon: 'bi-list-ul' },
];

export const NAVIGATION_BY_ROLE: Record<Role, NavigationItem[]> = {
  funcionario: [
    { type: 'link', key: 'home', label: 'Home', to: '/homepage-funcionario' },
    {
      type: 'dropdown',
      key: 'cadastros',
      label: 'Cadastros',
      items: [
        { label: 'Modelo', to: '/cadastro-modelo' },
        { label: 'Veículo', to: '/cadastro-veiculo' },
        { label: 'Cliente', to: '/cadastro-cliente' },
        { label: 'Vaga', to: '/cadastro-vaga' },
        { label: 'Tipo de Serviço', to: '/cadastro-tipo-servico' },
      ],
    },
    {
      type: 'dropdown',
      key: 'processos',
      label: 'Processos',
      items: [
        { label: 'Entrada', to: '/processo-entrada' },
        { label: 'Saída', to: '/cadastro-saida' },
        { label: 'Serviço', to: '/cadastro-servico' },
      ],
    },
    {
      type: 'dropdown',
      key: 'relatorios',
      label: 'Relatórios',
      items: [
        { label: 'Média por Saída', to: '/relatorio-media-saida' },
        { label: 'Total por Usuário', to: '/relatorio-total-usuario' },
        { label: 'Entradas por Veículo', to: '/relatorio-entradas-veiculos' },
        { label: 'Entradas por Usuário', to: '/relatorio-entradas-usuarios' },
        { label: 'Carros Banidos', to: '/relatorio-carros-banidos' },
      ],
    },
  ],
  administrador: [
    { type: 'link', key: 'home', label: 'Home', to: '/homepage-administrador' },
    {
      type: 'dropdown',
      key: 'cadastros',
      label: 'Cadastros',
      items: [
        { label: 'Modelo', to: '/cadastro-modelo' },
        { label: 'Veículo', to: '/cadastro-veiculo' },
        { label: 'Cliente', to: '/cadastro-cliente' },
        { label: 'Vaga', to: '/cadastro-vaga' },
        { label: 'Tipo de Serviço', to: '/cadastro-tipo-servico' },
        { label: 'Usuário', to: '/cadastro-usuario' },
        { label: 'Despesa', to: '/cadastro-despesa' },
      ],
    },
    {
      type: 'dropdown',
      key: 'processos',
      label: 'Processos',
      items: [
        { label: 'Entrada', to: '/processo-entrada' },
        { label: 'Saída', to: '/cadastro-saida' },
        { label: 'Serviço', to: '/cadastro-servico' },
      ],
    },
    {
      type: 'dropdown',
      key: 'relatorios',
      label: 'Relatórios',
      items: [
        { label: 'Média por Saída', to: '/relatorio-media-saida' },
        { label: 'Total por Usuário', to: '/relatorio-total-usuario' },
        { label: 'Entradas por Veículo', to: '/relatorio-entradas-veiculos' },
        { label: 'Entradas por Usuário', to: '/relatorio-entradas-usuarios' },
        { label: 'Carros Banidos', to: '/relatorio-carros-banidos' },
        { label: 'Financeiro', to: '/relatorio-financeiro' },
      ],
    },
  ],
};

export const ROLE_DETAILS: Record<Role, { label: string; icon: string }> = {
  funcionario: {
    label: 'Funcionário',
    icon: 'bi-person-badge',
  },
  administrador: {
    label: 'Administrador',
    icon: 'bi-person-circle',
  },
};
