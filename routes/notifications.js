import express from 'express';
import isAuthenticated from '../middlewares/is-authenticated';

const router = express.Router();

router.post('/', isAuthenticated, function(req, res) {
    const token = req.body.token;
});

module.exports = router;
