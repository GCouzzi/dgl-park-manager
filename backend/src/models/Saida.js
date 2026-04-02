// Gabriel

import { Model, DataTypes } from 'sequelize';

class Saida extends Model {
  static init(sequelize) {
    super.init({
      desconto: {
        type: DataTypes.DOUBLE,
        defaultValue: 0.0,
        validate: {
          min: { args: [0], msg: "O desconto não pode ser negativo" }
        }
      },
      dataSaida: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      tipoPagamento: {
        type: DataTypes.ENUM('PIX', 'DEBITO', 'CREDITO', 'DINHEIRO'),
        allowNull: false,
        validate: {
          isIn: {
            args: [['PIX', 'DEBITO', 'CREDITO', 'DINHEIRO']],
            msg: "Selecione um tipo de pagamento válido"
          }
        }
      },
      observacoes: {
        type: DataTypes.STRING,
        validate: {
          len: { args: [1, 100], msg: "As observacoes devem ter entre 1 e 100 caracteres" }
        }
      },
      statusPagamento: {
        type: DataTypes.ENUM('PAGO', 'NAO_PAGO'),
        allowNull: false,
        defaultValue: 'NAO_PAGO',
        validate: {
          isIn: {
            args: [['PAGO', 'NAO_PAGO']],
            msg: "O status deve ser pago ou não pago'"
          }
        }
      }
    }, {
      sequelize,
      modelName: 'saida',
      tableName: 'saidas'
    });
  }

  static associate(models) {
    this.belongsTo(models.entrada, {
      as: 'entrada',
      foreignKey: {
        name: 'entradaId',
        allowNull: false,
        validate: {
          notNull: { msg: "A saída deve estar vinculada a uma entrada de veículo!" }
        }
      }
    });
    this.belongsTo(models.usuario, {
      as: 'usuario',
      foreignKey: {
        name: 'usuarioId',
        allowNull: false,
        validate: {
          notNull: { msg: "O usuário responsável pela saída deve ser informado!" }
        }
      }
    });
  }
}

export { Saida };