import { Op, Sequelize } from "sequelize";
import { Saida } from "../models/Saida.js";
import { Entrada } from "../models/Entrada.js";
import { Cliente } from "../models/Cliente.js";
import { SaidaService } from "./SaidaService.js";

class RelatorioUsuariosSaidasService {
  static async generate(req) {
    let { dataInicial, dataFinal, cliente } = req.query;

    const inicio = dataInicial ? new Date(dataInicial) : new Date(0);
    if (isNaN(inicio.getTime())) {
      throw "Data inicial inválida!";
    }

    const fim = dataFinal ? new Date(dataFinal) : new Date();
    if (isNaN(fim.getTime())) {
      throw "Data final inválida!";
    }

    if (inicio > fim) {
      throw "A data inicial não pode ser posterior à data final!";
    }

    // Ajustar fim para incluir o restante do dia
    fim.setHours(23, 59, 59, 999);

    const includeCliente = { model: Cliente, as: "cliente", required: true };
    if (cliente) {
      includeCliente.where = Sequelize.where(
        Sequelize.fn('UPPER', Sequelize.col('nome')),
        { [Op.like]: `%${cliente.toUpperCase()}%` }
      );
    }

    const saidas = await Saida.findAll({
      where: {
        dataSaida: {
          [Op.between]: [inicio, fim]
        }
      },
      include: [
        {
          model: Entrada,
          as: "entrada",
          required: true,
          include: [includeCliente]
        }
      ]
    });

    const totaisPorCliente = {};

    for (const saida of saidas) {
      const clienteNome = saida.entrada.cliente.nome;
      const valorTotal = await SaidaService.calcularValorTotal(saida.entrada, saida);

      if (!totaisPorCliente[clienteNome]) {
        totaisPorCliente[clienteNome] = { valorTotal: 0, numeroSaidas: 0 };
      }

      totaisPorCliente[clienteNome].valorTotal += valorTotal;
      totaisPorCliente[clienteNome].numeroSaidas += 1;
    }

    const resultados = Object.keys(totaisPorCliente).map(cliente => ({
      cliente,
      totalGasto: Math.round(totaisPorCliente[cliente].valorTotal * 100) / 100,
      numeroDeSaidas: totaisPorCliente[cliente].numeroSaidas
    })).sort((a, b) => b.totalGasto - a.totalGasto);

    return resultados;
  }
}

export { RelatorioUsuariosSaidasService };
