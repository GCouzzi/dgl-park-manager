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
        try {
            await sequelize.sync();

            /*
            console.log("--- Iniciando inserções individuais ---");

            const m1 = await Modelo.create({ nome: 'COROLLA', ano: 2024, marca: 'TOYOTA' });
            const m2 = await Modelo.create({ nome: 'CIVIC', ano: 2023, marca: 'HONDA' });
            const m3 = await Modelo.create({ nome: 'GOL', ano: 2010, marca: 'VW' });
            const m4 = await Modelo.create({ nome: 'ONIX', ano: 2022, marca: 'CHEVROLET' });

            const u1 = await Usuario.create({ nomeUsuario: 'ADMIN', senha: '123', cpf: '12345678909', telefone: '11999999999', endereco: 'RUA A', tipoUsuario: 'ADMINISTRADOR' });
            const u2 = await Usuario.create({ nomeUsuario: 'OPERADOR1', senha: '123', cpf: '98765432100', telefone: '11888888888', endereco: 'RUA B', tipoUsuario: 'FUNCIONARIO' });
            const u3 = await Usuario.create({ nomeUsuario: 'OPERADOR2', senha: '123', cpf: '11144477735', telefone: '11777777777', endereco: 'RUA C', tipoUsuario: 'FUNCIONARIO' });
            const u4 = await Usuario.create({ nomeUsuario: 'GERENTE', senha: '123', cpf: '52998224725', telefone: '11666666666', endereco: 'RUA D', tipoUsuario: 'ADMINISTRADOR' });

            const c1 = await Cliente.create({ nome: 'JOÃO SILVA', cpf: '39053344705', telefone: '11911111111', tipo: 'MENSALISTA' });
            const c2 = await Cliente.create({ nome: 'MARIA SOUZA', cpf: '16899535009', telefone: '11922222222', tipo: 'AVULSO' });
            const c3 = await Cliente.create({ nome: 'PEDRO ALVES', cpf: '11144477735', telefone: '11933333333', tipo: 'CONVENIADO' });
            const c4 = await Cliente.create({ nome: 'ANA PAULA', cpf: '52998224725', telefone: '11944444444', tipo: 'AVULSO' });

            const v1 = await Vaga.create({ tipo: 'CARRO', status: 'LIVRE', possuiCobertura: true, preferencial: true });
            const v2 = await Vaga.create({ tipo: 'CARRO', status: 'LIVRE', possuiCobertura: false, preferencial: false });
            const v3 = await Vaga.create({ tipo: 'MOTO', status: 'LIVRE', possuiCobertura: true, preferencial: false });
            const v4 = await Vaga.create({ tipo: 'CARRO', status: 'LIVRE', possuiCobertura: true, preferencial: false });

            const v_e1 = await Veiculo.create({ placa: 'ABC1D23', cor: 'BRANCO', modeloId: m1.id });
            const v_e2 = await Veiculo.create({ placa: 'XYZ9K88', cor: 'PRETO', modeloId: m2.id });
            const v_e3 = await Veiculo.create({ placa: 'KJG4H22', cor: 'PRATA', modeloId: m3.id });
            const v_e4 = await Veiculo.create({ placa: 'OPI0M11', cor: 'AZUL', modeloId: m4.id });
            const v_e5 = await Veiculo.create({ placa: 'OHI0M29', cor: 'BRANCO', modeloId: m1.id , banido: true});
            const v_e6 = await Veiculo.create({ placa: 'ORI0N78', cor: 'BRANCO', modeloId: m4.id , banido: true, motivo: "Levantou a antena de um Kwid estacionado."});


            const e1 = await Entrada.create({ horario: new Date(), clienteId: c1.id, veiculoId: v_e1.id, vagaId: v1.id, usuarioId: u2.id });
            const e2 = await Entrada.create({ horario: new Date(), clienteId: c2.id, veiculoId: v_e2.id, vagaId: v2.id, usuarioId: u2.id });
            const e3 = await Entrada.create({ horario: new Date(), clienteId: c3.id, veiculoId: v_e3.id, vagaId: v3.id, usuarioId: u3.id });
            const e4 = await Entrada.create({ horario: new Date(), clienteId: c4.id, veiculoId: v_e4.id, vagaId: v4.id, usuarioId: u3.id });

            const ts1 = await TipoServico.create({ nome: 'LAVAGEM SIMPLES', descricao: 'LAVAGEM EXTERNA', valor: 30, descontoAtivo: 0 });
            const ts2 = await TipoServico.create({ nome: 'LAVAGEM COMPLETA', descricao: 'INTERNA E EXTERNA', valor: 60, descontoAtivo: 5 });
            const ts3 = await TipoServico.create({ nome: 'POLIMENTO', descricao: 'POLIMENTO DE PINTURA', valor: 120, descontoAtivo: 10 });
            const ts4 = await TipoServico.create({ nome: 'HIGIENIZAÇÃO', descricao: 'LIMPEZA DE BANCOS', valor: 150, descontoAtivo: 15 });

            await Despesa.create({ descricao: 'LUZ', valor: 300, vencimento: new Date(), status: 'NAO_PAGO', usuarioId: u1.id });
            await Despesa.create({ descricao: 'ÁGUA', valor: 150, vencimento: new Date(), status: 'PAGO', usuarioId: u1.id });
            await Despesa.create({ descricao: 'INTERNET', valor: 100, vencimento: new Date(), status: 'PAGO', usuarioId: u1.id });
            await Despesa.create({ descricao: 'ALUGUEL', valor: 2000, vencimento: new Date(), status: 'NAO_PAGO', usuarioId: u1.id });

            await Saida.create({ desconto: 0, tipoPagamento: 'PIX', statusPagamento: 'PAGO', entradaId: e1.id, usuarioId: u2.id });
            await Saida.create({ desconto: 0.05, tipoPagamento: 'DEBITO', statusPagamento: 'PAGO', entradaId: e2.id, usuarioId: u2.id });
            await Saida.create({ desconto: 0.10, tipoPagamento: 'CREDITO', statusPagamento: 'NAO_PAGO', entradaId: e3.id, usuarioId: u3.id });
            await Saida.create({ desconto: 0, tipoPagamento: 'DINHEIRO', statusPagamento: 'PAGO', entradaId: e4.id, usuarioId: u3.id });

            await Servico.create({ desconto: 0, dataServico: new Date(), tipoServicoId: ts1.id, usuarioId: u2.id, entradaId: e1.id });
            await Servico.create({ desconto: 2, dataServico: new Date(), tipoServicoId: ts2.id, usuarioId: u2.id, entradaId: e2.id });
            await Servico.create({ desconto: 5, dataServico: new Date(), tipoServicoId: ts3.id, usuarioId: u3.id, entradaId: e3.id });
            await Servico.create({ desconto: 0, dataServico: new Date(), tipoServicoId: ts4.id, usuarioId: u3.id, entradaId: e4.id });

            console.log("✅ Todos os registros individuais foram inseridos com sucesso!");
            */
        } catch (error) {
            console.error("❌ ERRO DE VALIDAÇÃO DETECTADO:");
            if (error.errors) {
                error.errors.forEach(err => console.log(`-> Campo: ${err.path} | Mensagem: ${err.message}`));
            } else {
                console.error(error.message);
            }
        }
    })();
}

export default sequelize;