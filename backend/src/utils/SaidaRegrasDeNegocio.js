import { SaidaService } from "../services/SaidaService.js";
import { ClienteService } from "../services/ClienteService.js"
import { UsuarioService } from "../services/UsuarioService.js"

export async function saidaRegrasDeNegocio(clienteId) {

  const desconto = await regraNumeroSaidas(clienteId);
  const desconto2 = await regraCpfClienteUsuarioIguais(clienteId);

  return desconto > desconto2 ? desconto : desconto2;
}

async function regraNumeroSaidas(clienteId) {
  let desconto = 0;
  const numeroSaidas = await SaidaService.findNumeroSaidas(clienteId);

  if (numeroSaidas > 0 && numeroSaidas % 10 === 0) {
    desconto = 0.1;
  }

  return desconto;
}

async function regraCpfClienteUsuarioIguais(clienteId) {
  let desconto = 0;
  const cliente = await ClienteService.findByPk({ params: { id: clienteId } });

  if (!cliente) {
    return desconto;
  }

  const usuario = await UsuarioService.findByCpf(cliente.cpf);

  if (!usuario) {
    return desconto;
  }

  if (cliente.cpf === usuario.cpf) {
    desconto = 1;
  }

  return desconto;
}