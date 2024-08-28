// components/ui/Navbar.tsx

import React from 'react';
import Link from 'next/link';
import { BellIcon, MessageSquareIcon, UserIcon } from 'lucide-react';
import { useUser, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'; // Import Clerk components

interface NavbarProps {
  isOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
  const { user } = useUser(); // Get user object from Clerk

  return (
    <nav className={`bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg ${isOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold ml-12"> {/* Add margin-left here */}
          ATutors
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <SignedIn>
          {/* Ensure JSX is returned correctly here */}
          <div className="flex items-center">
            <span className="text-sm">Credits: ${Number(user?.publicMetadata?.credits) || 0}</span>
          </div>
          <button className="relative">
            <BellIcon className="h-6 w-6 hover:text-blue-500 transition" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
          </button>
          <button className="relative">
            <MessageSquareIcon className="h-6 w-6 hover:text-blue-500 transition" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">5</span>
          </button>
          <UserButton afterSignOutUrl="/" /> {/* User profile and logout button */}
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="text-sm hover:text-blue-500 transition">Login</Link> {/* Show login link if not authenticated */}
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
