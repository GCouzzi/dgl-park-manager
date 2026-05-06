import { Entrada } from "../models/Entrada.js";
import { Veiculo } from "../models/Veiculo.js";
import { Vaga } from "../models/Vaga.js";
import { Cliente } from "../models/Cliente.js";
import { todasVagasOcupadas, clientePossuiEntradaAtiva } from "../utils/EntradaRegrasDeNegocio.js";
import sequelize from "../config/database-connection.js";

class EntradaService {

  static async findAll() {
    const objs = await Entrada.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Entrada.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async findLatestByPlaca(req) {
    const { placa } = req.params;

    const obj = await Entrada.findOne({
      include: [
        {
          model: Veiculo,
          as: 'veiculo',
          where: { placa }
        }
      ],
      order: [['horario', 'DESC']]
    });

    return obj;
  }

  static async findByCliente(clienteId) {
    const objs = await Entrada.findAll({ where: { clienteId } });
    return objs;
  }

  static async create(req) {
    const { clienteId, vagaId, veiculoId } = req.body;
    const horario = new Date();

    // Validar se o cliente existe
    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) throw 'Cliente não encontrado!';

    // Validar se o veículo existe
    const veiculo = await Veiculo.findByPk(veiculoId);
    if (!veiculo) throw 'Veículo não encontrado!';

    // Validar se a vaga existe
    const vagaExistente = await Vaga.findByPk(vagaId);
    if (!vagaExistente) throw 'Vaga não encontrada!';

    // REGRA DE NEGÓCIO 1: Verificar se há vagas livres no estacionamento
    if (await todasVagasOcupadas()) {
      throw 'Não há vagas livres no estacionamento!';
    }

    // Validar se a vaga escolhida está livre
    if (vagaExistente.status !== 'LIVRE') {
      throw 'A vaga selecionada não está livre!';
    }

    // REGRA DE NEGÓCIO 2: Não permitir que o mesmo cliente tenha 2 entradas ativas
    if (await clientePossuiEntradaAtiva(clienteId)) {
      throw 'Este cliente já possui uma entrada ativa!';
    }

    const t = await sequelize.transaction();

    try {
      const entrada = await Entrada.create(
        { horario, clienteId, vagaId, veiculoId },
        { transaction: t }
      );

      const vaga = await Vaga.findByPk(vagaId, { transaction: t });

      if (!vaga) throw 'Vaga não encontrada!';

      if (vaga.status !== 'LIVRE') {
        throw 'A vaga selecionada não está livre!';
      }

      vaga.status = "OCUPADA";
      await vaga.save({ transaction: t });

      await t.commit();

      return await Entrada.findByPk(entrada.id, {
        include: { all: true, nested: true }
      });
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { clienteId, vagaId, veiculoId } = req.body;
    const obj = await Entrada.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Entrada não encontrada!';
    Object.assign(obj, { clienteId, vagaId, veiculoId });
    await obj.save();
    return await Entrada.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Entrada.findByPk(id);
    if (obj == null) throw 'Entrada não encontrada!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover uma entrada com vínculos existentes.";
    }
  }

}

export { EntradaService };
