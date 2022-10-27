import express from 'express';
import { PostController } from '../controllers/post';

const postRouter = express.Router();
const postController = new PostController();

postRouter.post('/', postController.createPost);
postRouter.get('/', postController.readPost);
postRouter.get('/:postId', postController.readPost);
postRouter.patch('/:postId', postController.updatePost);
postRouter.delete('/:postId', postController.deletePost);

export default postRouter;
