const GameModel = require('../models/gameModel');

module.exports = {
    async getAll(_, res, next) {
        try {
            const games = await GameModel.findAll();

            if(!games){
                return next();
            }
            
            res.json({ data: games.map(game => game.dataValues)});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    async getAllGamesAndThemesAndCat(_, res, next){
        try {
            const games = await GameModel.findAllGamesWithCatAndTheme();

            if(!games){
                return next();
            }
            
            res.json({ data: games.map(game => game.dataValues)});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async getOne(req, res, next){
        try {
            const  game = await GameModel.findOneGame(req.params.id);
            if(!game){
                return next();
            }

            res.status(200).json({ data: game});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    }
}