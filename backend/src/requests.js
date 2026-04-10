const BASE_URL = "http://localhost:3333";

async function request(url, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    return await response.json();
  } catch (err) {
    console.error("Erro:", err);
    throw err;
  }
}

// Gabriel

export async function listarModelos() {
  return request("/modelos");
}

export async function criarModelo(data) {
  return request("/modelos", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function deletarModelo(id) {
  return request(`/modelos/${id}`, {
    method: "DELETE",
  });
}

export async function listarVeiculos() {
  return request("/veiculos");
}

export async function buscarVeiculo(id) {
  return request(`/veiculos/${id}`);
}

export async function criarVeiculo(data) {
  return request("/veiculos", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function atualizarVeiculo(id, data) {
  return request(`/veiculos/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deletarVeiculo(id) {
  return request(`/veiculos/${id}`, {
    method: "DELETE",
  });
}

export async function listarDespesas() {
  return request("/despesas");
}

export async function buscarDespesa(id) {
  return request(`/despesas/${id}`);
}

export async function criarDespesa(data) {
  return request("/despesas", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function atualizarDespesa(id, data) {
  return request(`/despesas/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deletarDespesa(id) {
  return request(`/despesas/${id}`, {
    method: "DELETE",
  });
}

// --------