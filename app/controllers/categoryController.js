const CategoryModel = require('../models/categoryModel');


module.exports = {
    async getAll(_, res, next) {
        try {
            const categories = await CategoryModel.findAll();

            if(!categories){
                return next();
            }
            
            res.json({ data: categories.map(category => category.dataValues)});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    async addCategory(req, res){
        try {
            const category = new CategoryModel(req.body);

            await category.insert();
            
            return res.json({category})

        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    async updateCategory(req, res){
        try {
            const category = await CategoryModel.findByPk(req.params.id);

            category.data = req.body;

            await category.update();

            res.status(200).json({data: category.dataValues})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    
    async deleteCategory(req, res){
        try {
            const category = await CategoryModel.findByPk(req.params.id);

            await category.delete();

            res.status(200).json({message: `Jeux supprimé`});
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}