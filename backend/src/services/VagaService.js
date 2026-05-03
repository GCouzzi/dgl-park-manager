import { Vaga } from "../models/Vaga.js";

class VagaService {

  static async findAll() {
    const objs = await Vaga.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findVagaLivre() {
    return await Vaga.findOne({ where: { status: 'LIVRE' } });
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Vaga.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { tipo, status, possuiCobertura, preferencial } = req.body;
    const obj = await Vaga.create({ tipo, status, possuiCobertura, preferencial });
    return await Vaga.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { tipo, status, possuiCobertura, preferencial } = req.body;
    const obj = await Vaga.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Vaga não encontrada!';
    Object.assign(obj, { tipo, status, possuiCobertura, preferencial });
    await obj.save();
    return await Vaga.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Vaga.findByPk(id);
    if (obj == null) throw 'Vaga não encontrada!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover uma vaga com vínculos existentes.";
    }
  }

}

export { VagaService };
