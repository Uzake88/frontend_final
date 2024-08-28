'use client';

import React, { useState } from 'react';
import { Inter } from "next/font/google";
import Sidebar from '@/components/ui/Sidebar'; // Adjust the path based on your project structure
import "@/app/(root)/globals.css";
import { ClerkProvider } from '@clerk/nextjs';

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
      <ClerkProvider
        appearance={{
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {/* The Sidebar and main content */}
          <div className="flex">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div
              className={`flex-1 transition-transform duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`}
            >
              {children}
            </div>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
