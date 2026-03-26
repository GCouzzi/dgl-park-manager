import Sequelize from 'sequelize';
import { databaseConfig } from "./database-config.js";


import { Veiculo } from '../models/Veiculo.js';
import { Despesa } from '../models/Despesa.js';
import { Modelo } from '../models/Modelo.js';
import { Saida } from '../models/Saida.js';

const sequelize = new Sequelize(databaseConfig);

Veiculo.init(sequelize);
Despesa.init(sequelize);
Modelo.init(sequelize);
Saida.init(sequelize);

Veiculo.associate(sequelize.models);
/* Modelo.associate(sequelize.models);
Despesa.associate(sequelize.models);
Saida.associate(sequelize.models);
 */
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

        const veiculos = await Veiculo.bulkCreate([
            { placa: 'ABC1D23', cor: 'BRANCO', modeloId: modelos[0].id },
            { placa: 'XYZ9K88', cor: 'PRETO', modeloId: modelos[1].id },
            { placa: 'KJG4H22', cor: 'PRATA', modeloId: modelos[2].id },
            { placa: 'OPI0M11', cor: 'AZUL', modeloId: modelos[3].id }
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