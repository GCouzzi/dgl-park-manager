const baseURL = "http://localhost:3333";

// ============================================================
// UTILITÁRIOS
// ============================================================

/**
 * Exibe o JSON formatado no console com indentação de 2 espaços.
 * Caso não seja um JSON válido, exibe o texto puro.
 */
function prettyPrint(text) {
  try {
    const parsed = JSON.parse(text);
    console.log(JSON.stringify(parsed, null, 2));
  } catch {
    console.log(text);
  }
}

/**
 * Exibe um separador visual e o label da requisição antes do resultado.
 * @param {string} method - Método HTTP (GET, POST, PUT, DELETE)
 * @param {string} endpoint - Caminho da rota (ex: /modelos)
 * @param {string} [descricao] - Descrição opcional do que está sendo testado
 */
function logRequisicao(method, endpoint, descricao = "") {
  console.log("\n" + "─".repeat(60));
  console.log(`🔹 ${method.toUpperCase()} ${endpoint}${descricao ? `  →  ${descricao}` : ""}`);
  console.log("─".repeat(60));
}


// ============================================================
// MODELOS
// ============================================================

function getModelos() {
  logRequisicao("GET", "/modelos", "Listar todos os modelos");
  return fetch(`${baseURL}/modelos`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function createModelo() {
  logRequisicao("POST", "/modelos", "Criar modelo válido");
  return fetch(`${baseURL}/modelos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Corolla Altis",
      marca: "Toyota",
      ano: 2025
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function deleteModelo() {
  logRequisicao("DELETE", "/modelos/5", "Deletar modelo por ID");
  return fetch(`${baseURL}/modelos/5`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: nome/marca muito longos e ano inválido */
function createModelo2() {
  logRequisicao("POST", "/modelos", "❌ Criar modelo com dados inválidos (validação)");
  return fetch(`${baseURL}/modelos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Corolla Altissssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      marca: "Toyotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      ano: "1885"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// VEÍCULOS
// ============================================================

function getVeiculos() {
  logRequisicao("GET", "/veiculos", "Listar todos os veículos");
  return fetch(`${baseURL}/veiculos`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function getVeiculoById() {
  logRequisicao("GET", "/veiculos/4", "Buscar veículo por ID");
  return fetch(`${baseURL}/veiculos/4`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function createVeiculo() {
  logRequisicao("POST", "/veiculos", "Criar veículo válido");
  return fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      placa: "AZZ1B23",
      modeloId: 3,
      banido: false,
      cor: "PRETO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function updateVeiculo() {
  logRequisicao("PUT", "/veiculos/3", "Atualizar veículo por ID");
  return fetch(`${baseURL}/veiculos/3`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      placa: "AZZ1B22",
      modeloId: 3,
      banido: false,
      cor: "PRETO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function deleteVeiculo() {
  logRequisicao("DELETE", "/veiculos/1", "Deletar veículo por ID");
  return fetch(`${baseURL}/veiculos/1`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: placa muito longa e cor inválida */
function createVeiculo2() {
  logRequisicao("POST", "/veiculos", "❌ Criar veículo com dados inválidos (validação)");
  return fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      placa: "AZZ1B211",
      modeloId: 1,
      banido: false,
      cor: "PRETOO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// DESPESAS
// ============================================================

function getDespesas() {
  logRequisicao("GET", "/despesas", "Listar todas as despesas");
  return fetch(`${baseURL}/despesas`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function getDespesaById() {
  logRequisicao("GET", "/despesas/1", "Buscar despesa por ID");
  return fetch(`${baseURL}/despesas/1`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function createDespesa() {
  logRequisicao("POST", "/despesas", "Criar despesa válida");
  return fetch(`${baseURL}/despesas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      descricao: "Conta de luz",
      valor: 150,
      vencimento: "2026-04-15",
      status: "NAO_PAGO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function updateDespesa() {
  logRequisicao("PUT", "/despesas/1", "Atualizar despesa por ID");
  return fetch(`${baseURL}/despesas/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      descricao: "Conta de água",
      valor: 150,
      vencimento: "2026-04-15",
      status: "NAO_PAGO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function deleteDespesa() {
  logRequisicao("DELETE", "/despesas/2", "Deletar despesa por ID");
  return fetch(`${baseURL}/despesas/2`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: descrição longa, valor negativo e status inválido */
function createDespesa2() {
  logRequisicao("POST", "/despesas", "❌ Criar despesa com dados inválidos (validação)");
  return fetch(`${baseURL}/despesas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      descricao: "Conta de luzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
      valor: -150,
      vencimento: "2026-04-15",
      status: "NAO_PAGOo"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// CLIENTES
// ============================================================

function getClientes() {
  logRequisicao("GET", "/clientes", "Listar todos os clientes");
  return fetch(`${baseURL}/clientes`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function getClienteById() {
  logRequisicao("GET", "/clientes/5", "Buscar cliente por ID");
  return fetch(`${baseURL}/clientes/5`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function createCliente() {
  logRequisicao("POST", "/clientes", "Criar cliente válido");
  return fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "João da Silva",
      cpf: "12345678901",
      telefone: "27999999999",
      tipo: "AVULSO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function updateCliente() {
  logRequisicao("PUT", "/clientes/5", "Atualizar cliente por ID");
  return fetch(`${baseURL}/clientes/5`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "João Pedro Paganotti",
      cpf: "12345678901",
      telefone: "27999999999",
      tipo: "MENSALISTA"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function deleteCliente() {
  logRequisicao("DELETE", "/clientes/3", "Deletar cliente por ID");
  return fetch(`${baseURL}/clientes/3`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: nome longo, CPF com dígitos a mais, telefone inválido, tipo errado */
function createClienteErro() {
  logRequisicao("POST", "/clientes", "❌ Criar cliente com dados inválidos (validação)");
  return fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "João da Silvasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      cpf: "123456789011",
      telefone: "279999999994324239",
      tipo: "AVULSOoooo"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// VAGAS
// ============================================================

function getVagas() {
  logRequisicao("GET", "/vagas", "Listar todas as vagas");
  return fetch(`${baseURL}/vagas`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function getVagaById() {
  logRequisicao("GET", "/vagas/1", "Buscar vaga por ID");
  return fetch(`${baseURL}/vagas/1`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function createVaga() {
  logRequisicao("POST", "/vagas", "Criar vaga válida");
  return fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tipo: "CARRO",
      status: "LIVRE",
      possuiCobertura: true,
      preferencial: false
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function updateVaga() {
  logRequisicao("PUT", "/vagas/5", "Atualizar vaga por ID");
  return fetch(`${baseURL}/vagas/5`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tipo: "CARRO",
      status: "LIVRE",
      possuiCobertura: true,
      preferencial: true
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function deleteVaga() {
  logRequisicao("DELETE", "/vagas/5", "Deletar vaga por ID");
  return fetch(`${baseURL}/vagas/5`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: tipo e status com valores inválidos */
function createVagaErro() {
  logRequisicao("POST", "/vagas", "❌ Criar vaga com dados inválidos (validação)");
  return fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      tipo: "CARROo",
      status: "LIVREe",
      possuiCobertura: true,
      preferencial: false
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// TIPOS DE SERVIÇO
// ============================================================

export async function getTipoServico() {
  logRequisicao("GET", "/tipo-servico", "Listar todos os tipos de serviço");
  return fetch(`${baseURL}/tipo-servico`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function getTipoServicoById(id) {
  logRequisicao("GET", `/tipo-servico/${id}`, "Buscar tipo de serviço por ID");
  return fetch(`${baseURL}/tipo-servico/${id}`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function createTipoServico() {
  logRequisicao("POST", "/tipo-servico", "Criar tipo de serviço válido");
  return fetch(`${baseURL}/tipo-servico`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Serviço Muito TOP",
      descricao: "Lavagem interna e TOP do veículo",
      valor: 50,
      descontoAtivo: 10.5
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function updateTipoServico(id) {
  logRequisicao("PUT", `/tipo-servico/${id}`, "Atualizar tipo de serviço por ID");
  return fetch(`${baseURL}/tipo-servico/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Serviço Extremamente TOP",
      descricao: "TOP, muito TOP",
      valor: 200,
      descontoAtivo: 0
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function deleteTipoServico(id) {
  logRequisicao("DELETE", `/tipo-servico/${id}`, "Deletar tipo de serviço por ID");
  return fetch(`${baseURL}/tipo-servico/${id}`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: nome/descrição vazios, valor e desconto negativos */
function createTipoServicoErro() {
  logRequisicao("POST", "/tipo-servico", "❌ Criar tipo de serviço com dados inválidos (validação)");
  return fetch(`${baseURL}/tipo-servico`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "",
      descricao: "",
      valor: -1,
      descontoAtivo: -1
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// USUÁRIOS
// ============================================================

export async function getUsuarios() {
  logRequisicao("GET", "/usuarios", "Listar todos os usuários");
  return fetch(`${baseURL}/usuarios`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function getUsuarioById(id) {
  logRequisicao("GET", `/usuarios/${id}`, "Buscar usuário por ID");
  return fetch(`${baseURL}/usuarios/${id}`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function createUsuario() {
  logRequisicao("POST", "/usuarios", "Criar usuário válido");
  return fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "ADM Legal",
      senha: "123456",
      cpf: "18053068049",
      telefone: "27999349499",
      endereco: "Rua A, 123",
      tipoUsuario: "ADMINISTRADOR"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function updateUsuario(id) {
  logRequisicao("PUT", `/usuarios/${id}`, "Atualizar usuário por ID");
  return fetch(`${baseURL}/usuarios/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "Carinha que mora logo ali",
      senha: "123456",
      cpf: "18053068049",
      telefone: "27999349499",
      endereco: "Rua A, 123",
      tipoUsuario: "FUNCIONARIO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function deleteUsuario(id) {
  logRequisicao("DELETE", `/usuarios/${id}`, "Deletar usuário por ID");
  return fetch(`${baseURL}/usuarios/${id}`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/** Testa validação: nome/senha vazios, CPF curto, tipo inválido */
function createUsuarioErro() {
  logRequisicao("POST", "/usuarios", "❌ Criar usuário com dados inválidos (validação)");
  return fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "",
      senha: "",
      cpf: "123",
      telefone: "",
      endereco: "",
      tipoUsuario: "INVALIDO"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// SAÍDAS
// ============================================================

function getSaidas() {
  logRequisicao("GET", "/saidas", "Listar todas as saídas");
  return fetch(`${baseURL}/saidas`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function getSaidaById(id) {
  logRequisicao("GET", `/saidas/${id}`, "Buscar saída por ID");
  return fetch(`${baseURL}/saidas/${id}`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/**
 * Cria uma saída completa do zero:
 * 1. Cria uma vaga
 * 2. Cria um veículo
 * 3. Cria uma entrada vinculando cliente, vaga e veículo
 * 4. Cria a saída referenciando a entrada
 */
async function createSaida() {
  logRequisicao("POST", "/saidas", "Criar saída válida (com vaga, veículo e entrada)");

  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
  }).then(res => res.json());

  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "TST1A23", modeloId: 1, banido: false, cor: "AZUL" })
  }).then(res => res.json());

  const entradaRes = await fetch(`${baseURL}/entradas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId: 1, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
  }).then(res => res.json());

  return fetch(`${baseURL}/saidas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      entradaId: entradaRes.id,
      desconto: 0,
      tipoPagamento: "PIX",
      statusPagamento: "PAGO",
      observacoes: "Saída normal"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function updateSaida(id) {
  logRequisicao("PUT", `/saidas/${id}`, "Atualizar saída por ID");
  return fetch(`${baseURL}/saidas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      desconto: 0.05,
      tipoPagamento: "CREDITO",
      statusPagamento: "PAGO",
      observacoes: "Saída atualizada"
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

function deleteSaida(id) {
  logRequisicao("DELETE", `/saidas/${id}`, "Deletar saída por ID");
  return fetch(`${baseURL}/saidas/${id}`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

/**
 * Testa validação na criação de saída:
 * desconto negativo, tipoPagamento inválido, statusPagamento inválido, observações vazias
 */
async function createSaidaErro() {
  logRequisicao("POST", "/saidas", "❌ Criar saída com dados inválidos (validação)");

  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
  }).then(res => res.json());

  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "TST2B44", modeloId: 1, banido: false, cor: "VERDE" })
  }).then(res => res.json());

  const entradaRes = await fetch(`${baseURL}/entradas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId: 1, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
  }).then(res => res.json());

  return fetch(`${baseURL}/saidas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      entradaId: entradaRes.id,
      desconto: -10,
      tipoPagamento: "INVALIDO",
      statusPagamento: "INVALIDO",
      observacoes: ""
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}


// ============================================================
// REGRAS DE NEGÓCIO — SAÍDAS
// ============================================================

/**
 * Regra 1: A cada 10 saídas de um cliente, ele recebe 10% de desconto na próxima.
 *
 * Fluxo do teste:
 *  - Cria um cliente, uma vaga e um veículo dedicados
 *  - Gera 10 pares entrada/saída para o mesmo cliente
 *  - Na 10ª saída, o sistema deve aplicar automaticamente ~10% de desconto
 */
async function testeRegra10Saidas() {
  console.log("\n" + "═".repeat(60));
  console.log("📏 REGRA: A cada 10 saídas → 10% de desconto automático");
  console.log("═".repeat(60));

  console.log("\n  → Criando cliente para teste...");
  const clienteRes = await fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Cliente Teste 10 Saidas",
      cpf: "74682489070",
      telefone: "27999888777",
      tipo: "AVULSO"
    })
  }).then(res => res.json());
  const clienteId = clienteRes.id;
  console.log(`  ✔ Cliente criado com ID: ${clienteId}`);

  console.log("\n  → Criando vaga para teste...");
  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
  }).then(res => res.json());
  const vagaId = vagaRes.id;
  console.log(`  ✔ Vaga criada com ID: ${vagaId}`);

  console.log("\n  → Criando veículo para teste...");
  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "TST0A00", modeloId: 1, banido: false, cor: "BRANCO" })
  }).then(res => res.json());
  const veiculoId = veiculoRes.id;
  console.log(`  ✔ Veículo criado com ID: ${veiculoId}`);

  console.log("\n  → Criando 10 pares de entrada/saída...\n");

  for (let i = 1; i <= 11; i++) {
    const entradaRes = await fetch(`${baseURL}/entradas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clienteId, vagaId, veiculoId })
    }).then(res => res.json());

    const saidaRes = await fetch(`${baseURL}/saidas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entradaId: entradaRes.id,
        desconto: 0.02,
        tipoPagamento: "DINHEIRO",
        statusPagamento: "PAGO",
        observacoes: `Saída ${i} - teste regra 10 saídas`
      })
    }).then(res => res.text());

    if (i === 11) {
      console.log(`  ✅ 11ª saída — desconto esperado: ~12% (0.02 passado na saída + 0.10 da regra)`);
      prettyPrint(saidaRes);
    } else {
      console.log(`  [${i}/10] Entrada ${entradaRes.id} → saída criada`);
    }
  }
}

/**
 * Regra 2: Se o CPF do cliente for igual ao CPF de um usuário cadastrado,
 * o cliente recebe 100% de desconto automaticamente.
 *
 * Fluxo do teste:
 *  - Cria um usuário com um CPF específico
 *  - Cria um cliente com o MESMO CPF
 *  - Cria entrada e saída para esse cliente
 *  - A saída deve retornar desconto = 100%
 */
async function testeRegraCpfIgualUsuario() {
  console.log("\n" + "═".repeat(60));
  console.log("🆔 REGRA: CPF do cliente = CPF de usuário → 100% de desconto");
  console.log("═".repeat(60));

  const cpfCompartilhado = "18053068049";

  console.log("\n  → Criando usuário com o CPF compartilhado...");
  const usuarioRes = await fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "Funcionário Teste CPF",
      senha: "123456",
      cpf: cpfCompartilhado,
      telefone: "27999111222",
      endereco: "Rua Teste, 100",
      tipoUsuario: "FUNCIONARIO"
    })
  }).then(res => res.json());
  console.log(`  ✔ Usuário criado com ID: ${usuarioRes.id}`);

  console.log("\n  → Criando cliente com o MESMO CPF do usuário...");
  const clienteRes = await fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Cliente Funcionário",
      cpf: cpfCompartilhado,
      telefone: "27999111222",
      tipo: "MENSALISTA"
    })
  }).then(res => res.json());
  const clienteId = clienteRes.id;
  console.log(`  ✔ Cliente criado com ID: ${clienteId}`);

  console.log("\n  → Criando vaga...");
  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
  }).then(res => res.json());
  console.log(`  ✔ Vaga criada com ID: ${vagaRes.id}`);

  console.log("\n  → Criando veículo...");
  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "CPF0X99", modeloId: 1, banido: false, cor: "VERMELHO" })
  }).then(res => res.json());
  console.log(`  ✔ Veículo criado com ID: ${veiculoRes.id}`);

  console.log("\n  → Criando entrada para o cliente...");
  const entradaRes = await fetch(`${baseURL}/entradas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
  }).then(res => res.json());
  console.log(`  ✔ Entrada criada com ID: ${entradaRes.id}`);

  console.log("\n  → Criando saída (desconto esperado: 100%)...");
  const saidaRes = await fetch(`${baseURL}/saidas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      entradaId: entradaRes.id,
      desconto: 0,
      tipoPagamento: "PIX",
      statusPagamento: "PAGO",
      observacoes: "Teste regra CPF igual ao de um usuário"
    })
  }).then(res => res.text());

  console.log("\n  ✅ Saída criada — desconto esperado: 100%");
  prettyPrint(saidaRes);
}


