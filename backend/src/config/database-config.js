
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
  host: 'dpg-d8usk8favr4c73fn9n1g-a.oregon-postgres.render.com',
  username: 'dgl_park_manager_user',
  password: '0YgJJdC1OVfBk7X6gtfaRaz10fSgScCY',
  database: 'dgl_park_manager_ncj1',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};
