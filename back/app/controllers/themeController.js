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
    }
}
