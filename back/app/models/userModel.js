const CoreModel = require('./coreModel');

class UserModel extends CoreModel {

    static fields = [
        'firstname',
        'lastname',
        'email',
        'password',
        'picture',
        'birthdate',
        'department_id'
    ];

    static tableName = 'user';

    constructor(obj){
        super(obj);
    }

}

module.exports = UserModel;