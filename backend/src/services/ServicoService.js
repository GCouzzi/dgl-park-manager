import { Saida, Servico } from "../models/Servico";
import { Veiculo } from "./VeiculoService"
import { saidaRegrasDeNegocio } from "../utils/SaidaRegrasDeNegocio";

class SaidaService {

  static async findAll() {
    const objs = await Servico.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Servico.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    // prestador, tipo de serviço, desconto, placa, Data serviço (automaticamente add)
    let { prestadorId, tipoDeServico, desconto, placa } = req.body;


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
      throw "Erro ao criar serviço";
    }
  }

  static async update(req) {
    const { id } = req.params;
    let { desconto, tipoPagamento, statusPagamento, observacoes } = req.body;

    const t = await sequelize.transaction();

    try {
      const obj = await Servico.findByPk(id, {
        include: { all: true, nested: true }
      });

      if (obj == null) throw 'Serviço não encontrado!';

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
      throw "Erro ao atualizar serviço";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Servico.findByPk(id);
    if (obj == null) throw 'Serviço não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Erro ao excluir serviço.";
    }
  }
}

export { SaidaService };