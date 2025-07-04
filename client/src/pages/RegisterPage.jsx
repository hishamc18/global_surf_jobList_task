import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import AuthAside from "@/components/AuthAside";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(form));
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
            {/* Left Side */}
            <AuthAside />

            {/* Right Side */}
            <div className="flex items-center justify-center px-6 py-12">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
                >
                    <h2 className="text-2xl font-bold text-center text-black mb-14">Register to JobSeek</h2>

                    {/* Name Field */}
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-black">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                            className="rounded-md border-black/20"
                        />
                    </div>

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
                        {loading ? "Loading..." : "Register"}
                    </Button>
                    <p onClick={() => navigate("/login")} className="cursor-pointer text-[14px]">
                        Already have an account? <span className="font-bold">Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
