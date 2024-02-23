import React from 'react';
import { usePathname } from 'next/navigation'
import { Menu } from 'antd';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const menuItems = [
        { key: 'home', label: 'Home', target: '/' },
        { key: 'library', label: 'Library', target: '/library' }
    ];

    return (
        <div className='flex gap-5'>
            {menuItems.map(menuItem => (

                <Link href={menuItem.target} key={menuItem.key} className={`${pathname === menuItem.target ? 'text-zinc-400 border-b-4 border-b-blue-600' : ''}`}>{menuItem.label}</Link>

            ))}
        </div>
    );
};

export default Navbar;
