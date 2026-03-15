import React, { useState, useEffect } from 'react';
import { Users, BookOpen, GraduationCap, PlusCircle } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            {/* Header */}
            <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900">Registrar Command Center</h1>
                    <p className="text-gray-500 font-medium">Addis Ababa University | 2026 Academic Year</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200">
                    <PlusCircle size={20} /> Add Student
                </button>
            </header>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { title: "Total Students", val: "48,290", icon: <Users className="text-blue-600" /> },
                    { title: "Active Courses", val: "1,402", icon: <BookOpen className="text-purple-600" /> },
                    { title: "Avg. CGPA", val: "3.42", icon: <GraduationCap className="text-yellow-600" /> }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="p-4 bg-gray-50 rounded-xl">{item.icon}</div>
                        <div>
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{item.title}</p>
                            <p className="text-2xl font-black text-gray-900">{item.val}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 font-bold text-gray-800 text-lg">Student Records</div>
                <div className="p-0">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-gray-400 text-xs uppercase text-left">
                            <tr>
                                <th className="p-5">Student ID</th>
                                <th className="p-5">Full Name</th>
                                <th className="p-5">Email</th>
                                <th className="p-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* Example Row - Dynamic data will render here */}
                            <tr className="hover:bg-blue-50/50 transition-colors">
                                <td className="p-5 font-mono text-blue-700 font-bold">UGR/1234/18</td>
                                <td className="p-5 font-semibold text-gray-800">Abebe Kebede</td>
                                <td className="p-5 text-gray-500">abebe@aau.edu.et</td>
                                <td className="p-5 text-right">
                                    <button className="text-blue-600 font-bold hover:underline">View Record</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;