const CoreModel = require('./coreModel');


/**
 * @typedef Theme
 * @property {number} id - Identifiant unique
 * @property {string} label - Label du theme
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef ThemeInput
 * @property {string} label - Label du theme
 */

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