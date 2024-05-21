'use client';
import React from 'react';
import Link from "next/link";

interface SidebarProps {
  onLoginClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLoginClick }) => {
  return (
    <div className='flex'>
      <div className="w-56 h-screen bg-gray-950  text-white flex flex-col">
        <div className="flex items-center justify-center h-16 bg-black">
          <h1 className="text-2xl font-semibold">Eae Dev</h1>
        </div>
        <nav className="flex flex-col px-4 py-2 space-y-2">
          <Link href="/" className=" px-4 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <Link href="/pages/about" className=" px-4 py-2 rounded hover:bg-gray-700">
            Sobre
          </Link>
          <Link href="/pages/Contatos" className=" px-4 py-2 rounded hover:bg-gray-700">
            Contatos
          </Link>
          <hr />
        </nav>
        <div className="flex flex-col gap-3">
          <button onClick={onLoginClick} className="px-4 py-2 rounded hover:bg-gray-700">Logins</button>
          <button className="px-4 py-2 rounded hover:bg-gray-700">Navbars</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
