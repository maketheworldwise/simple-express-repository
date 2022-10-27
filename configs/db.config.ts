import { DataSource } from 'typeorm';
import 'dotenv/config';

const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

MysqlDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized.');
  })
  .catch(err => {
    console.error('Data Source initiate failed: ', err);
  });

export { MysqlDataSource };
