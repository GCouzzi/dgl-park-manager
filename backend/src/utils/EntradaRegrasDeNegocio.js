import { Vaga } from "../models/Vaga.js";
import { Entrada } from "../models/Entrada.js";
import { Saida } from "../models/Saida.js";

export async function todasVagasOcupadas() {
    // REGRA DE NEGÓCIO 1: Verificar se há vagas livres no estacionamento
    const vagasLivres = await Vaga.count({ where: { status: 'LIVRE' } });
    return (vagasLivres === 0);
}

export async function clientePossuiEntradaAtiva(clienteId) {
    // REGRA DE NEGÓCIO 2: Não permitir que o mesmo cliente tenha 2 entradas ativas
    const entradasCliente = await Entrada.findAll({ where: { clienteId } });
    for (const entrada of entradasCliente) {
        const saida = await Saida.findOne({ where: { entradaId: entrada.id } });
        if (!saida) return true;
    }
    return false;
}
