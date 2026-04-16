import { Usuario } from "../models/Usuario.js";

class UsuarioService {

  static async findAll() {
    const objs = await Usuario.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nomeUsuario, senha, cpf, telefone, endereco, tipoUsuario } = req.body;

    const obj = await Usuario.create({
      nomeUsuario,
      senha,
      cpf,
      telefone,
      endereco,
      tipoUsuario
    });

    return await Usuario.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nomeUsuario, senha, cpf, telefone, endereco, tipoUsuario } = req.body;

    const obj = await Usuario.findByPk(id, { include: { all: true, nested: true } });

    if (obj == null) throw 'Usuário não encontrado!';

    Object.assign(obj, {
      nomeUsuario,
      senha,
      cpf,
      telefone,
      endereco,
      tipoUsuario
    });

    await obj.save();

    return await Usuario.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;

    const obj = await Usuario.findByPk(id);

    if (obj == null) throw 'Usuário não encontrado!';

    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um usuário com vínculos existentes.";
    }
  }

}

export { UsuarioService };