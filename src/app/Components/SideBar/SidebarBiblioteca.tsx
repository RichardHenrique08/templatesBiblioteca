'use client';
import React, { useState } from 'react';
import HeadersLogin from '../Headers/HeadersBiblioteca/HeadersLogin'; // certifique-se de que o caminho está correto

import Link from "next/link";
import HeadersHomeBiblioteca from '../Headers/HeadersBiblioteca/HeadersHomeBiblioteca';

const Sidebar = () => {
    const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(null);

    const handleLoginClick = () => {
      setSelectedComponent(<HeadersLogin />);
    };
  return (
    <div className='flex'>
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-semibold">Eae Dev</h1>
      </div>
      <nav className="flex1 px-4 py-2 space-y-2">
        <Link href="/" className="block px-4 py-2 rounded hover:bg-gray-700">
          Home
        </Link>

        <Link
          href="/pages/about"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          About
        </Link>

        <Link
          href="/pages/Contatos"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Contact
        </Link>
        <hr />
      </nav>{" "}
      <div className="flex flex-col gap-3">
        <button onClick={handleLoginClick}>Login</button>
        <button>Navbar</button>
        
      </div>
      
    </div>
    <div className='flex flex-col '>
        <HeadersHomeBiblioteca />
    </div>
    <div className="flex-1 p-4 text-black">
        {selectedComponent}
      </div>
    </div>
  );
};

export default Sidebar;
