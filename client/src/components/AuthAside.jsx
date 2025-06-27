// components/AuthAside.jsx

import React from "react";

const AuthAside = () => {
    return (
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

                <div className="mt-6">
                    <div className="bg-black text-white font-semibold text-lg py-3 px-4 rounded-2xl text-center shadow-md">
                        50,000+ <br />
                        <span className="text-sm font-normal">Active job listings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthAside;
