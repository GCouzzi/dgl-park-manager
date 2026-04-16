
const baseURL = "http://localhost:3333";

function getModelos() {
  return fetch(`${baseURL}/modelos`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createModelo() {
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
    .then(console.log)
    .catch(console.error);
}

function deleteModelo() {
  return fetch(`${baseURL}/modelos/5`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createModelo2() {
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
    .then(console.log)
    .catch(console.error);
}

function getVeiculos() {
  return fetch(`${baseURL}/veiculos`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function getVeiculoById() {
  return fetch(`${baseURL}/veiculos/4`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createVeiculo() {
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
    .then(console.log)
    .catch(console.error);
}

function updateVeiculo() {
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
    .then(console.log)
    .catch(console.error);
}

function deleteVeiculo() {
  return fetch(`${baseURL}/veiculos/1`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createVeiculo2() {
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
    .then(console.log)
    .catch(console.error);
}

function getDespesas() {
  return fetch(`${baseURL}/despesas`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function getDespesaById() {
  return fetch(`${baseURL}/despesas/1`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createDespesa() {
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
    .then(console.log)
    .catch(console.error);
}

function updateDespesa() {
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
    .then(console.log)
    .catch(console.error);
}

function deleteDespesa() {
  return fetch(`${baseURL}/despesas/2`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createDespesa2() {
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
    .then(console.log)
    .catch(console.error);
}

function createCliente() {
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
    .then(console.log)
    .catch(console.error);
}

function getClientes() {
  return fetch(`${baseURL}/clientes`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function getClienteById() {
  return fetch(`${baseURL}/clientes/5`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function updateCliente() {
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
    .then(console.log)
    .catch(console.error);
}

function deleteCliente() {
  return fetch(`${baseURL}/clientes/3`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createClienteErro() {
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
    .then(console.log)
    .catch(console.error);
}

function getVagas() {
  return fetch(`${baseURL}/vagas`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function getVagaById() {
  return fetch(`${baseURL}/vagas/1`)
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createVaga() {
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
    .then(console.log)
    .catch(console.error);
}

function updateVaga() {
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
    .then(console.log)
    .catch(console.error);
}

function deleteVaga() {
  return fetch(`${baseURL}/vagas/5`, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

function createVagaErro() {
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
    .then(console.log)
    .catch(console.error);
}

export async function getTipoServico() {
  return request("/tipo-servico");
}

export async function getTipoServicoById(id) {
  return request(`/tipo-servico/${id}`);
}

export async function createTipoServico(data) {
  return request("/tipo-servico", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateTipoServico(id, data) {
  return request(`/tipo-servico/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteTipoServico(id) {
  return request(`/tipo-servico/${id}`, {
    method: "DELETE",
  });
}

function createTipoServicoErro() {
  return fetch(`${baseURL}/tipo-servico`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "",
      descricao: "Lavagem interna e TOP do veículo",
      valor: 50,
      descontoAtivo: 10.5
    })
  })
    .then(res => res.text())
    .then(console.log)
    .catch(console.error);
}

async function runAllTests() {
  console.log("🚀 INICIANDO TESTES COMPLETOS DA API\n");

  console.log("📦 MODELOS");
  await createModelo();
  await getModelos();
  await createModelo2();
  await deleteModelo();

  console.log("\n🚗 VEÍCULOS");
  await createVeiculo();
  await getVeiculos();
  await getVeiculoById();
  await updateVeiculo();
  await deleteVeiculo();
  await createVeiculo2();

  console.log("\n💰 DESPESAS");
  await createDespesa();
  await getDespesas();
  await getDespesaById();
  await updateDespesa();
  await deleteDespesa();
  await createDespesa2();

  console.log("\n👤 CLIENTES");
  await createCliente();
  await getClientes();
  await getClienteById();
  await updateCliente();
  await deleteCliente();
  await createClienteErro();

  console.log("\n🅿️ VAGAS");
  await createVaga();
  await getVagas();
  await getVagaById();
  await updateVaga();
  await deleteVaga();
  await createVagaErro();

  console.log("\nTIPOS DE SERVIÇO");
  await createTipoServico();
  await getTipoServico();
  await getTipoServicoById();
  await updateTipoServico();
  await deleteTipoServico();
  await createTipoServicoErro();

  console.log("\n✅ TODOS OS TESTES FINALIZADOS!");
}

runAllTests();
