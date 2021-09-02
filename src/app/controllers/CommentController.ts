/** 
 * Article controller
 * That's controller return only data that will be transform as json thanks to response class
 */

import Request from "../../core/server/Request";
import Viewer from "../../core/templating/Viewer";
import Comment from "../models/Comments";

class CommentController {
    public static async getComments() {
        try {
            const comments = await Comment.findAll();
            return comments;
        } catch (error) {
            console.log('error in comments (api)', error)
        }
    }

    public static async getSingleComment(request: Request) {
        try {
            const { data } = request;
            const id = data.params;
            const comments = await Comment.find(id)
            return comments;
        } catch (error) {
            console.log('error in single comment (api)', error)
        }
    }

    public static async postComment(request: any) {
        try {
            const { content, article_id } = request.data.body;
            const createdComment = await Comment.create({ content, article_id });
            return { id: createdComment.insertId, content }
        } catch (error) {
            console.log('error in post comment (api)', error)
        }
    }

    public static async putComment(request: Request) {
        try {
            const { data } = request;
            const id = data.params;
            const { content, article_id } = data.body;
            await Comment.update(id, { content, article_id });
            return { message: 'comment was updated' }
        } catch (error) {
            console.log('Error in put comment (api)', error)
        }

    }

    public static async deleteComment(request: Request) {
        try {
            const { data } = request;
            const id = data.params;
            await Comment.delete(id);
            return { message: 'comment was deleted' }
        } catch (error) {
            console.log('error in delete article (api)', error)
        }
    }
}

export default CommentController;