// Gabriel

import { Model, DataTypes } from 'sequelize';

class Modelo extends Model {

  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "O nome do modelo deve ser preenchido" },
          len: { args: [1, 50], msg: "O nome deve ter entre 1 e 50 caracteres" }
        }
      },
      ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "O ano deve ser um número inteiro" },
          min: { args: [1886], msg: "Ano inválido (mínimo 1886)" },
          max: {
            args: [new Date().getFullYear() + 1],
            msg: "O ano não pode ser muito superior ao atual"
          }
        }
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "A marca deve ser preenchida" },
          len: { args: [1, 50], msg: "A marca deve ter entre 1 e 50 caracteres" }
        }
      }
    }, {
      sequelize,
      modelName: 'modelo',
      tableName: 'modelos'
    });
  }
}

export { Modelo }