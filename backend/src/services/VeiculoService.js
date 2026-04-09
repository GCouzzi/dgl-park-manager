import { Veiculo } from "../models/Veiculo.js";

class VeiculoService {

  static async findAll() {
    const objs = await Veiculo.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Veiculo.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { placa, modelo, banido, motivo, cor } = req.body;
    criador = "Mock";
    const obj = await Veiculo.create({ placa, modelo, banido, motivo, cor });
    return await Veiculo.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { placa, modelo, banido, motivo, cor } = req.body;
    const obj = await Veiculo.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Veiculo não encontrado!';
    Object.assign(obj, { placa, modelo, banido, motivo, cor });
    await obj.save();
    return await Veiculo.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Veiculo.findByPk(id);
    if (obj == null) throw 'Veiculo não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um veiculo com veículos cadastrados.";
    }
  }

}

export { VeiculoService };