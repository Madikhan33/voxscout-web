"use client";

import { Mail, Phone, Edit, FileText, Upload } from "lucide-react";
import { useState } from "react";

export default function Profile() {
    const [notifications, setNotifications] = useState({
        messages: true,
        applications: true,
        recommendations: false,
    });

    const [privacy, setPrivacy] = useState({
        profileVisible: true,
    });

    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative shrink-0">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmx9M3X3QDpJTIiBUqNa3HH4zc68YMka7JVPCPSpI7q1b__0DonJWrBKr3MGSRnHy4PbiZA_bhGy0AKpYfmj3fxXCsE2VGlENN4-8WBAef7hCDbO9plOwrc7_ix_XKoNTl4rCkswJpXCL6laqSAWWDEDEBXNOPpGbf73Z-pMifBWtmsELmEbWXOPWiFldo4R6rUKYOx4dLj1fhy-0zX-9-TyFHiT9ZpIaUpptc-RgNM-StvGE2WIjCa3T1eEQc-1tsd1s0pWWegth6")',
                        }}
                    ></div>
                    <button className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 rounded-full p-1.5 text-white transition-colors cursor-pointer">
                        <Edit className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h1 className="text-white text-2xl md:text-3xl font-bold">Ekaterina Ivanova</h1>
                    <p className="text-neutral-400 mt-1">UI/UX Designer</p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 text-neutral-500 text-sm">
                        <div className="flex items-center gap-1.5">
                            <Mail className="h-4 w-4" />
                            <span>e.ivanova@email.com</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Phone className="h-4 w-4" />
                            <span>+7 (999) 123-45-67</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resume */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8">
                <h2 className="text-white text-xl font-bold mb-4">Resume</h2>
                <div className="border border-neutral-800 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <FileText className="text-purple-400 h-8 w-8" />
                        <div>
                            <p className="text-white font-medium">resume_ivanova_e.pdf</p>
                            <p className="text-neutral-500 text-xs">Uploaded: May 28, 2024</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer">
                            Edit
                        </button>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2 cursor-pointer">
                            <Upload className="h-4 w-4" />
                            Upload New
                        </button>
                    </div>
                </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Notifications */}
                <div className="flex flex-col gap-8">
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8">
                        <h2 className="text-white text-xl font-bold mb-5">Notification Settings</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-neutral-300" htmlFor="notif1">
                                    New Messages from HR
                                </label>
                                <button
                                    onClick={() => setNotifications({ ...notifications, messages: !notifications.messages })}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${notifications.messages ? "bg-purple-600" : "bg-neutral-700"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.messages ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-neutral-300" htmlFor="notif2">
                                    Application Status Updates
                                </label>
                                <button
                                    onClick={() => setNotifications({ ...notifications, applications: !notifications.applications })}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${notifications.applications ? "bg-purple-600" : "bg-neutral-700"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.applications ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-neutral-300" htmlFor="notif3">
                                    Job Recommendations
                                </label>
                                <button
                                    onClick={() =>
                                        setNotifications({ ...notifications, recommendations: !notifications.recommendations })
                                    }
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${notifications.recommendations ? "bg-purple-600" : "bg-neutral-700"
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.recommendations ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Privacy */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8">
                        <h2 className="text-white text-xl font-bold mb-5">Privacy Settings</h2>
                        <div className="flex items-center justify-between">
                            <label className="text-neutral-300" htmlFor="privacy1">
                                Make profile visible to companies
                            </label>
                            <button
                                onClick={() => setPrivacy({ ...privacy, profileVisible: !privacy.profileVisible })}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${privacy.profileVisible ? "bg-purple-600" : "bg-neutral-700"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privacy.profileVisible ? "translate-x-6" : "translate-x-1"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Change Password */}
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-white text-xl font-bold mb-5">Change Password</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="text-neutral-400 text-sm font-medium block mb-1.5" htmlFor="current_password">
                                Current Password
                            </label>
                            <input
                                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                id="current_password"
                                type="password"
                            />
                        </div>

                        <div>
                            <label className="text-neutral-400 text-sm font-medium block mb-1.5" htmlFor="new_password">
                                New Password
                            </label>
                            <input
                                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                id="new_password"
                                type="password"
                            />
                        </div>

                        <div>
                            <label className="text-neutral-400 text-sm font-medium block mb-1.5" htmlFor="confirm_password">
                                Confirm New Password
                            </label>
                            <input
                                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 px-4 py-2.5 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                id="confirm_password"
                                type="password"
                            />
                        </div>

                        <button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors mt-2 cursor-pointer"
                            type="submit"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
