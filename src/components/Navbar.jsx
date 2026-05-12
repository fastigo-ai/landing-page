import React from 'react';

const Navbar = ({ logo }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-row items-center justify-between py-2 lg:py-3 gap-2">
        <img src={logo} alt="Door2fy" className="h-8 lg:h-12 opacity-90 object-contain cursor-pointer" />
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-gray-800">
          <a href="#" className="hover:text-[#4FB7D4] transition-colors">Why us</a>
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-[#4FB7D4] transition-colors">
            Services 
            {/* <svg className="w-4 h-4 text-gray-500 group-hover:text-[#4FB7D4] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-[#4FB7D4] transition-colors">
            Cities 
            {/* <svg className="w-4 h-4 text-gray-500 group-hover:text-[#4FB7D4] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg> */}
          </div>
          <a href="#" className="hover:text-[#4FB7D4] transition-colors">How it works</a>
          <a href="#" className="hover:text-[#4FB7D4] transition-colors">FAQs</a>
        </div>
        {/* Mobile Menu Button */} 
        <div className="lg:hidden flex items-center">
          <button className="text-gray-800 hover:text-[#4FB7D4] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
