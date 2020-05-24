module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'root'
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/migrations`
    }
    
  },
};
