'use client';

import React, { useEffect, useState } from 'react';
import { SignIn, useUser } from '@clerk/nextjs'; // Import Clerk SignIn component and useUser hook
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/navigation'

const SignInPage: React.FC = () => {
  const { user } = useUser(); // Get user object from Clerk
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false); // State to control welcome message visibility

  useEffect(() => {
    if (user) {
      // Set a 3-second delay before redirecting
      const timer = setTimeout(() => {
        setShowWelcome(true); // Show welcome message after 3 seconds
        router.push('/'); // Redirect to homepage
      }, 3000);
      
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [user, router]);

  // If the user is authenticated, return a loading state or welcome message
  if (user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {showWelcome ? (
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to ATutors!</h1>
        ) : (
          <p className="text-gray-600 text-center mb-4">Signing you in...</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to ATutors!</h1>
        <p className="text-gray-600 text-center mb-4">Where tutoring is done the ATutor way.</p>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up" // Adjust if you have a sign-up page
          forceRedirectUrl="/" // Redirect after successful sign-in
          appearance={{
            elements: {
              rootBox: 'flex flex-col items-center',
              formField: 'border p-4 rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
              button: 'bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-500 transition duration-200',
            },
            variables: {
              fontFamily: 'Inter, sans-serif',
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
