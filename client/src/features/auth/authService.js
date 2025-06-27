import axiosInstance from '../../api/axiosInstance';

// Login user
const login = async (data, thunkAPI) => {
  try {
    const res = await axiosInstance.post('/auth/login', data);
    return res.data;
  } catch (err) {
    const message = err.response?.data?.message || err.message;
    return thunkAPI.rejectWithValue(message);
  }
};

// Register user
const register = async (data, thunkAPI) => {
  try {
    const res = await axiosInstance.post('/auth/register', data);
    return res.data;
  } catch (err) {
    const message = err.response?.data?.message || err.message;
    return thunkAPI.rejectWithValue(message);
  }
};

// Load user 
const loadUser = async (_, thunkAPI) => {
  try {
    const res = await axiosInstance.get('/auth/me');
    return res.data;
  } catch (err) {
    const message = err.response?.data?.message || err.message;
    return thunkAPI.rejectWithValue(message);
  }
};


const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};

export default {
  login,
  register,
  loadUser,
  logout
};
