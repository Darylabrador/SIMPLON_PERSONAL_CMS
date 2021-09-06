/** 
 * First article model
 * @author Daryl ABRADOR
 */


import Model from "../../core/abstract/Model";
import ModelInterface from "../../core/interfaces/ModelInterface";
import FieldInterface from "../../core/interfaces/FieldInterface";
import { FieldTypes } from "../../core/enum/FieldTypes";

import comment from "./Comments";

class Article extends Model implements ModelInterface {
    table: string = 'articles';
    fields: Array<FieldInterface> = [
        { field: "id", type: FieldTypes.Number },
        { field: "title", type: FieldTypes.String },
        { field: "content", type: FieldTypes.String },
    ];
}

const article = new Article('articles', [
    { field: "id", type: FieldTypes.Number },
    { field: "title", type: FieldTypes.String },
    { field: "content", type: FieldTypes.String },
]);

article.defineJoin(comment);

export default article;