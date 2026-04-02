// Diogo

import { Model, DataTypes } from 'sequelize';

class TipoServico extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "nome do tipo de serviço deve ser preenchido!" },
          len: { args: [1, 100], msg: "Nome do tipo de serviço deve ter entre 1 e 100 letras!" }
        },
        allowNull: false
      },
      descricao: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Descriçao deve ser preenchida!" },
          len: { args: [1, 150], msg: "Nome do tipo de serviço deve ter entre 1 e 150 letras!" }
        },
        allowNull: false
      },
      valor: { 
        type: DataTypes.INTEGER, 
        validate: {
          min: 0
        },
        allowNull: false
      },
      descontoAtivo: { 
        type: DataTypes.DOUBLE, 
        validate: {
            min: 0
        },
        allowNull: true
      }
    }, { sequelize, modelName: 'tipoServico', tableName: 'tiposServico' })
  }
}

export { TipoServico };