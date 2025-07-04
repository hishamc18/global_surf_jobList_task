import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardJob from "./pages/DashboardJob";
import { loadUser } from "./features/auth/authSlice";
import NotFoundPage from "./components/NotFoundPage";
import LoadingDots from "./components/LoadingDots";

const AppRoutes = () => {
    const { user, loadingUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    if (loadingUser) {
        return (
            <div>
                <LoadingDots />
            </div>
        );
    }

    return (
        <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={!user ? <Navigate to="/login" /> : <DashboardJob />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
