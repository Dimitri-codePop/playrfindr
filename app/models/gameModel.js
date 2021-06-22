const client = require ('../client');
const CoreModel = require('./coreModel');

/**
 * @typedef Game
 * @property {number} id - Identifiant unique
 * @property {string} label - Label de la Game
 * @property  {number} duration - Durée du jeu
 * @property  {number} player_min - Nombre de joueur minimum
 * @property  {number} player_max - Nombre de joueur maximum
 * @property  {number} age_min - Age minimum du jeu
 * @property  {string} picture - Url de la photo du jeu
 * @property {string} created_at - Date de création de l'auteur (date ISO 8601)
 * @property {string} updated_at - Date de mise à jour de l'auteur (date ISO 8601)
 * @property {string} deleted_at - Date de suppression de l'auteur (date ISO 8601)
 */

/**
 * @typedef GameInput
 * @property {string} label - Label de la Game
 * @property  {number} duration - Durée du jeu
 * @property  {number} player_min - Nombre de joueur minimum
 * @property  {number} player_max - Nombre de joueur maximum
 * @property  {number} age_min - Age minimum du jeu
 * @property  {string} picture - Url de la photo du jeu
 */


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

    static async findAllGamesWithCatAndTheme () {
         
        const result = await client.query(`SELECT  "game".*,
        ARRAY_AGG(distinct "category"."label") as category_all,
        ARRAY_AGG(distinct "theme"."label") as theme_all
        FROM "game" 
        JOIN "game_has_theme" ON "game"."id" = "game_has_theme"."game_id"
        JOIN "theme" ON "theme"."id" = "game_has_theme"."theme_id"
        JOIN "game_has_category" ON"game"."id" = "game_has_category"."game_id"
        JOIN "category" ON "category"."id" = "game_has_category"."category_id"
        group by "game"."id";`) 

        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }
        
        return instanceList;
    }

    static async findOneGame(id){
        const result = await client.query(`
		SELECT  DISTINCT "game".*,
        ARRAY_AGG(distinct "category"."label") as category_all,
        ARRAY_AGG(distinct "theme"."label") as theme_all,
		ARRAY_AGG( distinct "author"."firstname") as firstname,
		ARRAY_AGG( distinct "author"."lastname") as lastname,
		"editor"."label" as editor
        FROM "game" 
        JOIN "game_has_theme" ON "game"."id" = "game_has_theme"."game_id"
        JOIN "theme" ON "theme"."id" = "game_has_theme"."game_id"
        JOIN "game_has_category" ON"game"."id" = "game_has_category"."game_id"
        JOIN "category" ON "category"."id" = "game_has_category"."category_id"
		JOIN "author_has_game" ON "game"."id" = "author_has_game"."game_id"
		JOIN "author" ON "author"."id" = "author_has_game"."author_id"
		JOIN "editor" ON "game"."editor_id" = "editor"."id"
        WHERE "game"."id" = $1
        GROUP BY "game"."id", "editor"."label";`, [id]);
        return result.rows[0];
    }


    static async findAllGamesWithCatAndThemeAndAuthor(){
        const result = await client.query(`
		SELECT  DISTINCT "game".*,
        ARRAY_AGG(distinct "category"."label") as category_all,
        ARRAY_AGG(distinct "theme"."label") as theme_all,
		ARRAY_AGG( distinct "author"."firstname") as firstname,
		ARRAY_AGG( distinct "author"."lastname") as lastname,
		"editor"."label" as editor
        FROM "game" 
        JOIN "game_has_theme" ON "game"."id" = "game_has_theme"."game_id"
        JOIN "theme" ON "theme"."id" = "game_has_theme"."game_id"
        JOIN "game_has_category" ON"game"."id" = "game_has_category"."game_id"
        JOIN "category" ON "category"."id" = "game_has_category"."category_id"
		JOIN "author_has_game" ON "game"."id" = "author_has_game"."game_id"
		JOIN "author" ON "author"."id" = "author_has_game"."author_id"
		JOIN "editor" ON "game"."editor_id" = "editor"."id"
        GROUP BY "game"."id", "editor"."label";`);
        return result.rows;
    }

    static async searchGame(body){
        const result = client.query(`SELECT * FROM "game" WHERE "label" LIKE $1`, [body + '%']);
        return (await result).rows;
    }

}

module.exports = GameModel;