const CoreModel = require('./coreModel');

class CategoryModel extends CoreModel {

    static fields = [
        'label'
    ];

    static tableName = 'category';

    constructor(obj){
        super(obj);
    }

}

module.exports = CategoryModel;