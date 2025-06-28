// InstructorDashboard.jsx

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const mockCourses = [
  { id: 1, title: "Python Programming", description: "Learn Python from scratch." },
  { id: 2, title: "Data Science with Python", description: "Advanced data science concepts." },
  { id: 3, title: "Machine Learning Basics", description: "ML concepts explained." },
];

function InstructorDashboard() {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    level: "",
    lesson_count: "",
  });

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Course created (mock): " + JSON.stringify(newCourse));
    setShowForm(false);
    setNewCourse({ title: "", description: "", duration: "", level: "", lesson_count: "" });
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Instructor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <Link
            key={course.id}
            to={`/instructor/${id}/courses/${course.id}`}
            className="block bg-white shadow-md p-6 rounded-xl border border-slate-200 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </Link>
        ))}
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white p-6 rounded-xl shadow-md border border-slate-200 space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Create New Course</h2>
          <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-2 rounded text-gray-500"
            required
          />
          <textarea
            name="description"
            value={newCourse.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2 rounded text-gray-500"
            required
          />
          <input
            type="number"
            name="duration"
            value={newCourse.duration}
            onChange={handleChange}
            placeholder="Duration (hours)"
            className="w-full border p-2 rounded text-gray-500"
            required
          />
          <input
            type="text"
            name="level"
            value={newCourse.level}
            onChange={handleChange}
            placeholder="Level (e.g., Beginner, Intermediate)"
            className="w-full border p-2 rounded text-gray-500"
            required
          />
          <input
            type="number"
            name="lesson_count"
            value={newCourse.lesson_count}
            onChange={handleChange}
            placeholder="Lesson Count"
            className="w-full border p-2 rounded text-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Create Course
          </button>
        </form>
      )}

      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed bottom-18 right-10 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        {showForm ? "Cancel" : "Create New Course"}
      </button>
    </div>
  );
}

export default InstructorDashboard;
