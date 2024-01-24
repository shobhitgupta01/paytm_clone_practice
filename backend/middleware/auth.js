const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.starsWith('Bearer ')){
        return res.status(403)({})
    }
    
    const token = authHeader.split(" ")[1]
    try{
        const data = jwt.decode(token, JWT_SECRET);
        req.userId = data.userId;
        next();
    }
    catch(err){
        return res.status(403)({})
    }
    
}

module.exports = {
    authMiddleware
}