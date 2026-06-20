import { Cliente } from "../models/Cliente.js";
import { Op } from "sequelize";

function onlyDigits(value) {
  return String(value ?? "").replace(/\D/g, "");
}

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

  // Garante que não existe outro cliente com o mesmo CPF ou telefone.
  // A comparação ignora máscara (pontos, traços, parênteses, espaços),
  // considerando apenas a sequência de dígitos.
  static async ensureCpfETelefoneUnicos({ cpf, telefone, ignoreId }) {
    const cpfDigits = onlyDigits(cpf);
    const telefoneDigits = onlyDigits(telefone);

    const where = ignoreId ? { id: { [Op.ne]: ignoreId } } : {};

    const clientesExistentes = await Cliente.findAll({
      where,
      attributes: ["id", "cpf", "telefone"]
    });

    const cpfDuplicado = clientesExistentes.some(
      (cliente) => cpfDigits && onlyDigits(cliente.cpf) === cpfDigits
    );

    if (cpfDuplicado) {
      throw "Já existe um cliente cadastrado com este CPF.";
    }

    const telefoneDuplicado = clientesExistentes.some(
      (cliente) => telefoneDigits && onlyDigits(cliente.telefone) === telefoneDigits
    );

    if (telefoneDuplicado) {
      throw "Já existe um cliente cadastrado com este telefone.";
    }
  }

  static async create(req) {
    const { nome, cpf, telefone, tipo } = req.body;

    await ClienteService.ensureCpfETelefoneUnicos({ cpf, telefone });

    const obj = await Cliente.create({ nome, cpf, telefone, tipo });
    return await Cliente.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, cpf, telefone, tipo } = req.body;
    const obj = await Cliente.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Cliente não encontrado!';

    await ClienteService.ensureCpfETelefoneUnicos({ cpf, telefone, ignoreId: id });

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
