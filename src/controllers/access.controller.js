const { signIn } = require('../services/access.services');

class AccessController {
    signIn = async (req, res, next) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email or password is missing',
            });
        }

        const user = await signIn(req, res, next);
        
        return user ? res.status(200).json({
            message: 'Sign in successfully',
            metadata: {
                email: req.user.email,
                role: req.user.role,
            },
        }) : res.status(400).json({'message': 'Invalid email or password'});
    }

    signOut = async (req, res, next) => {
        req.logout();
        res.redirect('/');
    }
};

module.exports = new AccessController();