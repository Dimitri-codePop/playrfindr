const EditorModel = require('../models/editorModel');


module.exports = {
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
    },
    async updateEditor(req, res){
        try {
            const editor = await EditorModel.findByPk(req.params.id);

            editor.data = req.body;

            await editor.update();

            res.status(200).json({data: editor.dataValues})
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },
    
    async deleteEditor(req, res){
        try {
            const editor = await EditorModel.findByPk(req.params.id);

            await editor.delete();

            res.status(200).json({message: `Editeur supprimé`});
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    }
}