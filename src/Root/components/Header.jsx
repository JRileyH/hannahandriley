import React from 'react';

const Header = () => (
  <nav className="relative flex flex-row items-center w-full bg-white h-header">
    <div className="flex items-center justify-center w-full h-full ml-2 font-serif text-5xl font-light text-center text-primary hover:contrast">
      The Harringtons
    </div>
    <div className="absolute bottom-0 w-full h-2 bg-primary bg-gradient-to-r from-secondary via-primary to-secondary" />
  </nav>
);

export default Header;
