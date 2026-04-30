import { Saida } from "../models/Saida";
import { Entrada } from "../models/Entrada";
import { saidaRegrasDeNegocio } from "../utils/SaidaRegrasDeNegocio";

class SaidaService {

  static async findAll() {
    const objs = await Saida.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Saida.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    let { placa, desconto, tipoPagamento, statusPagamento, observacoes } = req.body;

    const usuarioId = 1; // mock

    const t = await sequelize.transaction();

    try {
      const entrada = await Entrada.findByPlaca(placa);
      if (!entrada) {
        throw new Error("Entrada não encontrada");
      }

      const clienteId = entrada.clienteId;

      const descontoRegra = await saidaRegrasDeNegocio(clienteId);

      if(descontoRegra === 100){
         desconto = descontoRegra 
      } else { 
        desconto += descontoRegra
      }

      const obj = await Saida.create(
        {
          entradaId: entrada.id,
          desconto,
          tipoPagamento,
          statusPagamento,
          observacoes,
          usuarioId
        },
        { transaction: t }
      );

      await t.commit();

      return await Saida.findByPk(obj.id, {
        include: { all: true, nested: true }
      });

    } catch (error) {
      await t.rollback();
      throw "Erro ao criar saída";
    }
  }

  static async update(req) {
    const { id } = req.params;
    let { desconto, tipoPagamento, statusPagamento, observacoes } = req.body;

    const t = await sequelize.transaction();

    try {
      const obj = await Saida.findByPk(id, {
        include: { all: true, nested: true }
      });

      if (obj == null) throw 'Saída não encontrada!';

      Object.assign(obj, {
        desconto,
        tipoPagamento,
        statusPagamento,
        observacoes
      });

      await obj.save({ transaction: t });

      await t.commit();

      return await Saida.findByPk(obj.id, {
        include: { all: true, nested: true }
      });

    } catch (error) {
      await t.rollback();
      throw "Erro ao atualizar saída";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Saida.findByPk(id);
    if (obj == null) throw 'Saida não encontrada!';
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
          as: 'entrada',
          required: true,
          where: { clienteId }
        }
      ],
      distinct: true,
      col: 'saida.id'
    });

    return num;
  }

  static async calcularValorTotal(entrada, saida){
    // implementar
    return 1;
  }

}

export { SaidaService };