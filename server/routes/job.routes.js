import express from 'express';
import {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob
} from '../controllers/job.controller.js';
import protect from '../middlewares/auth.Middleware.js';

const router = express.Router();

router.post('/create', protect, createJob);
router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.delete('/delete/:id', protect, deleteJob);

export default router;