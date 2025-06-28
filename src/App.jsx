import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyCourses from "../pages/MyCourses";
import CourseDetails from "../pages/CourseDetails";
import InstructorDashboard from "../pages/InstructorDashboard";
import InstrCourseDetails from "../pages/InstrCourseDetails";
import InstructorProfile from "../pages/InstructorProfile";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function App() {
  const handleTestToast = () => {
    toast.success("🎉 Toast is working!");
  };

  return (
    <>
      {/* Optional Navbar */}
      {/* <Navbar /> */}

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/instructor/:id" element={<InstructorProfile />} />
          <Route path="/instructor/:id/dashboard" element={<InstructorDashboard />} />
          <Route path="/instructor/:id/courses/:courseId" element={<InstrCourseDetails />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route
            path="/test"
            element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Welcome to Coursify</h2>
                <button
                  onClick={handleTestToast}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Test Toast
                </button>
              </div>
            </div>
            }
          />
        </Route>
      </Routes>

      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;


