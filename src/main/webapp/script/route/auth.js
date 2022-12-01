const router = require('express').Router()
const User = require('../model/user')

//REGISTER
router.post('/register', async(req, res) => {
    try {
        const newUser = User({
            userName: req.body.username,
            userEmail: req.body.useremail,
            userPassword: req.body.userpassword,
            userAddress: req.body.useraddress
        })
        const saveUser = await newUser.save()
        res.status(201)
           .json(saveUser)
    } catch (e) {
        res.status(500)
           .json(e)
    }
})

//LOGIN
router.post('/login', async(req, res) => {
    //const { userName, userPassword} = req.body
    
    try {
        const user = await User.findOne({ userName: req.body.userName})
        if (!user) res.status(401)
                       .json({message : 'Wrong username'}) 
        
        const originalPassword = user.userPassword
        if ( originalPassword != req.body.userPassword) res.status(401)
                                                  .json({message:"Wrong password"})
        res.status(200)
           .json(user)
           .send('home.html')
    } catch (e) {
        res.status(500)
           .json(e)
    }
})

module.exports = router