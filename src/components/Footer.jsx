import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Portfolio
            </a>
            <p className="mt-2 text-pink-100">
              Creating beautiful digital experiences
            </p>
          </div>

          <div className="flex space-x-6">
            {/* GitHub */}
            <a href="#" className="text-pink-100 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..."
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="text-pink-100 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761..." />
              </svg>
            </a>

            {/* Dribbble */}
            <a href="#" className="text-pink-100 hover:text-white transition-colors">
              <span className="sr-only">Dribbble</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0..." />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-pink-200">
          &copy; {new Date().getFullYear()} DevName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
