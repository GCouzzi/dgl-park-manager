import { Despesa } from "../models/Despesa.js";

class DespesaService {
  static async findAll() {
    const objs = await Despesa.findAll({
      include: { all: true, nested: true },
    });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Despesa.findByPk(id, {
      include: { all: true, nested: true },
    });
    return obj;
  }

  static async create(req) {
    const { descricao, valor, vencimento, status } = req.body;
    const usuarioId = 1; // passando qualquer usuário existente, pois o sistema não tem autenticação implementada ainda
    const obj = await Despesa.create({
      descricao,
      valor,
      vencimento,
      status,
      usuarioId,
    });
    return await Despesa.findByPk(obj.id, {
      include: { all: true, nested: true },
    });
  }

  static async update(req) {
    const { id } = req.params;
    const { descricao, valor, vencimento, status } = req.body;
    const obj = await Despesa.findByPk(id, {
      include: { all: true, nested: true },
    });
    if (obj == null) throw "Despesa não encontrado!";
    Object.assign(obj, { descricao, valor, vencimento, status });
    await obj.save();
    return await Despesa.findByPk(obj.id, {
      include: { all: true, nested: true },
    });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Despesa.findByPk(id);
    if (obj == null) throw "Despesa não encontrado!";
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um despesa com veículos cadastrados.";
    }
  }
}

export { DespesaService };
