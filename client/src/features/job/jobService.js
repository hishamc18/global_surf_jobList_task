import axiosInstance from '../../api/axiosInstance';

const createJob = async (data, thunkAPI) => {
    try {
        const res = await axiosInstance.post("/job/create", data);
        return res.data;
    } catch (err) {
        const message = err.response?.data?.message || err.message;
        return thunkAPI.rejectWithValue(message);
    }
};

const getAllJobs = async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/job');
        return response.data;
    } catch (err) {
        const message = err.response?.data?.message || err.message;
        return thunkAPI.rejectWithValue(message);
    }
};

const deleteJob = async (id, thunkAPI) => {
    try {
        const response = await axiosInstance.delete(`/job/delete/${id}`);
        return id;
    } catch (err) {
        const message = err.response?.data?.message || err.message;
        return thunkAPI.rejectWithValue(message);
    }
};

export default {
    getAllJobs,
    deleteJob,
    createJob
};
