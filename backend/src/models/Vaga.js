import { Model, DataTypes } from 'sequelize';

class Vaga extends Model {

  static init(sequelize) {
    super.init({
        tipo: {
        type: DataTypes.ENUM('CARRO', 'MOTO'),
        allowNull: false,
        validate: {
          notNull: { msg: "O tipo não pode ser nulo!" },
          notEmpty: { msg: "O tipo não pode ser vazio!" },
          isIn: {
            args: [['CARRO', 'MOTO']],
            msg: "O tipo deve ser carro ou moto!"
          }
        }
      },
      status: {
        type: DataTypes.ENUM('LIVRE', 'OCUPADA', 'MANUTENCAO'),
        allowNull: false,
        validate: {
          notNull: { msg: "O status não pode ser nulo!" },
          notEmpty: { msg: "O status não pode ser vazio!" },
          isIn: {
            args: [['LIVRE', 'OCUPADA', 'MANUTENCAO']],
            msg: "O status deve ser livre, ocupada ou manutenção!"
          }
        }
      },
      possuiCobertura: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "O campo coberta não pode ser nulo!" }
        }
      },
      preferencial: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: { msg: "O campo preferencial não pode ser nulo!" },
        }
      }
    }, { sequelize, modelName: 'vaga', tableName: 'vagas' })
  }

}

export { Vaga };