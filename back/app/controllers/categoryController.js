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
}