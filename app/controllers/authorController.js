const AuthorModel = require('../models/authorModel');



module.exports = {
    async getAll(_, res){
        try {
            const authors = await AuthorModel.findAll();
            res.status(200).json({data: authors.dataValues});
        } catch (error) {
            console.trace(error);
            res.json({error})
        }
    },
     
    async addAuthor(req, res){
        try {
            const author = new AuthorModel(req.body);

            await author.insert();
            
            return res.json({author})

        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    async updateAuthor(req, res){
        try {
            const author = await AuthorModel.findByPk(req.params.id);

            author.data = req.body;

            await author.update();

            res.status(200).json({data: author.dataValues})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    
    async deleteAuthor(req, res, next){
        try {
            const author = await AuthorModel.findByPk(req.params.id);

            if(!author){
                return next();
            }

            await author.delete();

            res.status(200).json({message: `Auteur supprimé`});
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}