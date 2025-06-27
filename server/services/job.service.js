import Job from '../models/job.model.js';
import CustomError from '../middlewares/customError.js';

export const createJob = async (jobData, userId) => {
  return await Job.create({ ...jobData, user: userId });
};

export const getAllJobs = async () => {
  return await Job.find().populate('user', 'name email');
};

export const getJobById = async (id) => {
  const job = await Job.findById(id);
  if (!job) throw new CustomError('Job not found', 404);
  return job;
};

export const deleteJob = async (id, userId) => {
  const job = await Job.findById(id);
  if (!job) throw new CustomError('Job not found', 404);
  if (job.user.toString() !== userId) throw new CustomError('Unauthorized', 403);

  await job.deleteOne();
};
