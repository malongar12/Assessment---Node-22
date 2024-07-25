/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
  
}

/** Authorization Middleware: Requires user is logged in and is staff. */

function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
  try {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
      
    }
    else{
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Failed to authenticate token' });
        }
    
        req.userNAME = decoded.usename;
        next();
      })
    }
  } catch (error) {
    return next(error)
    
  }
} // end

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};
