const CoreModel = require('./coreModel');


/**
 * @typedef Editor
 * @property {number} id - Identifiant unique
 * @property {string} label - Label de l'éditeur
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef EditorInput
 * @property {string} label - Label de l'éditeur
 */


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