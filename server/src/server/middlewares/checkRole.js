const jwt = require('jsonwebtoken')
const config = require('../../config')
module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                res.status(401).json({message: "Not authorized "})
            }
            const decoded = jwt.verify(token, config.secretKey);
            if(decoded.role!==role){
                res.status(403).json({message: "Not allowed "})
            }
            req.user=decoded;
            next()

        } catch (e) {
            res.status(401).json({message: "Not authorized "})
        }
    }
}