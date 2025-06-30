import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
    user: null,
    loading: false,
    loadingUser: true,
    error: null,
};

export const login = createAsyncThunk('auth/login', authService.login);
export const register = createAsyncThunk('auth/register', authService.register);
export const loadUser = createAsyncThunk('auth/loadUser', authService.loadUser);
export const logout = createAsyncThunk('auth/logout', authService.logout);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loadUser.pending, (state) => {
                state.loadingUser = true;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loadingUser = false;
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.user = null;
                state.loadingUser = false;
                state.error = action.payload;
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            });
    },
});

export default authSlice.reducer;