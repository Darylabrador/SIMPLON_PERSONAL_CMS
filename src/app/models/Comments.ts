/** 
 * Comments model
 * @author Daryl ABRADOR
 */


import Model from "../../core/abstract/Model";
import ModelInterface from "../../core/interfaces/ModelInterface";
import FieldInterface from "../../core/interfaces/FieldInterface";
import { FieldTypes } from "../../core/enum/FieldTypes";

class Comment extends Model implements ModelInterface {
    table: string = 'comments';
    fields: Array<FieldInterface> = [
        { field: "id", type: FieldTypes.Number },
        { field: "content", type: FieldTypes.String },
        { field: "article_id", type: FieldTypes.Number },
    ];
}

const comment = new Comment('comments', [
    { field: "id", type: FieldTypes.Number },
    { field: "content", type: FieldTypes.String },
    { field: "article_id", type: FieldTypes.Number },
]);

export default comment;