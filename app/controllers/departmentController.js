const DepartmentModel = require('../models/departmentModel');


module.exports = {
    async getAll(_, res, next){
        try {
            const department = await DepartmentModel.findAll();
            if(!department){
                return next();
            }
            return res.json({data: department})
        } catch (error) {
            console.trace(error);
            res.json({error})
        }
        
    }
}