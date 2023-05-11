const jwt = require("jsonwebtoken");
require("dotenv").config();

//this only works if you use cookie-parser
const checkCookie = (req) => {
    console.log('inside checkCookie')
    console.log('all our cookies are: ', req.cookies)
    return req.cookies['jwt']
}

//middleware for verifying the JWT
const verifyAccessToken = (req, res, next) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(' ')[1]
        console.log('auth bearer token')
        console.log({ token })
    }
    else {
        token = req.headers["x-access-token"] || checkCookie(req) || null
        //logs
        console.log('our token is from x-access-token header, a cookie or null')
        console.log({ token })
    }

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log({ decoded })
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyAccessToken;