import { Model, DataTypes } from 'sequelize';

class Entrada extends Model {

  static init(sequelize) {
    super.init({
      horario: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "O horário não pode ser nulo!" },
          notEmpty: { msg: "O horário não pode ser vazio!" }
        }
      }
    }, { sequelize, modelName: 'entrada', tableName: 'entradas' })
  }

  static associate(models) {
    this.belongsTo(models.vaga, { foreignKey: 'vagaId', as: 'vaga' });
    this.belongsTo(models.cliente, { foreignKey: 'clienteId', as: 'cliente' });
    this.belongsTo(models.veiculo, { foreignKey: 'veiculoId', as: 'veiculo' });
  }
  
}

export { Entrada };