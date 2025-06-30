import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import jobRoutes from './routes/job.routes.js';
import errorHandler from './middlewares/error.middleware.js';

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = process.env.FRONTEND_URLS.split(',');
app.use(cors({
  origin: allowedOrigins, // ← just pass the array!
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/job', jobRoutes);

app.get("/home", (req,res)=>{
    res.json("hi")
})

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));