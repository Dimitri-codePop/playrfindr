const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '0sjaocifjzpldze63kjd96feucnzqndhc00kfjdel63c4sd887d42d'

module.exports = {
    generateTokenForUser (userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.is_admin
        },
        JWT_SIGN_SECRET, {
            expiresIn: '1h'
        })
    }
}