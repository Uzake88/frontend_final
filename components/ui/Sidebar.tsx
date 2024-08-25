import React from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';

const sidebarLinks = [
    { label: 'Home', route: '/', imgUrl: '/icons/home.svg' },
    { label: 'Find a Tutor', route: '/find-tutor', imgUrl: '/icons/find-tutor.svg' },
    { label: 'Become a Tutor', route: '/become-tutor', imgUrl: '/icons/become-tutor.svg' },
    { label: 'About Us', route: '/about', imgUrl: '/icons/about-us.svg' },
    { label: 'Contact', route: '/contact', imgUrl: '/icons/contact.svg' },
    { label: 'Pricing', route: '/pricing', imgUrl: '/icons/pricing.svg' },
];

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const pathname = usePathname();

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button 
                className={cn(
                    "fixed top-4 left-4 z-50 p-2 text-white rounded-full transition-all", 
                    {
                        "bg-blue-500": isOpen,
                        "bg-transparent": !isOpen,
                    }
                )}
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <XIcon className="h-6 w-6" />
                ) : (
                    <MenuIcon className="h-6 w-6" />
                )}
            </button>

            {/* Sidebar */}
            <section 
                className={cn(
                    "fixed top-0 left-0 h-screen flex flex-col justify-between bg-dark-1 p-6 pt-28 text-white transition-transform duration-300 ease-in-out lg:w-[264px] max-sm:w-full z-40", 
                    {
                        "-translate-x-full": !isOpen,
                        "translate-x-0": isOpen,
                    }
                )}
            >
                <div className='flex flex-col gap-6'>
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route || pathname.startsWith(link.route);

                        return (
                            <Link 
                                href={link.route}
                                key={link.label}
                                className={cn('flex gap-4 items-center p-4 rounded-lg justify-start transition-colors hover:bg-blue-600', {
                                    'bg-blue-1': isActive, 
                                })}
                            >
                                <img src={link.imgUrl} alt={link.label} className="h-6 w-6" />
                                <span>{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Sidebar;
