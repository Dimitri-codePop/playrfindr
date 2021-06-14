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
        'department_id',
        'is_admin',
        'theme_id',
        'category_id'
    ];

    static tableName = 'user';

    constructor(obj){
        super(obj);
    }

    static async findOne(email){
        const result = await client.query(`SELECT "user".*, "department"."label", "department"."number" FROM "user" join department on "user"."department_id" = "department"."id" WHERE email = $1`, [email]);
        return result.rows[0];
    }

    static async findOneProfil(id){
        const result = await client.query(`
        SELECT * FROM "user_profile" WHERE id = $1;`, [id]);

        return result.rows[0];
    }

    static async findCollection(id){
        const result = await client.query(`
        SELECT * FROM "user_collection" WHERE id = $1;`, [id]);
        return result.rows[0];
    }

    static async insertCollection(user_id, game_id){
        console.log(user_id, game_id);
       const result =  await client.query(`INSERT INTO "user_has_game" ("user_id", "game_id") VALUES ($1, $2) RETURNING *`, [user_id, game_id]);
       return result.rows[0];
    }


    static async deleteGames(user_id, game_id) {
        
        const result = await client.query(`delete from "user_has_game" where "user_id" = $1 and "game_id" = $2`, [user_id, game_id]);
        return result.rows[0];
    }
}

module.exports = UserModel;