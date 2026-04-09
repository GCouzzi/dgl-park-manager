// Gabriel

import { Model, DataTypes } from 'sequelize';

class Veiculo extends Model {

  static init(sequelize) {
    super.init({
      placa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set(value) {
          if (value) {
            const normalizada = value.toUpperCase();
            this.setDataValue('placa', normalizada);
          }
        },
        validate: {
          notEmpty: { msg: "A placa deve ser preenchida" },
          isValidPlaca(value) {
            const placaAntiga = /^[A-Z]{3}-?\d{4}$/;
            const placaMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;
            if (!placaAntiga.test(value) && !placaMercosul.test(value)) {
              throw new Error("Placa inválida (use padrão antigo ou Mercosul)");
            }
          }
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