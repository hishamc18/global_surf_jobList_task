import asyncHandler from '../middlewares/asyncHandler.js';
import * as authService from '../services/auth.service.js';

// register user
export const registerUser = asyncHandler(async (req, res) => {
  const data = await authService.register(req.body);
  const tokenExpire = new Date();
  tokenExpire.setTime(tokenExpire.getTime() + 7 * 24 * 60 * 60 * 1000)
  res.cookie('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: tokenExpire,
    path: "/",
  });
  res.status(201).json(data.user);
});


export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",

  });
  return res.status(200).json({ message: "Logged out successfully" });
};


// login user
export const loginUser = asyncHandler(async (req, res) => {
  const data = await authService.login(req.body);
  const tokenExpire = new Date();
  tokenExpire.setTime(tokenExpire.getTime() + 7 * 24 * 60 * 60 * 1000)
  res.cookie('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: tokenExpire,
    path: "/",
  });
  res.status(200).json(data.user);
});




