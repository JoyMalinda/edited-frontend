// CourseCard.jsx
import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border border-gray-200 rounded-2xl shadow-md bg-white p-6 hover:shadow-lg transition duration-200 ease-in-out"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.description}</p>
    </div>
  );
}

export default CourseCard;
