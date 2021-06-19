const CategoryModel = require('../models/categoryModel');
const ThemeModel = require('../models/themeModel');
const AuthorModel = require('../models/authorModel');
const EditorModel = require('../models/editorModel');
const GameModel = require('../models/gameModel');


module.exports = {
    async getAllGames(_, res){
        try {
            const games = await GameModel.findAll();
    
            return res.status(200).json({data : games})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
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

    async getAllEditor(req, res){
        try {
            const editors = await EditorModel.findAll();
    
            return res.status(200).json({data : editors})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },

    async addEditors(req, res){
        try {
            const editors = new EditorModel(req.body);

            await editors.insert();
            
            return res.json({editors})

        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}