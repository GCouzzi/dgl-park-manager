import { VagaService } from "../services/VagaService.js";
import { EntradaService } from "../services/EntradaService.js";
import { Saida } from "../models/Saida.js";

export async function todasVagasOcupadas() {
    // REGRA DE NEGÓCIO 1: Verificar se há vagas livres no estacionamento
    const vagaLivre = await VagaService.findVagaLivre();
    return (vagaLivre === null);
}

export async function clientePossuiEntradaAtiva(clienteId) {
    // REGRA DE NEGÓCIO 2: Não permitir que o mesmo cliente tenha 2 entradas ativas
    const entradasCliente = await EntradaService.findByCliente(clienteId);
    for (const entrada of entradasCliente) {
        const saida = await Saida.findOne({ where: { entradaId: entrada.id } });
        if (!saida) return true;
    }
    return false;
}

export async function veiculoPossuiEntradaAtiva(veiculoId, entradaIdParaIgnorar = null) {
    // REGRA DE NEGÓCIO 3: Não permitir que o mesmo veículo tenha 2 entradas ativas
    // (uma entrada ativa é aquela que ainda não possui saída registrada)
    const entradasVeiculo = await EntradaService.findByVeiculo(veiculoId);
    for (const entrada of entradasVeiculo) {
        if (entradaIdParaIgnorar && entrada.id === entradaIdParaIgnorar) continue;
        const saida = await Saida.findOne({ where: { entradaId: entrada.id } });
        if (!saida) return true;
    }
    return false;
}
