
// Configuração do banco de dados no ambiente de teste
// export const databaseConfig = {
//   dialect: 'sqlite',
//   storage: 'database.sqlite',
//   define: {
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true
//   }
// };

/*
// Configuração do banco de dados no ambiente de desenvolvimento
export const databaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/

export const databaseConfig = {
  dialect: 'postgres',
  host: 'dpg-d8djgqho3t8c73ekfn5g-a.oregon-postgres.render.com',
  username: 'dgl_park_manager_user',
  password: 'iLHBwch2jsNlMToi4pMf6WyoJ45BWgSo',
  database: 'dgl_park_manager',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};
