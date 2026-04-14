import { Cliente } from "../models/Cliente.js";

class ClienteService {

  static async findAll() {
    const objs = await Cliente.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Cliente.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, cpf, telefone, tipo } = req.body;
    const obj = await Cliente.create({ nome, cpf, telefone, tipo });
    return await Cliente.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, cpf, telefone, tipo } = req.body;
    const obj = await Cliente.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Cliente não encontrado!';
    Object.assign(obj, { nome, cpf, telefone, tipo });
    await obj.save();
    return await Cliente.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Cliente.findByPk(id);
    if (obj == null) throw 'Cliente não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um cliente com vínculos existentes.";
    }
  }

}

export { ClienteService };
