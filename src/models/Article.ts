import Model from "../core/abstract/Model";
import { FieldTypes } from "../core/enum/FieldTypes";

const Article = new Model('articles', [
    { field: "id", type: FieldTypes.Number },
    { field: "title", type: FieldTypes.String },
    { field: "content", type: FieldTypes.String },
]);

export default Article;