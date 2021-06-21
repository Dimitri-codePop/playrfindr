const CoreModel = require('./coreModel');

/**
 * @typedef Category
 * @property {number} id - Identifiant unique
 * @property {string} label - Label de la category
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef CategoryInput
 * @property {string} label - Label de la category
 */

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