import Sequelize from 'sequelize';
import { databaseConfig } from "./database-config.js";


import { Veiculo } from '../models/Veiculo.js';
import { Despesa } from '../models/Despesa.js';
import { Modelo } from '../models/Modelo.js';
import { Saida } from '../models/Saida.js';
import { Entrada } from '../models/Entrada.js';
import { Cliente } from '../models/Cliente.js';
import { Vaga } from '../models/Vaga.js';

const sequelize = new Sequelize(databaseConfig);

Veiculo.init(sequelize);
Despesa.init(sequelize);
Modelo.init(sequelize);
Saida.init(sequelize);
Entrada.init(sequelize);
Cliente.init(sequelize);
Vaga.init(sequelize)

Veiculo.associate(sequelize.models);
Entrada.associate(sequelize.models);
// Despesa.associate(sequelize.models);
// Saida.associate(sequelize.models);

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

        const clientes = await Cliente.bulkCreate([
            { nome: 'JOÃO SILVA', cpf: '111.111.111-11', telefone: '11999999999', tipo: 'MENSALISTA' },
            { nome: 'MARIA SOUZA', cpf: '222.222.222-22', telefone: '11888888888', tipo: 'AVULSO' },
            { nome: 'PEDRO SANTOS', cpf: '333.333.333-33', telefone: '11777777777', tipo: 'CONVENIADO' },
            { nome: 'ANA OLIVEIRA', cpf: '444.444.444-44', telefone: '11666666666', tipo: 'AVULSO' }
        ]);

        const vagas = await Vaga.bulkCreate([
            { tipo: 'CARRO', status: 'OCUPADA', possuiCobertura: true, preferencial: true },
            { tipo: 'CARRO', status: 'OCUPADA', possuiCobertura: false, preferencial: false },
            { tipo: 'MOTO', status: 'OCUPADA', possuiCobertura: true, preferencial: false },
            { tipo: 'CARRO', status: 'OCUPADA', possuiCobertura: true, preferencial: false }
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

        /* const despesas = await Despesa.bulkCreate([
            { descricao: 'CONTA DE LUZ', valor: 450, vencimento: '2026-04-10', status: 'NÃO PAGO', usuarioId: 1 },
            { descricao: 'ALUGUEL', valor: 2500, vencimento: '2026-04-05', status: 'PAGO', usuarioId: 1 },
            { descricao: 'INTERNET', valor: 120, vencimento: '2026-04-15', status: 'NÃO PAGO', usuarioId: 1 },
            { descricao: 'LIMPEZA', valor: 300, vencimento: '2026-04-20', status: 'NÃO PAGO', usuarioId: 1 }
        ]); */

    })();
}

export default sequelize;