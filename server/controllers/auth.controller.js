import asyncHandler from '../middlewares/asyncHandler.js';
import * as authService from '../services/auth.service.js';

// register user
export const registerUser = asyncHandler(async (req, res) => {
  const data = await authService.register(req.body);
  res.cookie('token', data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'None',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });
  res.status(201).json(data.user);
});


export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
  });
  return res.status(200).json({ message: "Logged out successfully" });
};


// login user
export const loginUser = asyncHandler(async (req, res) => {
  const data = await authService.login(req.body);
  res.cookie('token', data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == 'production',
    sameSite: 'None',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });
  res.status(200).json(data.user);
});




