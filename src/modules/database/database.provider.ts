import { Sequelize } from 'sequelize-typescript';
import { Market } from '../market.entity';

const config = require('../../config.json');

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: config.connection.driver,
        host: config.connection.host,
        port: config.connection.port,
        username: config.connection.username,
        password: config.connection.password,
        database: config.connection.database
      });
      sequelize.addModels([Market]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
