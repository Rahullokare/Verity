import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="text-2xl font-bold text-white">Verity</span>
          <span className="text-2xl font-bold text-blue-400">RCM</span>
        </div>
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center mt-6">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Services
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Testimonials
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-300 hover:text-white">
              Privacy
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 VerityRCM. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
