const User = require('../model/user');
const bcrypt = require('bcrypt');

class UserController {
    /**
     * @swagger
     * components:
     *  schemas:
     *      User:
     *          type: Object
     *          require:
     *              -   userName
     *              -   email   
     *          properties:
     *              userName:
     *                  type: String
     *                  desciption: User name 
     *              email:
     *                  type: String
     *                  desciption: User'email to login
     *              password:
     *                  type: String
     *                  desciption: User'password to login
     *              isAdmin:
     *                  type: Boolean
     *                  desciption: Check if this user is the admin or not
     *              address:
     *                  type: String
     *                  desciption: User's address to login
     *              status:
     *                  type: String
     *                  desciption: Check if the account has been active or not
     *              confirmationCode:
     *                  type: String
     *                  desciption: User code to active their account
     */
    


    //Get all
    /**
    * @swagger
    * /user:
    *  get:
    *     summary: Returns the list of all user
    *     tags: [Users]
    *     responses:
    *       200:
    *         description: The list of user
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/User'
     */
    async getAllUser(req,res) {
        try {
            const users = await User.find({})
            res.status(200)
               .json(users)
        } catch (e) {
            res.status(500)
               .json(e)
        }
    }    

    //Create
    /**
     * @swagger
     * /user/:
     *   post:
     *     summary: Create new user
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: New user successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       500:
     *         description: Some server error
     */

    async createUser(req,res) {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password,salt)
        try {
            const newUser = User ({
                userName: req.body.userName,
                email: req.body.email,
                password: hashPassword,
                address: req.body.address
            })
            const saveUser = await newUser.save()
            res.status(200)
               .json(saveUser)
        } catch (e) {
            
        }
    }

    //Delete
    async deleteUser(req,res) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200)
               .json({'message' : `User ${id}: has been deleted !`})
        } catch (e) {
            res.status(500)
               .json(e)
        }
    };
}

module.exports = new UserController