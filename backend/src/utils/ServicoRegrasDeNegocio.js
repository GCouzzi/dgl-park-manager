import { ServicoService } from "../services/ServicoService.js";

export async function usuarioJaPrestou10ServicosHoje(prestadorId){
    // Um usuário só pode prestar no máximo 10 serviços por dia.
    const servicos = await ServicoService.findByPrestadorHoje({params: {prestadorId}});
    return (servicos.length >= 10);
}

export async function existeTipoServicoNaEntrada(entradaId, tipoServicoId){
    // Um tipo de serviço só pode ser prestado apenas uma vez por estadia.
    const servicos = await ServicoService.findByEntradaId({params: {entradaId}});

    for(const servico of servicos){
        if(servico.tipoServicoId == tipoServicoId){
            return true;
        }
    }

    return false;
}