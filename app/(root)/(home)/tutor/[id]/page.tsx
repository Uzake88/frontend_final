// app/(root)/(home)/tutor/[id]/page.tsx

"use client"; // Ensure this line is at the top of the file

import React from 'react';
import { notFound } from 'next/navigation'; // Import this to handle non-existent IDs

interface Tutor {
  name: string;
  age: number;
  credentials: string;
  rating: number;
  subject: string;
  status: string;
  contact: string;
  videoCallLink: string;
}

// Sample tutor data (replace this with your actual data fetching logic)
const tutorData: Record<string, Tutor> = {
  1: {
    name: 'John Doe',
    age: 30,
    credentials: 'M.Sc. Mathematics',
    rating: 4.5,
    subject: 'Mathematics',
    status: 'Available',
    contact: 'john@example.com',
    videoCallLink: 'https://your-video-call-link.com/johndoe',
  },
  2: {
    name: 'Jane Smith',
    age: 28,
    credentials: 'B.A. English Literature',
    rating: 4.7,
    subject: 'English',
    status: 'Busy',
    contact: 'jane@example.com',
    videoCallLink: 'https://your-video-call-link.com/janesmith',
  },
};

const TutorProfile = ({ params }: { params: { id: string } }) => {
  const id = params.id; // Get the ID from the params

  const tutor = tutorData[id];

  // Handle non-existent tutor ID
  if (!tutor) {
    notFound(); // Automatically shows 404 page
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{tutor.name}</h1>
      <p className="text-gray-600">Age: {tutor.age}</p>
      <p className="text-gray-600">Credentials: {tutor.credentials}</p>
      <p className="text-gray-600">Rating: {tutor.rating} ⭐</p>
      <p className="text-gray-600">Subject: {tutor.subject}</p>
      <p className="text-gray-600">Status: {tutor.status}</p>
      <p className="text-gray-600">
        Contact: <a href={`mailto:${tutor.contact}`} className="text-blue-500">{tutor.contact}</a>
      </p>

      <h2 className="text-xl font-bold mt-6">Start a Video Call</h2>
      <a href={tutor.videoCallLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 mt-2 hover:bg-blue-600 transition">
        Join Video Call
      </a>
    </div>
  );
};

export default TutorProfile;