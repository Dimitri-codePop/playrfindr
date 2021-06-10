const bcrypt = require('bcrypt');
const jwt = require ('../services/jwt');
const UserModel = require ('../models/userModel');


module.exports = {
    async register (req, res, next) {
        try {
            const firstname = req.body.firstname;
            const lastname = req.body.lastname;
            const email = req.body.email;
            const password = req.body.password;
            const birthdate = req.body.birthdate;
            const is_admin = req.body.is_admin;
            const department_id = req.body.department_id;

            if(firstname === null || lastname === null || email === null || password === null || birthdate === null ) {
                return res.statut(400).json({error : "Arguments missing"});
            }

            if (req.body.password !== req.body.passwordConfirm) {
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
                is_admin,
                department_id})

                await user.insert();
        } catch (error) {
            console.trace(error);

            if (error.code === '23505') {
                error = `This resource already exists.`;
            } else {
                error = `A server error occured, please retry later.`;
            }
            response.json({ error });
        }
    },

    async login (req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;

        if(email === null || password === null){
            return res.status(400).json({error: "Arguments missing"})
        }
        const user = await UserModel.findOne(email);

        

        const validPwd = await bcrypt.compare(password, user.password);

        if (!validPwd) {
            return res.json({
          error: "Ce n'est pas le bon mot de passe."
            });
        }

        if(validPwd){
            return res.status(200).json({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                birthdate: user.birthdate,
                picture: user.picture,
                department: user.department_id,
                token: jwt.generateTokenForUser(user)
            })
        }

        } catch (error) {
            console.trace(error);
            console.log(error);   
            response.json({ error });
        }
        
    }
};
