import asyncHandler from '../middlewares/asyncHandler.js';
import * as jobService from '../services/job.service.js';

export const createJob = asyncHandler(async (req, res) => {
  const job = await jobService.createJob(req.body, req.user.id);
  res.status(201).json(job);
});

export const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await jobService.getAllJobs();
  res.json(jobs);
});

export const getJobById = asyncHandler(async (req, res) => {
  const job = await jobService.getJobById(req.params.id);
  res.json(job);
});

export const deleteJob = asyncHandler(async (req, res) => {
  await jobService.deleteJob(req.params.id, req.user.id);
  res.status(200).json({ message: 'Job deleted successfully' });
});