// Lucas
import { Model, DataTypes } from 'sequelize';

class Cliente extends Model {

  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O nome não pode ser nulo!" },
          notEmpty: { msg: "O nome não pode ser vazio!" },
          len: { args: [1, 50], msg: "O nome deve ter entre 1 e 50 caracteres" },
        }
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
        allowNull: false,
        validate: {
          notNull: { msg: "O telefone não pode ser nulo!" },
          notEmpty: { msg: "O telefone não pode ser vazio!" },
          is: {
            args: /^\d{10,11}$/,
            msg: "Telefone deve ter 10 ou 11 dígitos numéricos!"
          }
        }
      }
      ,
      tipo: {
        type: DataTypes.ENUM('AVULSO', 'MENSALISTA', 'CONVENIADO'),
        allowNull: false,
        validate: {
          notNull: { msg: "O tipo não pode ser nulo!" },
          notEmpty: { msg: "O tipo não pode ser vazio!" },
          isIn: {
            args: [['AVULSO', 'MENSALISTA', 'CONVENIADO']],
            msg: "O tipo deve ser avulso, mensalista ou conveniado!"
          }
        }
      }
    }, { sequelize, modelName: 'cliente', tableName: 'clientes' })
  }

}

export { Cliente };