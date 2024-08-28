// app/(root)/(home)/layout.tsx

'use client';

import Navbar from '@/components/ui/Navbar';
import Sidebar from '@/components/ui/Sidebar';
import React, { ReactNode, useState } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="relative">
      <Navbar isOpen={isOpen} />
      <div className="flex transition-all duration-300">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <section
          className={`flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 transition-transform duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}
        >
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
