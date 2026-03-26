import { Model, DataTypes } from 'sequelize';

class Usuario extends Model {

  static init(sequelize) {
    super.init({
      nomeUsuario: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome de usuário deve ser preenchido!" },
        },
        allowNull: false
      },
      senha: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Senha deve ser preenchida!" }
        },
        allowNull: false
      },
      cpf: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "CPF do usuário deve ser preenchido!" },
          is: {args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: "CPF do usuário deve seguir o padrão NNN.NNN.NNN-NN!" },
        },
        allowNull: false
      },
      telefone: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Telefone do usuário deve ser preenchido!" },
        },
        allowNull: false
      },
      endereco: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Endereço deve ser preenchido!" }
        },
        allowNull: false
      },
      tipoUsuario:{
        type: DataTypes.ENUM("FUNCIONARIO", "ADMINISTRADOR"),
        validate: {
          isIn: {
            args: ["FUNCIONARIO", "ADMINISTRADOR"],
            msg: "Tipo de usuário deve ser ou funcionário ou administrador."
          },
          notEmpty: { msg: "Tipo de usuário deve ser definido!" }
        },
        allowNull: false
      },
    }, { sequelize, modelName: 'usuario', tableName: 'usuarios' })
  }
}

export { Usuario };