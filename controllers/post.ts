import { Request, Response } from 'express';
import { PostService } from '../services/post';

const postService = new PostService();

export class PostController {
  /**
   * [POST] http://localhost:8080/post/test
   *
   * @author kevin
   * @description Create post
   *
   * @param title title
   * @param descriptions descriptions
   */
  public async createPost(req: Request, res: Response) {
    const { title, descriptions } = req.body;

    try {
      await postService.createPost(title, descriptions);
      return res.status(201).json({ message: 'createPost' });
    } catch (err) {
      return res.status(400).json({ message: 'createPost error' });
    }
  }

  /**
   * [GET] http://localhost:8080/post/:postId
   *
   * @author kevin
   * @description Read post
   *
   * @param postId postId
   */
  public async readPost(req: Request, res: Response) {
    const { postId } = req.params;

    try {
      const data = postId
        ? await postService.readPost(Number(postId))
        : await postService.readPostList();
      return res.status(200).json({ data: data });
    } catch (err) {
      return res.status(400).json({ message: 'readPost error' });
    }
  }

  /**
   * [PATCH] http://localhost:8080/post/:postId
   *
   * @author kevin
   * @description Update post
   *
   * @param postId postId
   * @param title title
   * @param descriptions descriptions
   */
  public async updatePost(req: Request, res: Response) {
    const { postId } = req.params;
    const { title, descriptions } = req.body;

    try {
      await postService.updatePost(Number(postId), title, descriptions);
      return res.status(200).json({ message: 'updatePost' });
    } catch (err) {
      return res.status(400).json({ message: 'updatePost error' });
    }
  }

  /**
   * [DELETE] http://localhost:8080/post/:postId
   *
   * @author kevin
   * @description Delete post
   *
   * @param postId postId
   */
  public async deletePost(req: Request, res: Response) {
    const { postId } = req.params;

    try {
      await postService.deletePost(Number(postId));
      return res.status(200).json({ message: 'deletePost' });
    } catch (err) {
      return res.status(400).json({ message: 'deletePost error' });
    }
  }
}