// ============================================================
// SERVIÇOS
// ============================================================

export async function getServicos() {
  logRequisicao("GET", "/servicos", "Listar todos os serviços");
  return fetch(`${baseURL}/servicos`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function getServicoById(id) {
  logRequisicao("GET", `/servicos/${id}`, "Buscar serviço por ID");
  return fetch(`${baseURL}/servicos/${id}`)
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function createServico() {
  logRequisicao("POST", "/servicos", "Criar serviço válido");

  // Criando o cliente que irá dar entrada no estacionamento.
  const clienteRes = await fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Cliente do servico",
      cpf: "73496467045",
      telefone: "1140028922",
      tipo: "MENSALISTA"
    })
  }).then(res => res.json());

  // Criando um veículo para dar entrada no estacionamento.
  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "BOB0800", modeloId: 1, banido: false, cor: "VERMELHO" })
  }).then(res => res.json());

  // Criando vaga para que o veículo seja associado à ela
  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
  }).then(res => res.json());

  // Registrando a entrada do cliente com o veículo no estacionamento
  const entradaRes = await fetch(`${baseURL}/entradas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId: clienteRes.id, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
  }).then(res => res.json());

  // Criando o usuario que irá prestar o serviço
  const usuarioRes = await fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "Funcionário do servico",
      senha: "40028922",
      cpf: "05553302064",
      telefone: "08001234",
      endereco: "Rua Bonita, 1000",
      tipoUsuario: "FUNCIONARIO"
    })
  }).then(res => res.json());

  // Registrando a prestação de serviço
  return fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: usuarioRes.id,
      tipoDeServicoId: 1,
      desconto: 0.5,
      placa: veiculoRes.placa,
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function updateServico(id) {
  logRequisicao("PUT", `/servicos/${id}`, "Atualizar serviço por ID");

  // Gerando novo veículo, cliente, entrada e usuário para
  // alterar o registro de serviço.

  // Criando outro cliente que irá dar entrada no estacionamento.
  const clienteRes = await fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Outro Cliente do servico",
      cpf: "71917142048",
      telefone: "1140028922",
      tipo: "MENSALISTA"
    })
  }).then(res => res.json());

  // Criando outro veículo para dar entrada no estacionamento.
  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "BOB4002", modeloId: 1, banido: false, cor: "AZUL" })
  }).then(res => res.json());

  // Criando outra vaga para que o veículo seja associado à ela
  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: true, preferencial: false })
  }).then(res => res.json());

  // Registrando a entrada do cliente com o veículo no estacionamento
  const entradaRes = await fetch(`${baseURL}/entradas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId: clienteRes.id, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
  }).then(res => res.json());

  // Criando outro usuario que irá prestar o serviço
  const usuarioRes = await fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "Outro Funcionário do servico",
      senha: "uwuyudiplay2",
      cpf: "89994596080",
      telefone: "40028922",
      endereco: "Rua Bonita, 9999",
      tipoUsuario: "FUNCIONARIO"
    })
  }).then(res => res.json());

  // Atualizando tipo de serviço, prestador do serviço, desconto e entrada
  // (identificada pela placa no backend).
  return fetch(`${baseURL}/servicos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: usuarioRes.id,
      tipoDeServicoId: 2,
      desconto: 0.1,
      placa: veiculoRes.placa,
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

export async function deleteServico(id) {
  logRequisicao("DELETE", `/servicos/${id}`, "Deletar serviço por ID");
  return fetch(`${baseURL}/servicos/${id}`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

async function createServicoErro() {
  logRequisicao("POST", "/servicos", "Induzir erros de validação (sem chave estrangeira)");
  await fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: 2,
      tipoDeServicoId: 1,
      desconto: -1,
      placa: "BOB4002",
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);

  logRequisicao("POST", "/servicos", "Induzir erros de validação (FK Usuário)");
  await fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: 99999,
      tipoDeServicoId: 1,
      desconto: 0.5,
      placa: "BOB4002",
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);

  logRequisicao("POST", "/servicos", "Induzir erros de validação (FK Tipo de Serviço)");
  await fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: 2,
      tipoDeServicoId: 99999,
      desconto: 0.5,
      placa: "BOB4002",
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);

  logRequisicao("POST", "/servicos", "Induzir erros de validação (FK Entrada)");
  await fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: 2,
      tipoDeServicoId: 1,
      desconto: 0.5,
      placa: "NAOEXISTE123",
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

// ============================================================
// REGRAS DE NEGÓCIO — SERVIÇOS
// ============================================================

async function regraSomenteUmaPrestacaoDoMesmoTipoDeServicoPorEntrada(){
  // Um tipo de serviço só pode ser prestado apenas uma vez por estadia.
  logRequisicao("REGRA DE NEGÓCIO 1", "/servicos", "Um tipo de serviço só pode ser prestado ao mesmo veículo apenas uma vez por estadia.");


  // ---------------------------------------------------------------------------
  // Realizando o setup de entrada de um veículo dentro do estacionamento.
  // ---------------------------------------------------------------------------

  // Criando o cliente que irá dar entrada no estacionamento.
  const clienteRes = await fetch(`${baseURL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Cliente Here We Go Again",
      cpf: "61180341090",
      telefone: "2840028922",
      tipo: "MENSALISTA"
    })
  }).then(res => res.json());

  // Criando um veículo para dar entrada no estacionamento.
  const veiculoRes = await fetch(`${baseURL}/veiculos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ placa: "API3K21", modeloId: 1, banido: false, cor: "VERMELHO" })
  }).then(res => res.json());

  // Criando vaga para que o veículo seja associado à ela
  const vagaRes = await fetch(`${baseURL}/vagas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
  }).then(res => res.json());

  // Registrando a entrada do cliente com o veículo no estacionamento
  const entradaRes = await fetch(`${baseURL}/entradas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId: clienteRes.id, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
  }).then(res => res.json());

  // Criando o usuario que irá prestar o serviço
  const usuarioRes = await fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "Funcionário Repetidor",
      senha: "herewegoagain123",
      cpf: "87706610063",
      telefone: "11123456789",
      endereco: "Rua Repetida, 999",
      tipoUsuario: "FUNCIONARIO"
    })
  }).then(res => res.json());

  // ---------------------------------------------------------------------------
  // Colocando o funcionário para registrar um mesmo tipo de serviço duas vezes
  // para o mesmo veículo durante a mesma estadia.
  // ---------------------------------------------------------------------------

  // Registrando a primeira prestação de serviço
  logRequisicao("REGRA DE NEGÓCIO 1", "/servicos", "Registrando a primeira prestação de serviço.");
  await fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: usuarioRes.id,
      tipoDeServicoId: 1,
      desconto: 0.5,
      placa: veiculoRes.placa,
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);

  // Registrando a segunda prestação de serviço
  logRequisicao("REGRA DE NEGÓCIO 1", "/servicos", "Registrando a segunda prestação de serviço, com o mesmo tipo de serviço, para o mesmo veículo, durante a mesma estadia");
  await fetch(`${baseURL}/servicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prestadorId: usuarioRes.id,
      tipoDeServicoId: 1,
      desconto: 0.5,
      placa: veiculoRes.placa,
    })
  })
    .then(res => res.text())
    .then(prettyPrint)
    .catch(console.error);
}

