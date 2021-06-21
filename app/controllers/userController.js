const bcrypt = require('bcrypt');
const jwt = require ('../services/jwt');
const UserModel = require ('../models/userModel');
const { getAll } = require('./gameController');
const { search } = require('../routers/apiRouter');


module.exports = {
    async register (req, res) {
        try {

            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const password = req.body.password;
            const birthdate = req.body.birthdate;
            const department_id = req.body.department_id;
            const theme_id = req.body.theme_id;
            const category_id = req.body.category_id;
            const is_admin = req.body.is_admin;
            
            if(firstname === null || lastname === null || email === null || password === null || birthdate === null || theme_id === null || category_id === null) {
                return res.statut(400).json({error : "Arguments missing"});
            }

            if(password !== req.body.passwordConfirm) {
                return res.json({
                  error: "La confirmation du mot de passe ne correspond pas."
                });
              }

              const salt = await bcrypt.genSalt(10);
              const encryptedPassword = await bcrypt.hash(req.body.password, salt);
              
              const user = new UserModel({
                firstname,
                lastname,
                email,
                password: encryptedPassword,
                birthdate,
                department_id,
                theme_id,
                category_id,
                is_admin});
                
                await user.insert();
                
                return res.json({data: user})
        } catch (error) {
            console.trace(error);

            if (error.code == '23505') {
                error = `This resource already exists.`;
            } else {
                error = `A server error occured, please retry later.`;
            }
            res.json({ error });
        }
    },

    async login (req, res) {
        try {
            let isLogged = false;
            const email = req.body.email;
            const password = req.body.password;

            if(email == null || password == null){
            return res.status(400).json({error: "Arguments missing"})
            }

            const user = await UserModel.findOne(email);
            
            if(!user){
            
                return res.status(400).json({error : 'This resource doesn"t exists.'});
            }

            const validPwd = await bcrypt.compare(password, user.password);


            if (!validPwd) {
                return res.status(400).json({
                    error: "Ce n'est pas le bon mot de passe."
                });
            }
  

            if(validPwd){
                isLogged = true;

                res.status(200).json({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                birthdate: user.birthdate,
                picture: user.picture,
                department_number: user.number,
                department_label: user.label,
                token: jwt.generateTokenForUser(user),
                isLogged
            });
        }
        } catch (error) {
            console.trace(error);
                error = `A server error occured, please retry later.`;
                res.json({ error });
        }
        
    },
    async getOneProfil(req, res, next){
        try {   
            const user = await UserModel.findOneProfil(req.params.id);
            let userGame = await UserModel.findOneProfilGame(req.params.id);

            if(!user){
                return next();
            }
         
            if(userGame === undefined){
                userGame = [];
            }

            return res.status(200).json({ 
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                birthdate: user.birthdate,
                picture: user.picture,
                game: user.game,
                theme: user.theme,
                category: user.category,
                department: user.department,
                game: userGame.label
            })
        } catch (error) {
            console.trace(error);
            error = `A server error occured, please retry later.`;
            res.json({ error });
        }
    },

    async updateProfil(req, res, next) {
        try {
            const user = await UserModel.findByPk(req.user.userId);
            
            if (!user) {
                return next();
            }

            if (req.body.password) {
                const validPwd = await bcrypt.compare(req.body.password, user.dataValues.password);
                if(validPwd === true) {
                    res.status(400).json({error: `Same Password`})
                }
                
                if(req.body.password !== req.body.passwordConfirm){
                    return res.status(400).json({
                    error: "Ce n'est pas le bon mot de passe."
                    });
                        }
                const salt = await bcrypt.genSalt(10);
                const encryptedPassword = await bcrypt.hash(req.body.password, salt); 
                user.dataValues.password = encryptedPassword

                
                await user.update();
                return res.json({data: user})
            }
        
            user.data = req.body;
           
            await user.update();
            
            res.json({ data: user });
        } catch (error) {
            console.trace(error);
            if(error.code == '23503'){
                error = 'Department not found'
            } else{
                error = `A server error occured, please retry later.`;
            }

            res.json({ error });
        }
    },
    async deleteProfil(req, res, next){
        try {
            
            const user = await UserModel.findByPk(req.user.userId);

            if(!user){
                return next();
            }

            await user.delete();

            return res.json({data: user});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async getOneCollection(req, res, next){
        try {
            const user = await UserModel.findCollection(req.user.userId);
            
            if(!user){
                return res.json({error: 'Votre collection est vide'});
            }
            
            return res.json({data: user});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    
    },

    async addGames(req, res){
        try {
            const user = await UserModel.insertCollection(req.user.userId, req.params.game_id);
            return res.json({user, message:'Votre jeu a bien été ajouté '});

        } catch (error) {
        
            console.trace(error.code);

            if (error.code == '23505') {
                
                error = `Ce jeu est deja dans votre collection`;
            } else {
                error = `A server error occured, please retry later.`;
            }
            res.json({ error });
            res.json({ error });
        }
        
    },
    async deleteGames(req, res){
        try {
            const user = await UserModel.deleteGames(req.user.userId, req.params.game_id);
            return res.json({message: 'Jeux enlevé', user})
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async getAll(_, res, next){
        try {
            const users = await UserModel.findAllUser();
            console.log(users);
            res.json({ data: users.map(user => user)});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },
    async deleteProfilAdmin(req, res, next){
        try {
            
            const user = await UserModel.findByPk(req.params.id);
            if(!user){
                return next();
            }

            await user.delete();

            return res.json({message: `User  delete`});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    },

    async searchUser(req, res, next){
        try {
            const users = await UserModel.searchUser(req.params.name);

            if(!users){
                return next();
            }

            return res.json({data: users});
        } catch (error) {
            console.trace(error);
            res.json({ error });
        }
    }
};
