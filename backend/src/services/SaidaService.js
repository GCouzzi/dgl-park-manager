import { Saida } from "../models/Saida.js";
import { Entrada } from "../models/Entrada.js";
import { Servico } from "../models/Servico.js";
import { saidaRegrasDeNegocio } from "../utils/SaidaRegrasDeNegocio.js";
import sequelize from "../config/database-connection.js";
import { EntradaService } from "./EntradaService.js";
import { ServicoService } from "./ServicoService.js";
import { Vaga } from "../models/Vaga.js";

class SaidaService {
  static async findAll() {
    const saidas = await Saida.findAll({ include: { all: true, nested: true } });

    const result = await Promise.all(
      saidas.map(async (saida) => {
        const entrada = await EntradaService.findByPk({ params: { id: saida.entradaId } });
        const servicos = await Servico.findAll({
          where: { entradaId: saida.entradaId },
          include: { all: true, nested: true },
        });
        const valorTotal = await SaidaService.calcularValorTotal(entrada, saida, servicos);
        return { ...saida.toJSON(), valorTotal };
      })
    );

    return result;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Saida.findByPk(id);
    return obj;
  }

  static async findByEntradaId(req) {
    const { entradaId } = req.params;

    const obj = await Saida.findOne({
      where: { entradaId },
    });

    return obj;
  }

  static async create(req) {
    let { entradaId, desconto, tipoPagamento, statusPagamento, observacoes } =
      req.body;

    if (desconto > 1) {
      throw "O desconto deve ser um valor entre 0 e 1, representando a porcentagem de desconto. Exemplo: 0.1 para 10% de desconto.";
    }

    const usuarioId = 1; // mock

    const t = await sequelize.transaction();

    try {
      const entrada = await EntradaService.findByPk({
        params: { id: entradaId },
      });
      if (!entrada) throw "Entrada não encontrada";

      const clienteId = entrada.clienteId;

      const descontoRegra = await saidaRegrasDeNegocio(clienteId);

      if (descontoRegra === 1) {
        desconto = 1;
      } else {
        desconto = Math.min(
          1,
          Math.round(((desconto || 0) + descontoRegra) * 100) / 100,
        );
      }

      const obj = await Saida.create(
        {
          entradaId: entrada.id,
          desconto,
          tipoPagamento,
          statusPagamento,
          observacoes,
          usuarioId,
        },
        { transaction: t },
      );

      const vaga = await Vaga.findByPk(entrada.vagaId, { transaction: t });

      if (!vaga) throw "Vaga não encontrada";

      vaga.status = "LIVRE";
      await vaga.save({ transaction: t });

      await t.commit();

      const saidaCriada = await Saida.findByPk(obj.id);
      const servicos = await Servico.findAll({
        where: { entradaId: entrada.id },
        include: { all: true, nested: true },
      });
      const valorTotal = await SaidaService.calcularValorTotal(entrada, saidaCriada, servicos);

      return { ...saidaCriada.toJSON(), valorTotal };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  static async update(req) {
    const { id } = req.params;
    let { desconto, tipoPagamento, statusPagamento, observacoes } = req.body;

    if (desconto > 1) {
      throw "O desconto deve ser um valor entre 0 e 1, representando a porcentagem de desconto. Exemplo: 0.1 para 10% de desconto.";
    }

    const t = await sequelize.transaction();

    try {
      const obj = await Saida.findByPk(id);

      if (obj == null) throw "Saída não encontrada!";

      Object.assign(obj, {
        desconto,
        tipoPagamento,
        statusPagamento,
        observacoes,
      });

      await obj.save({ transaction: t });

      await t.commit();

      return await Saida.findByPk(obj.id);
    } catch (error) {
      await t.rollback();
      throw "Erro ao atualizar saída";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Saida.findByPk(id);
    if (obj == null) throw "Saida não encontrada!";
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Erro ao excluir saída.";
    }
  }

  static async findNumeroSaidas(clienteId) {
    const num = await Saida.count({
      include: [
        {
          model: Entrada,
          as: "entrada",
          required: true,
          where: { clienteId },
        },
      ],
      distinct: true,
      col: "id",
    });

    return num;
  }

  static async calcular(req, res) {
    const { entradaId, saidaId } = req.query;

    if (!entradaId) {
      throw "entradaId é obrigatório";
    }

    if (!saidaId) {
      throw "saidaId é obrigatório";
    }

    const entrada = await EntradaService.findByPk({
      params: { id: entradaId },
    });
    const saida = await SaidaService.findByPk({
      params: { id: saidaId },
    });
    const servicos = await Servico.findAll({
      where: { entradaId },
      include: { all: true, nested: true },
    });

    const total = await SaidaService.calcularValorTotal(entrada, saida, servicos);

    return total;
  }

  static async calcularValorTotal(entrada, saida, servicos = []) {
    const dataEntrada = new Date(entrada.horario);
    const dataSaida = new Date(saida?.dataSaida || new Date());

    const diffMs = dataSaida - dataEntrada;

    if (diffMs <= 0) {
      throw "Data de saída inválida";
    }

    const diffHoras = diffMs / (1000 * 60 * 60);
    const valorHora = 10;
    const horasCobradas = Math.max(1, Math.ceil(diffHoras));
    const totalBruto = horasCobradas * valorHora;
    const desconto = saida.desconto;
    const totalEstacionamento = totalBruto * (1 - desconto);

    // Soma os serviços vinculados à entrada
    const totalServicos = servicos.reduce((acc, servico) => {
      return acc + ServicoService.calcularValorTotal(servico);
    }, 0);

    return Math.round((totalEstacionamento + totalServicos) * 100) / 100;
  }
}

export { SaidaService };
