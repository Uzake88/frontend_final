import React, { ReactNode } from 'react';
import Sidebar from '@/components/ui/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex">
            {/* Sidebar will be displayed on the left */}
            <Sidebar />
            {/* Main content area where pages will be rendered */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}

export default Layout;
