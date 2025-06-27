import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import CustomError from './customError.js';

const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(new CustomError('Not authorized, no token', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    return next(new CustomError('Not authorized, token failed', 401));
  }
};

export default protect;
