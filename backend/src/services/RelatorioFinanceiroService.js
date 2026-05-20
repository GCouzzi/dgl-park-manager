import { Saida } from "../models/Saida.js";
import { Entrada } from "../models/Entrada.js";
import { saidaRegrasDeNegocio } from "../utils/SaidaRegrasDeNegocio.js";
import sequelize from "../config/database-connection.js";
import { EntradaService } from "./EntradaService.js";
import { Vaga } from "../models/Vaga.js";
import { Op } from "sequelize";
import { ServicoService } from "./ServicoService.js";

import { Servico } from "../models/Servico.js";
import { Despesa } from "../models/Despesa.js";
import { SaidaService } from "./SaidaService.js";

class RelatorioFinanceiroService {
  static async generate(req) {
    let { dataInicial, dataFinal } = req.query;

    const whereServico = {};
    const whereSaida = {};
    const whereDespesa = { status: "PAGO" };
    if (dataInicial || dataFinal) {
      whereServico.dataServico = {};
      whereSaida.dataSaida = {};
      whereDespesa.vencimento = {};
    
      if (dataInicial) {
        const inicio = new Date(dataInicial);
    
        if (isNaN(inicio.getTime())) {
          throw "Data inicial inválida";
        }
    
        whereServico.dataServico[Op.gte] = inicio;
        whereSaida.dataSaida[Op.gte] = inicio;
        whereDespesa.vencimento[Op.gte] = inicio;
      }
    
      if (dataFinal) {
        const fim = new Date(dataFinal);
    
        if (isNaN(fim.getTime())) {
          throw "Data final inválida";
        }
    
        // include full day
        fim.setUTCHours(23, 59, 59, 999);
    
        whereServico.dataServico[Op.lte] = fim;
        whereSaida.dataSaida[Op.lte] = fim;
        whereDespesa.vencimento[Op.lte] = fim;
      }
    }
  
    const servicos = await Servico.findAll({
      where: whereServico,
      include: [
        'tipoServico',
        'usuario',
        'entrada'
      ]
    });

    const saidas = await Saida.findAll({
      where: whereSaida,
      include: [
        {
          model: Entrada,
          as: 'entrada'
        },
        {
          association: 'usuario'
        }
      ],
      order: [['dataSaida', 'DESC']]
    });

    const despesas = await Despesa.findAll({
      where: whereDespesa,
      order: [['vencimento', 'DESC']]
    });

    const relatorio = {};
    relatorio.itens = [];
    let totalReceitas = 0;
    for (const saida of saidas) {
      const totalSaida = await SaidaService.calcularValorTotal(saida.entrada, saida);
      relatorio.itens.push({tipo: "Receita", item: "Pagamento de estacionamento", valor: totalSaida, data: saida.dataSaida});
      totalReceitas += totalSaida;
    }

    for(const servico of servicos) {
      const totalServico = ServicoService.calcularValorTotal(servico);
      relatorio.itens.push({tipo: "Receita", item: servico.tipoServico.nome, total: totalServico, data: servico.dataServico});
      totalReceitas += totalServico;
    }

    let totalDespesas = 0;
    for(const despesa of despesas) {
      relatorio.itens.push({tipo: "Despesa", item: despesa.descricao, valor: despesa.valor, data: despesa.vencimento});
      totalDespesas += despesa.valor;
    }

    relatorio.totais = {totalReceitas, totalDespesas}

    return relatorio;
  }
}

export { RelatorioFinanceiroService };
