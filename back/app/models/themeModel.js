const CoreModel = require('./coreModel');

class ThemeModel extends CoreModel {

    static fields = [
        'label'
    ];

    static tableName = 'theme';

    constructor(obj){
        super(obj);
    }

}

module.exports = ThemeModel;