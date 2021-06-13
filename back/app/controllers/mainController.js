const GameModel = require('../models/gameModel');

module.exports = {
    async getAllRandom(_, response, next){
        try {
            const games = await GameModel.findAllRandom();

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