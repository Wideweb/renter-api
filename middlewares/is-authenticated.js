import auth from '../services/auth.service';

async function isAuthenticated(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }

    try {
        await auth.verify(token);
        next();
    } catch (e) {
        return res.json({success: false, message: 'Failed to authenticate token.'});
    }
}

export default isAuthenticated;