import { Servico } from "../models/Servico.js";
import { UsuarioService } from "./UsuarioService.js";
import { EntradaService } from "./EntradaService.js";
import { TipoServicoService } from "./TipoServicoService.js";
import { SaidaService } from "./SaidaService.js";
import { usuarioJaPrestou10ServicosHoje, existeTipoServicoNaEntrada } from "../utils/ServicoRegrasDeNegocio.js";
import sequelize from "../config/database-connection.js";
import { Op, Sequelize } from 'sequelize';

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

  static async findByEntradaId(req) {
    const { entradaId } = req.params;

    const objs = await Servico.findAll({
      where: { entradaId },
      include: { all: true, nested: true }
    });

    return objs;
  }

  static async findByPrestadorHoje(req) {
    const { prestadorId } = req.params;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const objs = await Servico.findAll({
      where: {
        usuarioId: prestadorId,
        dataServico: {
          [Op.between]: [startOfDay, endOfDay]
        }
      },
      include: { all: true, nested: true }
    });

    return objs;
  }

  static async create(req) {
    // prestador, tipo de serviço, desconto, placa, Data serviço (automaticamente add)
    let { prestadorId, tipoDeServicoId, desconto, placa } = req.body;

    const t = await sequelize.transaction();

    try {
      // buscar tipo de serviço
      let parameterObj = {params:{
          id: tipoDeServicoId
        }
      };
      const tipoDeServicoEncontrado = await TipoServicoService.findByPk(parameterObj);
      if(!tipoDeServicoEncontrado){
        throw "Tipo de serviço não encontrado.";
      };
      
      parameterObj = {params:{
          placa: placa
        }
      };
      // Buscar entrada
      const entradaEncontrada = await EntradaService.findLatestByPlaca(parameterObj);
      if (!entradaEncontrada) {
        throw "Nenhuma entrada encontrada para a referida placa.";
      };

      // Verificar se a entrada encontrada possui uma saida
      // (isto é, se o veículo já saiu do estacionamento)
      parameterObj = {params:{
          entradaId: entradaEncontrada.id
        }
      };
      const saidaEncontrada = await SaidaService.findByEntradaId(parameterObj);
      if(saidaEncontrada){
        throw "O veículo com a referida placa não se encontra dentro do estacionamento.";
      }

      parameterObj = {params:{
          id: prestadorId
        }
      };
      // Buscar usuário
      const usuarioEncontrado = await UsuarioService.findByPk(parameterObj);
      if(!usuarioEncontrado){
        throw "Prestador não encontrado.";
      }

      if(await usuarioJaPrestou10ServicosHoje(prestadorId)){
        throw "O Prestador indicado já prestou 10 serviços por hoje. Selecione outro";
      }

      if(await existeTipoServicoNaEntrada(entradaEncontrada.id, tipoDeServicoId)){
        throw "Não pode realizar o mesmo tipo de serviço duas vezes durante a mesma estadia";
      }

      // inserir no banco de dados
      const obj = await Servico.create(
        {
          usuarioId: usuarioEncontrado.id,
          tipoServicoId: tipoDeServicoEncontrado.id,
          entradaId: entradaEncontrada.id,
          desconto
        },
        { transaction: t }
      );

      await t.commit();

      return await Servico.findByPk(obj.id, {
        include: { all: true, nested: true }
      });
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  static async update(req) {
    const { id } = req.params;
    let { prestadorId, tipoDeServicoId, desconto, placa } = req.body;

    const t = await sequelize.transaction();

    try {
      // buscar tipo de serviço
      let parameterObj = {params:{
          id: tipoDeServicoId
        }
      };
      const tipoDeServicoEncontrado = await TipoServicoService.findByPk(parameterObj);
      if(!tipoDeServicoEncontrado){
        throw "Tipo de serviço não encontrado.";
      };
      
      parameterObj = {params:{
          placa: placa
        }
      };
      // Buscar entrada
      const entradaEncontrada = await EntradaService.findLatestByPlaca(parameterObj);
      if (!entradaEncontrada) {
        throw "Nenhuma entrada encontrada para a referida placa.";
      };

      parameterObj = {params:{
          id: prestadorId
        }
      };
      // Buscar usuário
      const usuarioEncontrado = await UsuarioService.findByPk(parameterObj);
      if(!usuarioEncontrado){
        throw "Prestador não encontrado.";
      }

      if(await existeTipoServicoNaEntrada(entradaEncontrada.id, tipoDeServicoId)){
        throw "Não pode realizar o mesmo tipo de serviço duas vezes durante a mesma estadia";
      }

      const obj = await Servico.findByPk(id, {
        include: { all: true, nested: true }
      });

      if(prestadorId != obj.usuarioId && (await usuarioJaPrestou10ServicosHoje(prestadorId))){
        throw "O Prestador indicado já prestou 10 serviços por hoje. Selecione outro";
      }

      if (obj == null) throw 'Serviço não encontrado!';

      Object.assign(obj, {
          usuarioId: usuarioEncontrado.id,
          tipoServicoId: tipoDeServicoEncontrado.id,
          entradaId: entradaEncontrada.id,
          dataServico: new Date(),
          desconto
        }
      );

      await obj.save({ transaction: t });

      await t.commit();

      return await Servico.findByPk(obj.id, {
        include: { all: true, nested: true }
      });

    } catch (error) {
      await t.rollback();
      throw error;
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