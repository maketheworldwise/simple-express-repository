import createApp from '../app';
import { MysqlDataSource } from '../configs/db.config';
import request from 'supertest';

describe('Post API', () => {
  let app: any;

  beforeAll(async () => {
    app = createApp();
    await MysqlDataSource.initialize();
  });

  afterAll(async () => {
    await MysqlDataSource.query(`TRUNCATE POST`);
    await MysqlDataSource.destroy();
  });

  /**
   * 테스트는 순차적으로 이루어짐
   * - 1 번째 테스트: POST
   * - 2 번째 테스트: POST한 데이터 목록 조회
   * - 3 번째 테스트: POST한 데이터 업데이트
   * - 4 번째 테스트: POST한 데이터 조회
   * - 5 번째 테스트: 데이터 업데이트
   */

  test('[POST] http://localhost:8080/post', async () => {
    await request(app)
      .post('/post')
      .send({
        title: 'title',
        descriptions: 'descriptions',
      })
      .expect(201)
      .expect({ message: 'createPost' });
  });

  test('[GET] http://localhost:8080/post', async () => {
    await request(app)
      .get('/post')
      .expect(200)
      .expect({
        data: [
          {
            id: '1',
            title: 'title',
            descriptions: 'descriptions',
          },
        ],
      });
  });

  test('[PATCH] http://localhost:8080/post/postId', async () => {
    await request(app)
      .patch('/post/1')
      .send({
        title: 'title update',
        descriptions: 'descriptions update',
      })
      .expect(200)
      .expect({ message: 'updatePost' });
  });

  test('[GET] http://localhost:8080/post/postId', async () => {
    await request(app)
      .get('/post/1')
      .expect(200)
      .expect({
        data: [
          {
            id: '1',
            title: 'title update',
            descriptions: 'descriptions update',
          },
        ],
      });
  });

  test('[DELETE] http://localhost:8080/post/postId', async () => {
    await request(app)
      .delete('/post/1')
      .expect(200)
      .expect({ message: 'deletePost' });
  });
});
