const CoreModel = require('./coreModel');

/**
 * @typedef Department
 * @property {number} id - Identifiant unique
 * @property {string} label - Label de la category
 * @property {number} number - Numéro du département
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef DepartmentInput
 * @property {string} label - Label du département.
 * @property {number} number - Numéro du département
 */

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