const CoreModel = require('./coreModel');


/**
 * @typedef Author
 * @property {number} id - Identifiant unique
 * @property {string} firstname - Prénom de l'auteur
 * @property {string} lastname - Nom de famille de l'auteur
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef AuthorInput
 * @property {string} firstname - Prénom de l'auteur
 * @property {string} lastname - Nom de famille de l'auteur
 */

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