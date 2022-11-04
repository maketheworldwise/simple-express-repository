import http from 'http';
import 'dotenv/config';

import createApp from './app';
import { MysqlDataSource } from './configs/db.config';
import { Request, Response } from 'express';

MysqlDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized.');
  })
  .catch(err => {
    console.error('Data Source initiate failed: ', err);
  });

const app = createApp();
app.get('/ping', (_: Request, res: Response) => {
  res.status(200).json({ message: 'pong' });
});

/**
 * [POST] http://localhost:8080/post/test
 *
 * @author kevin
 * @description Post test
 *
 * @param title title
 * @param descriptions descriptions
 */
app.post('/post/test', async (req, res) => {
  const { title, descriptions } = req.body;

  await MysqlDataSource.query(
    `INSERT INTO POST(
      title,
      descriptions
    ) VALUE (?, ?);`,
    [title, descriptions]
  );
  res.status(201).json({ message: 'post test created' });
});

const server = http.createServer(app);
const serverPort = process.env.SERVER_PORT;

server.listen(serverPort, () => {
  console.log('Server is running on port:', serverPort);
});
