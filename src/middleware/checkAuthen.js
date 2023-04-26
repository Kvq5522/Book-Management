'use strict'

const checkAuthen = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/access/signin');
}

module.exports = checkAuthen;