import React from "react";
import { useParams } from "react-router-dom";
import gmailIcon from '../images/icons8-gmail-50.png';
import massGmailIcon from '../images/icons8-gmail-50 (1).png';
import googleMeetIcon from '../images/icons8-google-meet-50.png';


function InstrCourseDetails() {
  const { courseId } = useParams();

  const mockCourses = {
  1: {
    id: 1,
    title: 'DevOps Essentials',
    description: 'CI/CD, Docker, pipelines. Skills gained: containerization, deployment, automation.',
    duration: 40,
    level: 'Advanced',
    lesson_count: 12,
    students: [
      { name: "Joy Malinda", progress: 80 },
      { name: "Boniface Muguro", progress: 55 },
    ],
  },
  2: {
    id: 2,
    title: "Data Science with Python",
    description: "Advanced data science concepts.",
    duration: 25,
    level: 'Intermediate',
    students: [
      { name: "Grace Zawadi", progress: 90 },
    ],
  },
  3: {
    id: 3,
    title: "Machine Learning Basics",
    description: "ML concepts explained.",
    students: [
      { name: "Aquila Jedidia", email:"aquilaexample@gmail.com", progress: 100 },
      { name: "Boniface Muguro", email:"boniface@gmail.com", progress: 70 },
      { name: "Grace Zawadi", email: "zawadi@gmail.com", progress: 90 },
    ],
  },
};

  const course = mockCourses[courseId];

  if (!course) return <p className="text-center mt-10">Course not found.</p>;

  const handleEdit = () => alert("Edit course not implemented in mock mode.");

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h1 className="text-2xl font-bold mb-4 text-black">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.description}</p>

      <button
        onClick={handleEdit}
        className="bg-white text-green-600 px-4 py-2 rounded mb-6 hover:bg-green-600 hover:text-white border"
      >
        Edit Course
      </button>
      <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold mb-2 text-black">Enrolled Students</h2>
      <div className="flex space-x-5">
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${course.students.map(s => s.email).join(',')}&su=Course+Update&body=Dear+student,`}
        target="_blank"
        title="Send Email to All Students"
        rel="noopener noreferrer"
      >
      <img
          src={massGmailIcon}
          alt="Send Emails to All Students"
          className="w-[40px] h-[40px] cursor-pointer"
      />
      </a>
      <a
        href="https://meet.google.com/"
        target="_blank"
        title="Create a Meeting"
        rel="noopener noreferrer"
      >
        <img
          src={googleMeetIcon}
          alt="Create a Meeting"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </a>
      </div>
      </div>
      <ul className="space-y-2">
        {course.students.map((student, index) => (
          <li
            key={index}
            className="p-4 bg-slate-50 border rounded-xl flex justify-between items-center"
          >
            <div className="flex space-x-4">
            <span className="font-medium text-black">{student.name}</span>
            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${student.email}&su=Progress+Update&body=Hello+${encodeURIComponent(student.name)},`}
                rel="noopener noreferrer"
                title="Send Email"
            >
               <img
                    src={gmailIcon}
                    alt="Send Email to Student"
                    className="w-5 h-5 cursor-pointer"
                />
              </a>
            </div>
            <span className="text-gray-600">Progress: {student.progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstrCourseDetails;
