const { User } = require('../models');
const { decode } = require('../helpers/bcryptjs');
const { sign } = require('../helpers/jwt');

class UserController {
    static async register(req, res, next) {
        try {
            const { username, email, password } = req.body;

            const newUser = await User.create({ username, email, password })
            res.status(201).json(newUser)
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const currentUser = await User.findOne({ where: { email }})
            if (!currentUser) {
                throw {
                    name: 'authentication',
                    message: 'Wrong email/password'
                }
            }

            const isPasswordValid = decode(password, currentUser.password);
            if (!isPasswordValid) {
                throw {
                    name: 'authentication',
                    message: 'Wrong email/password'
                }
            }

            const access_token = sign({ id: currentUser.id, username: currentUser.username, email})
            res.status(200).json({
                id: currentUser.id,
                access_token,
                username: currentUser.username,
                email
            })
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController