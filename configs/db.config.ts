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

export { MysqlDataSource };
