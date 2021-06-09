const CoreModel = require('./coreModel');

class GameModel extends CoreModel {

    static fields = [
        'label',
        'duration',
        'player_min',
        'player_max',
        'age_min',
        'picture',
        'year',
        'describe',
        'editor_id'
    ];

    static tableName = 'game';

    constructor(obj){
        super(obj);
    }

}

module.exports = GameModel;