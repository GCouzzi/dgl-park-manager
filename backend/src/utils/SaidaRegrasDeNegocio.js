import { SaidaService } from "../services/SaidaService";
import { ClienteService } from "../services/ClienteService"
import { UsuarioService } from "../services/UsuarioService"

export function saidaRegrasDeNegocio(clienteId){

  desconto = regraNumeroSaidas();
  desconto2 = regraCpfClienteUsuarioIguais();

  return desconto > desconto2 ? desconto : desconto2;
}

function regraNumeroSaidas(clienteId){
  let desconto = 0;
  const numeroSaidas = SaidaService.findNumeroSaidas(clienteId);

  if(numeroSaidas % 10 == 0){
    desconto = 0.1;
  }

  return desconto;
}

function regraCpfClienteUsuarioIguais(clienteId){
  let desconto = 0;
  const cliente = ClienteService.findByPk(clienteId);
  const usuario = UsuarioService.findByCpf(cliente.cpf);

  if(!usuario){
    return desconto;
  }

  if(cliente.cpf === usuario.cpf){
    desconto = 1;
  }

  return desconto; 
}