async function regraUsuarioJaPrestou10ServicosHoje(){
  // Um usuário só pode prestar no máximo 10 serviços por dia.
  logRequisicao("REGRA DE NEGÓCIO 2", "/servicos", "Um usuário só pode prestar no máximo 10 serviços por dia.");

  // Criando o usuario que irá prestar os serviços
  const usuarioRes = await fetch(`${baseURL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nomeUsuario: "Funcionário Cansado",
      senha: "soninhopegado123",
      cpf: "37375483078",
      telefone: "11123456789",
      endereco: "Rua Cansada, 999",
      tipoUsuario: "FUNCIONARIO"
    })
  }).then(res => res.json());

  const cpfs = [
    "55277602046",
    "38997299000",
    "14154632043",
    "30654829080",
    "09905545034",
    "11236644042",
    "68368823056",
    "08905607063",
    "29516785093",
    "70607192020",
    "94775492071"
  ];

  const placas = [
    "DEV4A04",
    "BUG0B01",
    "LOL2C25",
    "OPS1D34",
    "RAM9E99",
    "CPU1F00",
    "GAS0G00",
    "ZZZ0H00",
    "NOP0I01",
    "DBX7L42",
    "NAD4J04"
  ];

  // Colocar o usuário para prestar 11 serviços, um atrás do outro.
  for(let i = 0; i < 11; i++){
    // Criando o cliente que irá dar entrada no estacionamento.
    const clienteRes = await fetch(`${baseURL}/clientes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: "Cliente gastador",
        cpf: cpfs[i],
        telefone: "2840028922",
        tipo: "MENSALISTA"
      })
    }).then(res => res.json());

    // Criando um veículo para dar entrada no estacionamento.
    const veiculoRes = await fetch(`${baseURL}/veiculos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ placa: placas[i], modeloId: 1, banido: false, cor: "VERMELHO" })
    }).then(res => res.json());

    // Criando vaga para que o veículo seja associado à ela
    const vagaRes = await fetch(`${baseURL}/vagas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo: "CARRO", status: "LIVRE", possuiCobertura: false, preferencial: false })
    }).then(res => res.json());

    // Registrando a entrada do cliente com o veículo no estacionamento
    const entradaRes = await fetch(`${baseURL}/entradas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clienteId: clienteRes.id, vagaId: vagaRes.id, veiculoId: veiculoRes.id })
    }).then(res => res.json());


    logRequisicao("REGRA DE NEGÓCIO 2", "/servicos", "Registrando o " + (i + 1) + "º serviço do usuário no mesmo dia");
    // Registrando a prestação de serviço
    await fetch(`${baseURL}/servicos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prestadorId: usuarioRes.id,
        tipoDeServicoId: 1,
        desconto: 0.5,
        placa: veiculoRes.placa,
      })
    })
      .then(res => res.text())
      .then(prettyPrint)
      .catch(console.error);
  }
}

