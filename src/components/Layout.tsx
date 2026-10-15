import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#05070B] text-white selection:bg-[#008CFF]/30 selection:text-[#19B5FF]">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
