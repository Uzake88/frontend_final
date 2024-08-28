"use client"; // Ensure this line is at the top of the file

import React, { useState } from 'react';
import { notFound } from 'next/navigation'; // Import this to handle non-existent IDs
import { useStreamVideoClient } from "@stream-io/video-react-sdk"; // Import the Stream Video client
import { useUser } from "@clerk/nextjs"; // Import Clerk user for authentication
import MeetingTypeList from "@/components/MeetingTypeList"; // Import MeetingTypeList

interface Tutor {
  name: string;
  age: number;
  credentials: string;
  rating: number;
  subject: string;
  status: string;
  contact: string;
}

const tutorData: Record<string, Tutor> = {
  1: {
    name: 'John Doe',
    age: 30,
    credentials: 'M.Sc. Mathematics',
    rating: 4.5,
    subject: 'Mathematics',
    status: 'Available',
    contact: 'john@example.com',
  },
  2: {
    name: 'Jane Smith',
    age: 28,
    credentials: 'B.A. English Literature',
    rating: 4.7,
    subject: 'English',
    status: 'Busy',
    contact: 'jane@example.com',
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
      <MeetingTypeList tutorId={id} /> {/* Pass tutor ID to MeetingTypeList */}
    </div>
  );
};

export default TutorProfile;
