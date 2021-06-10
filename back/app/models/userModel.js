const client = require('../client');
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

    static async findOne(email){
        const result = await client.query(`SELECT * FROM "user" WHERE email = $1`, [email]);
        return result.rows[0];
    }

}

module.exports = UserModel;