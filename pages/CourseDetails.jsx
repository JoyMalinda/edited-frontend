import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

export default function CourseDetails() {
  const { id } = useParams();

  const mockCourses = {
    1: {
      id: 1,
      title: 'Python Programming',
      description: 'Learn Python from scratch. Skills gained: problem solving, logic building, basic automation.',
      duration: 30,
      level: 'Beginner',
      lesson_count: 10,
      instructor: { first_name: 'Edwin', last_name: 'Kipyego', email: 'edwin.kipyego@gmail.com' },
      reviews: [
        { id: 1, user: { username: 'Joy Malinda' }, rating: 4.5, comment: 'Really helpful.' }
      ]
    },
    2: {
      id: 2,
      title: 'Data Science with Python',
      description: 'Advanced data science concepts. Skills gained: data wrangling, visualization, prediction models.',
      duration: 45,
      level: 'Advanced',
      lesson_count: 15,
      instructor: { first_name: 'Edwin', last_name: 'Kipyego', email: 'edwin.kipyego@gmail.com' },
      reviews: [
        { id: 2, user: { username: 'Boniface Muguro' }, rating: 5.0, comment: 'Excellent content!' }
      ]
    },
    3: {
      id: 3,
      title: 'Web Development with Flask',
      description: 'Build web apps using Flask. Skills gained: routing, REST APIs, templates, backend logic.',
      duration: 40,
      level: 'Intermediate',
      lesson_count: 12,
      instructor: { first_name: 'Celestine', last_name: 'Mecheo', email: 'celestine@gmail.com' },
      reviews: [
        { id: 3, user: { username: 'Joy Malinda' }, rating: 4.0, comment: 'Well paced.' }
      ]
    },
    4: {
      id: 4,
      title: 'Data Structures',
      description: 'Intro to data structures. Skills gained: arrays, linked lists, stacks, queues, trees.',
      duration: 35,
      level: 'Beginner',
      lesson_count: 10,
      instructor: { first_name: 'Celestine', last_name: 'Mecheo', email: 'celestine@gmail.com' },
      reviews: [
        { id: 4, user: { username: 'Boniface Muguro' }, rating: 4.2, comment: 'Good refresher.' }
      ]
    },
    5: {
      id: 5,
      title: 'Machine Learning Basics',
      description: 'ML concepts explained. Skills gained: regression, classification, model evaluation.',
      duration: 50,
      level: 'Intermediate',
      lesson_count: 14,
      instructor: { first_name: 'Edwin', last_name: 'Kipyego', email: 'edwin.kipyego@gmail.com' },
      reviews: [
        { id: 5, user: { username: 'Aquila Jedidia' }, rating: 4.8, comment: 'ML was made easy!' }
      ]
    },
    6: {
      id: 6,
      title: 'Deep Learning',
      description: 'Neural networks and deep learning. Skills gained: CNNs, RNNs, TensorFlow basics.',
      duration: 60,
      level: 'Advanced',
      lesson_count: 16,
      instructor: { first_name: 'Edwin', last_name: 'Kipyego', email: 'edwin.kipyego@gmail.com' },
      reviews: [
        { id: 6, user: { username: 'Grace Zawadi' }, rating: 3.5, comment: 'Challenging but rewarding.' }
      ]
    },
    7: {
      id: 7,
      title: 'Front-End Development',
      description: 'HTML, CSS, JS crash course. Skills gained: layout design, responsiveness, DOM manipulation.',
      duration: 25,
      level: 'Beginner',
      lesson_count: 8,
      instructor: { first_name: 'Celestine', last_name: 'Mecheo', email: 'celestine@gmail.com' },
      reviews: [
        { id: 7, user: { username: 'Aquila Jedidia' }, rating: 4.0, comment: 'Frontend tools explained well.' }
      ]
    },
    8: {
      id: 8,
      title: 'React for Beginners',
      description: 'Intro to React and components. Skills gained: JSX, props, state, hooks.',
      duration: 30,
      level: 'Beginner',
      lesson_count: 10,
      instructor: { first_name: 'Celestine', last_name: 'Mecheo', email: 'celestine@gmail.com' },
      reviews: [
        { id: 8, user: { username: 'Grace Zawadi' }, rating: 4.7, comment: 'React was fun!' }
      ]
    },
    9: {
      id: 9,
      title: 'APIs with Flask',
      description: 'REST API development. Skills gained: endpoints, authentication, CRUD operations.',
      duration: 35,
      level: 'Intermediate',
      lesson_count: 11,
      instructor: { first_name: 'Edwin', last_name: 'Kipyego', email: 'edwin.kipyego@gmail.com' },
      reviews: [
        { id: 9, user: { username: 'Grace Zawadi' }, rating: 4.9, comment: 'Loved the API integration.' }
      ]
    },
    10: {
      id: 10,
      title: 'Database Design',
      description: 'SQL & NoSQL explained. Skills gained: schema design, normalization, queries.',
      duration: 30,
      level: 'Intermediate',
      lesson_count: 9,
      instructor: { first_name: 'Celestine', last_name: 'Mecheo', email: 'celestine@gmail.com' },
      reviews: [
        { id: 10, user: { username: 'Celestine Mecheo' }, rating: 4.1, comment: 'DB concepts well explained.' }
      ]
    },
    11: {
      id: 11,
      title: 'DevOps Essentials',
      description: 'CI/CD, Docker, pipelines. Skills gained: containerization, deployment, automation.',
      duration: 40,
      level: 'Advanced',
      lesson_count: 12,
      instructor: { first_name: 'Edwin', last_name: 'Kipyego', email: 'edwin.kipyego@gmail.com' },
      reviews: [
        { id: 11, user: { username: 'Boniface Muguro' }, rating: 4.4, comment: 'Very practical.' }
      ]
    },
    12: {
      id: 12,
      title: 'Cybersecurity Basics',
      description: 'Understanding digital security. Skills gained: threat modeling, encryption, best practices.',
      duration: 30,
      level: 'Beginner',
      lesson_count: 7,
      instructor: { first_name: 'Celestine', last_name: 'Mecheo', email: 'celestine@gmail.com' },
      reviews: [
        { id: 12, user: { username: 'Aquila Jedidia' }, rating: 5.0, comment: 'Important for everyone.' }
      ]
    }
  };

  
  const course = mockCourses[id];
  //const currentUser = { id: 2, username: 'Joy Malinda' };

  const handleEnroll = () => {
    toast.success('Enrollment successful!');
  };

  if (!course) return <p className="text-red-600 font-semibold">Course not found.</p>;

  return (
    <div className="py-10 flex items-center justify-center px-4 bg-green-50">

    <div className="max-w-3xl mx-auto px-6 py-10 bg-white border-2 border-green-600 rounded-2xl text-center font-sans text-slate-800 shadow-xl">

      <div className='mb-6'>
        <h1 className="text-4xl font-extrabold text-green-700 mb-1">{course.title}</h1>
        <p>{course.description}</p>
      </div>

      <hr className="border-t border-green-600 my-6 mb-8" />

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-white border border-green-600 rounded-lg p-6 text-left hover:scale-105 transition-transform">
          <h2 className="text-xl text-green-500 font-semibold mb-1">Instructor</h2>
          <p><span className="font-semibold">Name:</span> {course.instructor.first_name} {course.instructor.last_name}</p>
          <p><span className="font-semibold">Email:</span> {course.instructor.email}</p>
        </div>
        <div className='flex-1 bg-white border border-green-600 rounded-lg p-6 text-left hover:scale-105 transition-transform'>
          <h2 className="text-xl text-green-500 font-semibold mb-1">Course Details</h2>
          <p><span className="font-semibold">Level:</span> {course.level}</p>
          <p><span className="font-semibold">Lessons:</span> {course.lesson_count}</p>
          <p><span className="font-semibold">Duration:</span> {course.duration} hours</p>
        </div>
      </div>

      <button
  onClick={handleEnroll}
  className="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-300 mb-8 animate-pulse">
  Enroll
</button>
      <div className='bg-white border border-green-600 rounded-lg'>
      <h3 className="text-xl text-green-500 font-semibold mb-1">Reviews</h3>
      {course.reviews && course.reviews.length > 0 ? (
        <ul className="space-y-6">
          {course.reviews.map((review) => (
            <li key={review.id} className="">
              <p className="font-medium">{review.user.username}:</p>
              <p className="text-gray-700">{review.comment}</p>
              <div className="text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < Math.round(review.rating) ? '★' : '☆'}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
      </div>
    </div>
    </div>
  );
}
