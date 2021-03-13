import { ConnectionOptions } from 'typeorm';
require('dotenv').config();

export const databaseOptions: ConnectionOptions =
  process.env.NODE_ENV === 'production'
    ? {
        name: 'default',
        type: 'postgres',
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: false,
        entities: ['dist/entities/**/*.*'],
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }
    : {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'sheetcollab',
        synchronize: true,
        logging: false,
        entities: ['src/entities/**/*.*'],
      };
