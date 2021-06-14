const CoreModel = require('./coreModel');

class AuthorModel extends CoreModel {

    static fields = [
        'firstname',
        'lastname'
    ];

    static tableName = 'author';

    constructor(obj){
        super(obj);
    }
    
    get fullname(){
        this.dataValues.firstname + ' ' + this.dataValues.lastname;
    }

}

module.exports = AuthorModel;