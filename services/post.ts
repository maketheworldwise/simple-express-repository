import { PostDao } from '../models/post';

const postDao = new PostDao();

export class PostService {
  public async createPost(title: string, descriptions: string) {
    await postDao.createPost(title, descriptions);
  }

  public async readPostList() {
    const data = await postDao.readPostList();
    return data;
  }

  public async readPost(postId: number) {
    const data = await postDao.readPost(postId);
    return data;
  }

  public async updatePost(postId: number, title: string, descriptions: string) {
    await postDao.updatePost(postId, title, descriptions);
  }

  public async deletePost(postId: number) {
    await postDao.deletePost(postId);
  }
}
