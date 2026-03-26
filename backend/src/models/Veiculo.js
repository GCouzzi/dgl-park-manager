import { Model, DataTypes } from 'sequelize';

class Veiculo extends Model {

  static init(sequelize) {
    super.init({
      placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "A placa deve ser preenchida" }
        }
      },
      cor: {
        type: DataTypes.ENUM(
          'BRANCO', 'PRETO', 'PRATA', 'CINZA', 'VERMELHO', 'AZUL',
          'LARANJA', 'AMARELO', 'VERDE', 'ROXO', 'ROSA', 'MARROM',
          'BEGE', 'BRONZE'
        ),
        allowNull: false,
        validate: {
          notEmpty: { msg: "A cor deve ser selecionada" },
          isIn: {
            args: [[
              'BRANCO', 'PRETO', 'PRATA', 'CINZA', 'VERMELHO', 'AZUL',
              'LARANJA', 'AMARELO', 'VERDE', 'ROXO', 'ROSA', 'MARROM',
              'BEGE', 'BRONZE'
            ]],
            msg: "Selecione uma cor válida da lista (deve ser em MAIÚSCULO)"
          }
        }
      },
      banido: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      motivo: {
        type: DataTypes.STRING,
        validate: {
          len: { args: [1, 100], msg: "O motivo deve ter entre 1 e 100 caracteres" }
        }
      }
    }, {
      sequelize,
      modelName: 'veiculo',
      tableName: 'veiculos'
    });
  }

  static associate(models) {
    this.belongsTo(models.modelo, {
      as: 'modelo',
      foreignKey: {
        name: 'modeloId',
        allowNull: false,
        validate: {
          notNull: { msg: "O modelo do veículo deve ser informado!" }
        }
      }
    });
  }
}

export { Veiculo }