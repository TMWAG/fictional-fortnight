const jwt = require('jsonwebtoken');

module.exports = function (roleId) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Не авторизован' });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.roleId !== roleId) {
        return res.status(403).json({ message: 'Не достаточно прав' });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Не авторизован' });
    }
  };
};
