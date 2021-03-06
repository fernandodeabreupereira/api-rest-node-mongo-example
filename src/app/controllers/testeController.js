const express = require('express');
const authMiddleware = require('../middlewares/auth/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

module.exports = app => app.use('/teste', router);