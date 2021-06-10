const GameModel = require('../models/gameModel');

module.exports = {
    async getAllGames(_, response, next){
        try {
            const games = await GameModel.findAllGamesWithCatAndTheme();

            if(!games){
                return next();
            }
            response.json({ data: games.map(game => game.dataValues)});
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    },
    async getOne(request, response, next){
        try {
            console.log(request.params.id);
            const  game = await GameModel.findOneGame(request.params.id);

            console.log(game);
            if(!game){
                return next();
            }


            response.json({ data: game});
        } catch (error) {
            console.trace(error);
            response.json({ error });
        }
    }
}