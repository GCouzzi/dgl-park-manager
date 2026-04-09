import { Modelo } from "../models/Modelo.js";

class ModeloService {

  static async findAll() {
    const objs = await Modelo.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async create(req) {
    const { nome, ano, marca } = req.body;
    const obj = await Modelo.create({ nome, ano, marca });
    return await Modelo.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Modelo.findByPk(id);
    if (obj == null) throw 'Modelo não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um modelo com veículos cadastrados.";
    }
  }

}

export { ModeloService };