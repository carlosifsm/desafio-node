// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:"lista_de_compras",
      user: "postgres",
      password: "1213"
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/database/migrations'
    }
  }

};
