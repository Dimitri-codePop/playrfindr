const GameModel = require('../models/gameModel');

module.exports = {
    async getAllGames(_, response, next){
        try {
            const games = await GameModel.findAll();

            if(!games){
                return next();
            }
            response.json({ data: games.map(game => game.dataValues)});
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
}