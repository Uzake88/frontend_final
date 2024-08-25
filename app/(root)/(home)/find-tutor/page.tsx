// pages/find-tutor/index.tsx

import React from 'react';
import Link from 'next/link';

// Sample data for tutors (replace this with your database fetching logic)
const tutors = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    credentials: 'M.Sc. Mathematics',
    rating: 4.5,
    subject: 'Mathematics',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    credentials: 'B.A. English Literature',
    rating: 4.7,
    subject: 'English',
    status: 'Busy',
  },
  // Add more tutors as needed
];

const FindTutor = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Find a Tutor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map(tutor => (
          <div key={tutor.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold">{tutor.name}</h2>
            <p className="text-gray-600">Age: {tutor.age}</p>
            <p className="text-gray-600">Credentials: {tutor.credentials}</p>
            <p className="text-gray-600">Rating: {tutor.rating} ⭐</p>
            <p className="text-gray-600">Subject: {tutor.subject}</p>
            <p className="text-gray-600">Status: {tutor.status}</p>
            <Link
              href={`/tutor/${tutor.id}`} // Ensure the link is correct
              className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 text-center hover:bg-blue-600 transition"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutor;
