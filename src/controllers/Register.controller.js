import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constants.js";
import bcrypt from 'bcrypt';


const Register =async (req,res) => {


    const errors=validationResult(req);
    if(errors.isEmpty()){
        const {name, username, password, email}=req.body;

        const salt= await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        password = hashPassword;

        // enregistrer en bd 

    }
    res.json(jsonGenerate(StatusCode.VALIDATION_ERROR,"Validation error", errors.mapped()));
}



export default Register;