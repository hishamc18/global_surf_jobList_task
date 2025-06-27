import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobService from './jobService';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  success: null
};

export const fetchJobs = createAsyncThunk(
  'jobs/fetchAll',
  (arg, thunkAPI) => jobService.getAllJobs(arg, thunkAPI)
);

export const removeJob = createAsyncThunk(
  'jobs/delete',
  (id, thunkAPI) => jobService.deleteJob(id, thunkAPI)
);

export const createJob = createAsyncThunk(
  'jobs/create',
  (data, thunkAPI) => jobService.createJob(data, thunkAPI)
);

const jobSlice = createSlice({
  name: 'job',
  initialState,
    reducers: {
    resetJobState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.jobs.push(action.payload); 
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job._id !== action.payload);
      });
  },
});

export const { resetJobState } = jobSlice.actions;
export default jobSlice.reducer;