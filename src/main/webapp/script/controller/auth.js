const joi = require('joi');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../middlewares/transporter');
const crpt = require('crypto');

const registerValidator = (data) => {
    const rule = joi.object({
        userName: joi.string().min(6).max(255).required(),
        email: joi.string().min(6).max(255).required().email(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
        address: joi.string().required()
    })
    return rule.validate(data)
}

class AuthController{
    
    //Register
    async register(req,res) {
        try{
            const {error} = registerValidator(req.body) 
            if (error) res.status(422)
                        .send(error.details[0].message)
            
            const checkEmailExist = await User.findOne({email: req.body.email})
            if (checkEmailExist) res.status(422)
                                    .send('Email existed !')
            
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(req.body.password,salt)
            const verifiedCode = crpt.randomInt(100000,999999)
            const newUser = User({
                    userName: req.body.userName,
                    email: req.body.email,
                    password: hashPassword,
                    address: req.body.address,
                    confirmationCode: verifiedCode
            })
            transporter(req.body.email, verifiedCode)
            const saveUser = await newUser.save((err) =>{
                if(err) return console.log(err)
            })    
            res.status(201)
               .json(saveUser)
        } catch (e) {
           res.status(500)
        }
    } 

    //Resend verified code
    async resendCode(req,res) {
        const verifiedCode = crpt.randomInt(100000,999999)
        const user = await User.findByIdAndUpdate(req.params.id,{confirmationCode:verifiedCode})
        res.status(201)
           .json('New code have been updated')
    }

    //Verified mail
    async verifiedMail(req,res) {
        const checkCode = await User.findByIdAndUpdate(req.params.id,{status:'Active'})
        if (!checkCode) res.status(404)
                           .send('Your code is not correct !')
        res.status(201)
           .json(checkCode)
    }

    //Login
    async login(req,res) {
        const checkEmail = await User.findOne({email: req.body.email})
        if (!checkEmail) res.status(422)
                            .send('Your email is not correct !')
                            
        const checkPassword = await bcrypt.compare(req.body.password, checkEmail.password)
        if (!checkPassword) res.status(422)
                               .send('Your password is not correct !')

        if (checkEmail.status == 'Pending') res.status(422) 
                                               .send('Please active your account first !')
        const token = jwt.sign({_id: checkEmail._id},process.env.TOKEN_SECRET, {expiresIn: 60*60*24})
        res.header('auth-token', token)
           .json({message:'You have login',token: token})
    }

    //Forget password
    async forgetPassword(req,res) {

    }
}

module.exports = new AuthController