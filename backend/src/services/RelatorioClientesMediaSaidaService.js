import { Op } from "sequelize";
import { Saida } from "../models/Saida.js";
import { Entrada } from "../models/Entrada.js";
import { Cliente } from "../models/Cliente.js";
import { SaidaService } from "./SaidaService.js";

class RelatorioClientesMediaSaidaService {
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
      includeCliente.where = {
        nome: {
          [Op.like]: `%${cliente}%`
        }
      };
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

    const dadosPorCliente = {};

    for (const saida of saidas) {
      const clienteNome = saida.entrada.cliente.nome;
      const valorTotal = await SaidaService.calcularValorTotal(saida.entrada, saida);

      if (!dadosPorCliente[clienteNome]) {
        dadosPorCliente[clienteNome] = { totalGasto: 0, numeroDeSaidas: 0 };
      }

      dadosPorCliente[clienteNome].totalGasto += valorTotal;
      dadosPorCliente[clienteNome].numeroDeSaidas += 1;
    }

    const resultados = Object.keys(dadosPorCliente).map(cliente => {
      const { totalGasto, numeroDeSaidas } = dadosPorCliente[cliente];
      const mediaPorSaida = Math.round((totalGasto / numeroDeSaidas) * 100) / 100;
      return {
        cliente,
        numeroDeSaidas,
        mediaPorSaida
      };
    }).sort((a, b) => b.mediaPorSaida - a.mediaPorSaida);

    return resultados;
  }
}

export { RelatorioClientesMediaSaidaService };
