import { Saida, Servico } from "../models/Servico";
import { UsuarioService } from "./UsuarioService";
import { VeiculoService } from "./VeiculoService";
import { TipoServicoService } from "./TipoServicoService";
import sequelize from "../config/database-connection.js";

class ServicoService {

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
    let { prestadorId, tipoDeServicoId, desconto, placa } = req.body;

    const usuarioId = 1; // mock

    const t = await sequelize.transaction();

    try {
      let parameterObj = {params:{
          id: tipoDeServicoId
        }
      };
      const tipoDeServicoEncontrado = TipoServicoService.findByPk(parameterObj);
      if(!tipoDeServicoEncontrado){
        throw "Tipo de serviço não encontrado.";
      };
      
      parameterObj = {params:{
          placa: placa
        }
      };
      // Trocar VeiculoService para um método no service da entrada
      const entradaEncontrada = VeiculoService.findByPlaca(parameterObj);
      if (!veiculoEncontrado) {
        throw "Veículo não encontrado.";
      };

      parameterObj = {params:{
          id: prestadorId
        }
      };
      const funcionarioEncontrado = UsuarioService.findByPk(parameterObj);
      if(!funcionarioEncontrado){
        throw "Funcionário não encontrado.";
      }

      /*
      const obj = await Servico.create(
        {
          prestadorId: funcionarioEncontrado.id,
          tipoServicoId: tipoDeServicoEncontrado.id,
          ,
          desconto,
          tipoPagamento,
          statusPagamento,
          observacoes,
          usuarioId
        },
        { transaction: t }
      );
      */
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

export { ServicoService };