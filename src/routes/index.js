const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`Hello Wolrd`);
})

router.get('/testUser', (req, res) => {
    if (req.isAuthenticated()) {
        return res.send('Hello ' + req.user.name);
    }

    res.send('Not logged in')
});

router.use('/access', require('./access/index'));

module.exports = router;