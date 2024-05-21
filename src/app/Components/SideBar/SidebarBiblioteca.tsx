'use client';
import React from 'react';
import Link from "next/link";

interface SidebarProps {
  onLoginClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLoginClick }) => {
  return (
    <div className='flex'>
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <h1 className="text-2xl font-semibold">Eae Dev</h1>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <Link href="/" className="block px-4 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <Link href="/pages/about" className="block px-4 py-2 rounded hover:bg-gray-700">
            About
          </Link>
          <Link href="/pages/Contatos" className="block px-4 py-2 rounded hover:bg-gray-700">
            Contact
          </Link>
          <hr />
        </nav>
        <div className="flex flex-col gap-3">
          <button onClick={onLoginClick} className="px-4 py-2 rounded hover:bg-gray-700">Login</button>
          <button className="px-4 py-2 rounded hover:bg-gray-700">Navbar</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
