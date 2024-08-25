'use client';

import React, { useState } from 'react';
import { Inter } from "next/font/google";
import Sidebar from '@/components/ui/Sidebar'; // Adjust the path based on your project structure
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>
        <div className={`flex transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <main className={`flex-1 transition-margin duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
