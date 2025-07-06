import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Hasnain — All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
