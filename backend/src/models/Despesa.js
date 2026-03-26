import { Model, DataTypes } from 'sequelize';

class Despesa extends Model {

  static init(sequelize) {
    super.init({
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Descrição da despesa deve ser preenchida" },
          len: { args: [1, 100], msg: "Descrição deve ter entre 1 e 100 letras!" }
        }
      },
      valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "O valor deve ser preenchido" },
          min: { args: [1], msg: "O valor deve ser maior que zero" }
        }
      },
      vencimento: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: { msg: "Data de vencimento inválida" },
          notEmpty: { msg: "A data de vencimento deve ser preenchida" }
        }
      },
      status: {
        type: DataTypes.ENUM('PAGO', 'NAO_PAGO'),
        allowNull: false,
        defaultValue: 'NAO_PAGO',
        validate: {
          isIn: {
            args: [['PAGO', 'NAO_PAGO']],
            msg: "O status deve ser 'pago' ou 'não pago'"
          }
        }
      }
    }, {
      sequelize,
      modelName: 'despesa',
      tableName: 'despesas'
    });
  }

  /* static associate(models) {
    this.belongsTo(models.usuario, {
      as: 'usuario',
      foreignKey: {
        name: 'usuarioId',
        allowNull: false,
        validate: {
          notNull: { msg: "O usuário responsável pela despesa deve ser informado" }
        }
      }
    });
  } */
}

export { Despesa }