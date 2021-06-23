const ThemeModel = require('../models/themeModel');


module.exports = {
    async getAll(_, res, next) {
        try {
            const themes = await ThemeModel.findAll();

            if(!themes){
                return next();
            }
            
            res.json({ data: themes.map(theme => theme.dataValues)});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    async addTheme(req, res){
        try {
            const theme = new ThemeModel(req.body);

            await theme.insert();
            
            return res.json({data: theme.dataValues})

        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    async updateTheme(req, res){
        try {
            const theme = await ThemeModel.findByPk(req.params.id);

            theme.data = req.body;

            await theme.update();

            res.status(200).json({data: theme.dataValues})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    
    async deleteTheme(req, res){
        try {
            const theme = await ThemeModel.findByPk(req.params.id);

            await theme.delete();

            res.status(200).json({message: `Theme supprimé`})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}
