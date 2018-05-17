const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
  try {
    // console.log(req.headers.authorization);
    // console.log(req.params.mentorId);
    const token = req.headers.authorization;
    const payload = JWT.verify(token, JWT_SECRET);
    // console.log('payload.sub: ', payload.sub);
    req.userData = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
}
// auth student work, but how to restrict access antar student?