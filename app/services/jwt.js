const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = process.env.TOKEN_SECRET;

module.exports = {
    generateTokenForUser (userData){
        return jwt.sign(
            {
            userId: userData.id,
            isAdmin: userData.is_admin
        },
        JWT_SIGN_SECRET, 
        {
            expiresIn: '1h'
        })
    }
}