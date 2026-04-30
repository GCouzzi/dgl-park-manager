import { Veiculo } from "../models/Veiculo.js";
import { Modelo } from "../models/Modelo.js";

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

  static async findByPlaca(req) {
    const { placa } = req.params;
    
    const obj = await Veiculo.findAll({
      where: {
        placa: placa
      }
    });
    return obj;
  }

  static async create(req) {
    let { placa, modeloId, banido, motivo, cor } = req.body;
    if(banido == false){
      motivo = null;
    }
    const modelo = await Modelo.findByPk(modeloId);
    if (!modelo) {
      throw new Error("Modelo não encontrado");
    }
    const obj = await Veiculo.create({ placa, modeloId, banido, motivo, cor });
    return await Veiculo.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    let { placa, modeloId, banido, motivo, cor } = req.body;
    if(banido == false){
      if(motivo !== undefined){
        motivo = null;
      }
    }
    const modelo = await Modelo.findByPk(modeloId);
    if (!modelo) {
      throw new Error("Modelo não encontrado");
    }
    const obj = await Veiculo.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Veiculo não encontrado!';
    Object.assign(obj, { placa, modeloId, banido, motivo, cor });
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