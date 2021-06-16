const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports = function (req, res, next) {
    try {
        const token = req.header("Authorization");
        console.log(token);
        if(!token){
            return res.status(403).json({error: 'Accès non authoriser'});
        }
        const verify = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verify;
        next();
    } catch (error) {
        console.trace(error);
        res.status(403).json({error: 'Token non valide'})
    }
   
}
