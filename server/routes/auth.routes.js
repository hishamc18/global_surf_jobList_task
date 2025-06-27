import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/auth.controller.js';
import protect from '../middlewares/auth.Middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post("/logout", logoutUser);
router.get('/me', protect, (req, res) => {
  res.status(200).json(req.user);
});


export default router;