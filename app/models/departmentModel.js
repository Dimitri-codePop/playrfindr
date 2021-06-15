const CoreModel = require('./coreModel');

class DepartmentModel extends CoreModel {

    static fields = [
        'number',
        'label'
    ];

    static tableName = 'department';

    constructor(obj){
        super(obj);
    }

}

module.exports = DepartmentModel;