import Model from "../core/abstract/Model";
import { FieldTypes } from "../core/enum/FieldTypes";

class Article extends Model {
    private static instance: Article;
    
    constructor(name: string, fields: Array<object>) {
        super(name, fields);
    }
}

export default Article;