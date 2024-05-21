'use client';
import React, { useState } from 'react';
import HeadersHomeBiblioteca from "@/app/Components/Headers/HeadersBiblioteca/Home/HeadersHomeBiblioteca";
import HeadersLogin from "@/app/Components/Headers/HeadersBiblioteca/HeadersLogin";
import Sidebar from "@/app/Components/SideBar/SidebarBiblioteca";

export default function Biblioteca() {
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(<HeadersHomeBiblioteca />);

  const handleLoginClick = () => {
    setSelectedComponent(<HeadersLogin />);
  };

  return (
    <div className="flex">
      <Sidebar onLoginClick={handleLoginClick} />
      <div className="flex-1 ">
        {selectedComponent}
      </div>
    </div>
  );
}
