// Diogo

import { Model, DataTypes } from 'sequelize';

class Usuario extends Model {

  static init(sequelize) {
    super.init({
      nomeUsuario: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Nome de usuário deve ser preenchido!" },
        },
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Senha deve ser preenchida!" }
        },
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("cpf", value.replace(/\D/g, ""));
        },
        validate: {
          notNull: { msg: "O CPF não pode ser nulo!" },
          notEmpty: { msg: "O CPF não pode ser vazio!" },
          isValidCPF(value) {
            const cpf = value.replace(/\D/g, "");

            if (cpf.length !== 11) {
              throw new Error("CPF inválido!");
            }

            if (/^(\d)\1+$/.test(cpf)) {
              throw new Error("CPF inválido!");
            }

            const calcCheckDigit = (base) => {
              let sum = 0;
              for (let i = 0; i < base.length; i++) {
                sum += base[i] * (base.length + 1 - i);
              }
              const result = (sum * 10) % 11;
              return result === 10 ? 0 : result;
            };

            const base = cpf.slice(0, 9).split("").map(Number);
            const digit1 = calcCheckDigit(base);
            const digit2 = calcCheckDigit([...base, digit1]);

            if (digit1 !== Number(cpf[9]) || digit2 !== Number(cpf[10])) {
              throw new Error("CPF inválido!");
            }
          }
        }
      },
      telefone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Telefone do usuário deve ser preenchido!" },
        },
        allowNull: false
      },
      endereco: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Endereço deve ser preenchido!" }
        },
        allowNull: false
      },
      tipoUsuario: {
        type: DataTypes.ENUM("FUNCIONARIO", "ADMINISTRADOR"),
        validate: {
          isIn: {
            args: [["FUNCIONARIO", "ADMINISTRADOR"]],
            msg: "Tipo de usuário deve ser ou funcionário ou administrador."
          },
          notEmpty: { msg: "Tipo de usuário deve ser definido!" }
        },
        allowNull: false
      },
    }, { sequelize, modelName: 'usuario', tableName: 'usuarios' })
  }
}

export { Usuario };