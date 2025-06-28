import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function InstructorProfile() {
  //const navigate = useNavigate();
  const { id } = useParams();

  const [instructor] = useState({
    id: 1,
    first_name: "Edwin",
    last_name: "Kipyego",
    email: "edwin.kipyego@gmail.com",
    age: 30,
    gender: "Male",
  });

  const handleEdit = () => {
    alert("Edit profile not implemented in mock mode.");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border border-slate-200">
      <h1 className="text-3xl font-semibold mb-6 text-center text-black">Your Profile</h1>
      <div className="space-y-4 text-black">
        <p className=" text-black"><span className="font-semibold">Name:</span> {instructor.first_name} {instructor.last_name}</p>
        <p className=" text-black"><span className="font-semibold">Email:</span> {instructor.email}</p>
        <p className=" text-black"><span className="font-semibold">Age:</span> {instructor.age}</p>
        <p className=" text-black"><span className="font-semibold">Gender:</span> {instructor.gender}</p>
      </div>
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleEdit}
          className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white border"
        >
          Edit Profile
        </button>
        <Link
          to={`/instructor/${id}/dashboard`}
          className="bg-white px-4 py-2 rounded hover:bg-green-600 text-white border"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default InstructorProfile;
