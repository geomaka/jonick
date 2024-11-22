import React, { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.username) {
            newErrors.username = "Username is required.";
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Form submitted successfully!");
        }
    };
    return (
        <>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Create an Account
                    </h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-2">{errors.username}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-500 font-semibold">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp