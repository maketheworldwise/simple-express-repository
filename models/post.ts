import { MysqlDataSource } from '../configs/db.config';

export class PostDao {
  public async createPost(title: string, descriptions: string) {
    await MysqlDataSource.query(
      `INSERT INTO POST (title, descriptions) VALUES (?, ?);`,
      [title, descriptions]
    );
  }

  public async readPostList() {
    const data = await MysqlDataSource.query(
      `SELECT id, title, descriptions FROM POST`,
      []
    );
    return data;
  }

  public async readPost(postId: number) {
    const data = await MysqlDataSource.query(
      `SELECT id, title, descriptions FROM POST WHERE id = ?`,
      [postId]
    );
    return data;
  }

  public async updatePost(postId: number, title: string, descriptions: string) {
    await MysqlDataSource.query(
      `UPDATE POST SET title = ?, descriptions = ? WHERE id = ?`,
      [title, descriptions, postId]
    );
  }

  public async deletePost(postId: number) {
    await MysqlDataSource.query(`DELETE FROM POST WHERE id = ?`, [postId]);
  }
}
