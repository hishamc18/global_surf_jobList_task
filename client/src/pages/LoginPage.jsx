import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import LoadingDots from "@/components/LoadingDots";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form));
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                    <LoadingDots />
                </div>
            )}

            {/* Left Side */}
            <div className="hidden lg:flex items-center justify-center px-12">
                <div className="max-w-xl space-y-6">
                    <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Find your dream job today</h2>

                    <p className="text-gray-600 text-lg">
                        Join thousands of professionals who have found their perfect career match through JobSeek.
                    </p>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-800">Why choose JobSeek?</h3>
                        <ul className="space-y-3 text-gray-700 text-sm">
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> Access to thousands of job opportunities
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> Personalized job recommendations
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> Direct messaging with recruiters
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-500 mr-2">✔</span> Career development resources
                            </li>
                        </ul>
                    </div>

                    {/* Highlight */}
                    <div className="mt-6">
                        <div className="bg-black text-white font-semibold text-lg py-3 px-4 rounded-2xl text-center shadow-md">
                            50,000+ <br /> <span className="text-sm font-normal">Active job listings</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center px-6 py-12">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
                >
                    <h2 className="text-3xl font-bold text-center text-black mb-14">Login to JobSeek</h2>

                    {/* Email Field */}
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-black">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            className="rounded-md border-black/20"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1">
                        <Label htmlFor="password" className="text-black">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            className="rounded-md border-black/20"
                        />
                    </div>

                    {/* Error Message */}
                    <div className="h-[16px] -mt-2">
                        <ErrorMessage message={error} />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-black text-white hover:bg-neutral-800">
                        Login
                    </Button>
                    <p onClick={() => navigate("/register")} className="cursor-pointer text-[14px]">
                        Don't have an account? <span className="font-bold">Create New</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
