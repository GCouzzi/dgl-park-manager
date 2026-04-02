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
          notEmpty: { msg: "O nome não pode ser vazio!" }
        }
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O CPF não pode ser nulo!" },
          notEmpty: { msg: "O CPF não pode ser vazio!" }
        }
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O telefone não pode ser nulo!" },
          notEmpty: { msg: "O telefone não pode ser vazio!" }
        }
      },
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