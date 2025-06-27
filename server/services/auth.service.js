import User from '../models/user.model.js';
import CustomError from '../middlewares/customError.js';
import { generateToken } from '../utils/jwt.js'

export const register = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new CustomError('Email already registered', 400);

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    return { user: sanitizeUser(user), token };
};

export const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        throw new CustomError('Invalid email or password', 401);
    }
    const token = generateToken(user._id);
    return { user: sanitizeUser(user), token };
};


const sanitizeUser = (user) => {
    const { password, ...rest } = user.toObject();
    return rest;
};