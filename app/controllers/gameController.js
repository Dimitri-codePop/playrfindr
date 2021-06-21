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
    },
    async addGames(req, res){
        try {
            const games = new GameModel(req.body);

            await games.insert();
            
            return res.json({games})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },

    async updateGames(req, res, next){
        try {
            const game = await GameModel.findByPk(req.params.id);

            if(!game){
                return next();
            }

            game.data = req.body;

            await game.update();

            res.status(200).json({data: game.dataValues})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    
    async deleteGames(req, res){
        try {
            const game = await GameModel.findByPk(req.params.id);

            await game.delete();

            res.status(200).json({message: `Jeux supprimé`})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    async getAllGamesAndThemesAndCatAndAuthor(_, res, next){
        try {
            const games = await GameModel.findAllGamesWithCatAndThemeAndAuthor();

            if(!games){
                return next();
            }
            
            res.json({ data: games});
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

    async searchGame(req, res, next){
        try {
            const games = await GameModel.searchGame(req.params.name);

            if(!games){
                return next();
            }

            return res.json({data: games})
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    }
}