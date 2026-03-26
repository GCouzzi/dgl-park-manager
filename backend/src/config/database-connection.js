import Sequelize from 'sequelize';
import { databaseConfig } from "./database-config.js";

import { Veiculo } from '../models/Veiculo.js';
import { Despesa } from '../models/Despesa.js';
import { Modelo } from '../models/Modelo.js';
import { Saida } from '../models/Saida.js';
import { Entrada } from '../models/Entrada.js';
import { Cliente } from '../models/Cliente.js';
import { Vaga } from '../models/Vaga.js';
import { TipoServico } from '../models/TipoServico.js';
import { Usuario } from '../models/Usuario.js';
import { Servico } from '../models/Servico.js';

const sequelize = new Sequelize(databaseConfig);

Veiculo.init(sequelize);
Despesa.init(sequelize);
Modelo.init(sequelize);
Saida.init(sequelize);
Entrada.init(sequelize);
Cliente.init(sequelize);
Vaga.init(sequelize);
Servico.init(sequelize);
TipoServico.init(sequelize);
Usuario.init(sequelize)

Veiculo.associate(sequelize.models);
Entrada.associate(sequelize.models);
Despesa.associate(sequelize.models);
Saida.associate(sequelize.models);
Servico.associate(sequelize.models);

databaseInserts();

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true });

        const modelos = await Modelo.bulkCreate([
            { nome: 'COROLLA', ano: 2024, marca: 'TOYOTA' },
            { nome: 'CIVIC', ano: 2023, marca: 'HONDA' },
            { nome: 'GOL', ano: 2010, marca: 'VW' },
            { nome: 'ONIX', ano: 2022, marca: 'CHEVROLET' }
        ]);

        const usuarios = await Usuario.bulkCreate([
            { nomeUsuario: 'ADMIN', senha: '123', cpf: '111.111.111-11', telefone: '11999999999', endereco: 'RUA A', tipoUsuario: 'ADMINISTRADOR' },
            { nomeUsuario: 'OPERADOR1', senha: '123', cpf: '222.222.222-22', telefone: '11888888888', endereco: 'RUA B', tipoUsuario: 'FUNCIONARIO' },
            { nomeUsuario: 'OPERADOR2', senha: '123', cpf: '333.333.333-33', telefone: '11777777777', endereco: 'RUA C', tipoUsuario: 'FUNCIONARIO' },
            { nomeUsuario: 'GERENTE', senha: '123', cpf: '444.444.444-44', telefone: '11666666666', endereco: 'RUA D', tipoUsuario: 'ADMINISTRADOR' }
        ]);

        const clientes = await Cliente.bulkCreate([
            { nome: 'JOÃO SILVA', cpf: '555.555.555-55', telefone: '11911111111', tipo: 'MENSALISTA' },
            { nome: 'MARIA SOUZA', cpf: '666.666.666-66', telefone: '11922222222', tipo: 'AVULSO' },
            { nome: 'PEDRO ALVES', cpf: '777.777.777-77', telefone: '11933333333', tipo: 'CONVENIADO' },
            { nome: 'ANA PAULA', cpf: '888.888.888-88', telefone: '11944444444', tipo: 'AVULSO' }
        ]);

        const vagas = await Vaga.bulkCreate([
            { tipo: 'CARRO', status: 'LIVRE', possuiCobertura: true, preferencial: true },
            { tipo: 'CARRO', status: 'OCUPADA', possuiCobertura: false, preferencial: false },
            { tipo: 'MOTO', status: 'LIVRE', possuiCobertura: true, preferencial: false },
            { tipo: 'CARRO', status: 'LIVRE', possuiCobertura: true, preferencial: false }
        ]);

        const veiculos = await Veiculo.bulkCreate([
            { placa: 'ABC1D23', cor: 'BRANCO', modeloId: modelos[0].id },
            { placa: 'XYZ9K88', cor: 'PRETO', modeloId: modelos[1].id },
            { placa: 'KJG4H22', cor: 'PRATA', modeloId: modelos[2].id },
            { placa: 'OPI0M11', cor: 'AZUL', modeloId: modelos[3].id }
        ]);

        const entradas = await Entrada.bulkCreate([
            { horario: new Date(), clienteId: clientes[0].id, veiculoId: veiculos[0].id, vagaId: vagas[0].id },
            { horario: new Date(), clienteId: clientes[1].id, veiculoId: veiculos[1].id, vagaId: vagas[1].id },
            { horario: new Date(), clienteId: clientes[2].id, veiculoId: veiculos[2].id, vagaId: vagas[2].id },
            { horario: new Date(), clienteId: clientes[3].id, veiculoId: veiculos[3].id, vagaId: vagas[3].id }
        ]);

        const tiposServico = await TipoServico.bulkCreate([
            { nome: 'LAVAGEM SIMPLES', descricao: 'LAVAGEM EXTERNA', valor: 30, descontoAtivo: 0 },
            { nome: 'LAVAGEM COMPLETA', descricao: 'INTERNA E EXTERNA', valor: 60, descontoAtivo: 5 },
            { nome: 'POLIMENTO', descricao: 'POLIMENTO DE PINTURA', valor: 120, descontoAtivo: 10 },
            { nome: 'HIGIENIZAÇÃO', descricao: 'LIMPEZA DE BANCOS', valor: 150, descontoAtivo: 15 }
        ]);

        await Despesa.bulkCreate([
            { descricao: 'LUZ', valor: 300, vencimento: new Date(), status: 'NAO_PAGO', usuarioId: usuarios[0].id },
            { descricao: 'ÁGUA', valor: 150, vencimento: new Date(), status: 'PAGO', usuarioId: usuarios[0].id },
            { descricao: 'INTERNET', valor: 100, vencimento: new Date(), status: 'PAGO', usuarioId: usuarios[0].id },
            { descricao: 'ALUGUEL', valor: 2000, vencimento: new Date(), status: 'NAO_PAGO', usuarioId: usuarios[0].id }
        ]);

        await Saida.bulkCreate([
            { desconto: 0, tipoPagamento: 'PIX', statusPagamento: 'PAGO', entradaId: entradas[0].id, usuarioId: usuarios[1].id },
            { desconto: 5, tipoPagamento: 'DEBITO', statusPagamento: 'PAGO', entradaId: entradas[1].id, usuarioId: usuarios[1].id },
            { desconto: 10, tipoPagamento: 'CREDITO', statusPagamento: 'NAO_PAGO', entradaId: entradas[2].id, usuarioId: usuarios[2].id },
            { desconto: 0, tipoPagamento: 'DINHEIRO', statusPagamento: 'PAGO', entradaId: entradas[3].id, usuarioId: usuarios[2].id }
        ]);

        await Servico.bulkCreate([
            { desconto: 0, dataServico: new Date(), tipoServicoId: tiposServico[0].id, usuarioId: usuarios[1].id, entradaId: entradas[0].id },
            { desconto: 2, dataServico: new Date(), tipoServicoId: tiposServico[1].id, usuarioId: usuarios[1].id, entradaId: entradas[1].id },
            { desconto: 5, dataServico: new Date(), tipoServicoId: tiposServico[2].id, usuarioId: usuarios[2].id, entradaId: entradas[2].id },
            { desconto: 0, dataServico: new Date(), tipoServicoId: tiposServico[3].id, usuarioId: usuarios[2].id, entradaId: entradas[3].id }
        ]);
    })();
}

export default sequelize;