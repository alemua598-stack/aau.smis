import React, { useState, useEffect } from "react";
import { Users, BookOpen, GraduationCap, PlusCircle } from "lucide-react";
import { BASE_URL } from "../apiConfig";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Registrar Command Center
          </h1>
          <p className="text-gray-500 font-medium">
            Addis Ababa University | 2026 Academic Year
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold">
          <PlusCircle size={20} /> Add Student
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <Users className="text-blue-600" />
          <div>
            <p className="text-sm text-gray-400 font-bold uppercase">
              Total Students
            </p>
            <p className="text-2xl font-black text-gray-900">
              {students.length}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 font-bold">
          Student Records
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase">
            <tr>
              <th className="p-5 text-left">Student ID</th>
              <th className="p-5 text-left">Full Name</th>
              <th className="p-5 text-left">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="p-5">{student.student_id}</td>
                <td className="p-5 font-semibold">{student.full_name}</td>
                <td className="p-5 text-gray-500">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
