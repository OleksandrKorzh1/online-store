const jwt = require("jsonwebtoken");
const config = require("../config");
const generateJwt = (user) => {
    return jwt.sign(
        {id: user.id, email: user.email, role:user.role},
        config.secretKey,
        {expiresIn: '12h'})
}
module.exports = generateJwt;