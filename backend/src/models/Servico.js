import { Model, DataTypes } from 'sequelize';

class Servico extends Model {

  static init(sequelize) {
    super.init({
      desconto: { 
        type: DataTypes.DOUBLE, 
        validate: {
          min: {args: [0], msg: "Desconto deve ser maior ou igual à 0"}
        },
        allowNull: true
      },
      dataServico: { 
        type: DataTypes.NOW,
        allowNull: false
      }
    }, { sequelize, modelName: 'servico', tableName: 'servicos' })
  }

  static associate(models) {
    this.belongsTo(models.tipo_servico, {as: 'tipoServico', foreignKey: {name: 'tipoServicoId' , allowNull: false, validate: {notNull: {msg: 'Tipo de serviço deve ser preenchido!'}}}});
    this.belongsTo(models.usuario, {as: 'prestador', foreignKey: {name: 'usuarioId' , allowNull: false, validate: {notNull: {msg: 'Usuario deve ser definido!'}}}});
    this.belongsTo(models.usuario, {as: 'entrada', foreignKey: {name: 'entradaId' , allowNull: false, validate: {notNull: {msg: 'Entrada deve ser definido!'}}}});
  }
  
}

export { Servico };