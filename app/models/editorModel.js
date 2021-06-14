const CoreModel = require('./coreModel');

class EditorModel extends CoreModel {

    static fields = [
        'label'
    ];

    static tableName = 'editor';

    constructor(obj){
        super(obj);
    }

}

module.exports = EditorModel;