// ============================================================
// RUNNER PRINCIPAL
// ============================================================

async function runAllTests() {
  console.log("🚀 INICIANDO TESTES COMPLETOS DA API\n");

  // ── Modelos ──────────────────────────────────────────────
  console.log("\n\n📦 ══════ MODELOS ══════");
  await createModelo();
  await getModelos();
  await createModelo2();
  await deleteModelo();

  // ── Veículos ─────────────────────────────────────────────
  console.log("\n\n🚗 ══════ VEÍCULOS ══════");
  await createVeiculo();
  await getVeiculos();
  await getVeiculoById();
  await updateVeiculo();
  await deleteVeiculo();
  await createVeiculo2();

  // ── Despesas ─────────────────────────────────────────────
  console.log("\n\n💰 ══════ DESPESAS ══════");
  await createDespesa();
  await getDespesas();
  await getDespesaById();
  await updateDespesa();
  await deleteDespesa();
  await createDespesa2();

  // ── Clientes ─────────────────────────────────────────────
  console.log("\n\n👤 ══════ CLIENTES ══════");
  await createCliente();
  await getClientes();
  await getClienteById();
  await updateCliente();
  await deleteCliente();
  await createClienteErro();

  // ── Vagas ────────────────────────────────────────────────
  console.log("\n\n🅿️  ══════ VAGAS ══════");
  await createVaga();
  await getVagas();
  await getVagaById();
  await updateVaga();
  await deleteVaga();
  await createVagaErro();

  // ── Tipos de Serviço ──────────────────────────────────────
  console.log("\n\n🛠️  ══════ TIPOS DE SERVIÇO ══════");
  await createTipoServico();
  await getTipoServico();
  await getTipoServicoById(5);
  await updateTipoServico(5);
  await deleteTipoServico(5);
  await createTipoServicoErro();

  // ── Usuários ─────────────────────────────────────────────
  console.log("\n\n👥 ══════ USUÁRIOS ══════");
  await createUsuario();
  await getUsuarios();
  await getUsuarioById(1);
  await updateUsuario(1);
  await deleteUsuario(5);
  await createUsuarioErro();

  // ── Saídas ───────────────────────────────────────────────
  console.log("\n\n🚪 ══════ SAÍDAS ══════");
  await createSaida();
  await getSaidas();
  await getSaidaById(1);
  await updateSaida(1);
  await deleteSaida(1);
  await createSaidaErro();

  // ── Regras de negócio ────────────────────────────────────
  console.log("\n\n📐 ══════ REGRAS DE NEGÓCIO — SAÍDAS ══════");
  await testeRegra10Saidas();
  await testeRegraCpfIgualUsuario();

  console.log("\n\n ══════ SERVIÇOS ══════");
  await createServico();
  await getServicos();
  await getServicoById(5);
  await updateServico(5);
  await deleteServico(5);
  await createServicoErro();

  console.log("\n\n ══════ REGRAS DE NEGÓCIO — SERVIÇOS ══════");
  await regraSomenteUmaPrestacaoDoMesmoTipoDeServicoPorEntrada();
  await regraUsuarioJaPrestou10ServicosHoje();

  console.log("\n\n✅ TODOS OS TESTES FINALIZADOS!");
}

runAllTests();