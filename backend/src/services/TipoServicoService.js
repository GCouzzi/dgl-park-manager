import { TipoServico } from "../models/TipoServico.js";

class TipoServicoService {

  static async findAll() {
    const objs = await TipoServico.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await TipoServico.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, descricao, valor, descontoAtivo } = req.body;

    const obj = await TipoServico.create({
      nome,
      descricao,
      valor,
      descontoAtivo
    });

    return await TipoServico.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, descricao, valor, descontoAtivo } = req.body;

    const obj = await TipoServico.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Tipo de serviço não encontrado!';

    Object.assign(obj, {
      nome,
      descricao,
      valor,
      descontoAtivo
    });

    await obj.save();

    return await TipoServico.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;

    const obj = await TipoServico.findByPk(id);
    if (obj == null) throw 'Tipo de serviço não encontrado!';

    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um tipo de serviço com vínculos existentes.";
    }
  }

}

export { TipoServicoService };