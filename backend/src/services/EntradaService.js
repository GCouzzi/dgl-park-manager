import { Entrada } from "../models/Entrada.js";

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

  static async create(req) {
    const { clienteId, vagaId, veiculoId } = req.body;
    const horario = new Date();
    const obj = await Entrada.create({ horario, clienteId, vagaId, veiculoId });
    return await Entrada.findByPk(obj.id, { include: { all: true, nested: true } });
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
