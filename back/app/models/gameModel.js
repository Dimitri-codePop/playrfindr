const client = require ('../client');
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

    static async findAllRandom () {
        const result = await client.query(`
            SELECT 
                game.*
            FROM ${this.tableName}
            ORDER BY random()
            LIMIT 5
         `);

        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }
        return instanceList;
    }
}

module.exports = GameModel;