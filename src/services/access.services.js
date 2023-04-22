const { User } = require('../models/user.model');
const passport = require('../config/config.passport');

class AccessService {
    static signIn = async (req, res, next) => {
        const { email, password } = req.body;
        return new Promise(async (resolve, reject) => {
            const user = new User({
                email,
                password
            })

            req.logIn(user, (err) => {
                if (err) {
                    console.error(err);
                    return reject(err);
                }

                passport.authenticate('local')(req, res, () => {
                    return resolve(user);
                });
            });
        });
    };
}

module.exports = AccessService;