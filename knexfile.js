// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database:"lista_de_compras",
      user: "root",
      password: "MY$2003#sql"
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations'
    }
  }

};
