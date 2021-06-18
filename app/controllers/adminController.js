const CategoryModel = require('../models/categoryModel');
const ThemeModel = require('../models/themeModel');
const GameModel = require('../models/gameModel');


module.exports = {
    async getAll(_, res){
        try {
            const games = await GameModel.findAll();
    
            return res.status(200).json({data : games})
        } catch (error) {
            console.log(error);
        }
       
    },

    async addGame(req, res){

    }
}