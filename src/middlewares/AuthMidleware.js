import { JWT_TOKEN_SECRET, StatusCode } from "../utils/constants.js";
import { jsonGenerate } from "../utils/helpers.js";
import Jwt from 'jsonwebtoken';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const AuthMidleware = (req,res,next) => {
    if(req.headers["auth"] === undefined){
        return res.json(jsonGenerate(StatusCode.AUTH_ERROR,"Acces Denied"))
    }

    const token = req.headers["auth"];

    try {
        const decodeed = Jwt.verify(token,JWT_TOKEN_SECRET);
        console.log(decodeed);

        req.userId = decodeed.userId;

        return next();

    } catch (error) {
        return res.json(
            jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Invalid Token")
        );
    }

};

export default AuthMidleware;