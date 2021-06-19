const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports = function (req, res, next) {
    try {
        const token = req.header("Authorization");

        if(!token){
            return res.status(403).json({error: 'Accès non authoriser'});
        }
        const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    
        if(verify.isAdmin ===  false || verify.isAdmin === null){
            return res.json({error: `Vous n'avez pas les droits`});
        }
        req.user = verify;
        next();
    } catch (error) {
        console.trace(error);
        res.status(403).json({error: 'Token non valide'})
    }
   
}