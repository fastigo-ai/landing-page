// Hero.jsx
import React from "react";

const Hero = ({ logo, heroTechnician }) => {
  return (
    <section className="w-full -mt-4 bg-white overflow-hidden relative min-h-[600px] flex flex-col">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full flex flex-col flex-grow">
        
        {/* Top Header Row */}
        <div className="flex flex-row items-center justify-between py-8 lg:py-12 z-20 gap-4">
          <div className="inline-block bg-[#E8F8FB] text-[#4FB7D4] px-4 lg:px-6 py-2 rounded-full text-[10px] font-semibold border border-[#BEE3F8] shadow-sm uppercase tracking-[0.2em] whitespace-nowrap">
            Enterprise IT Services
          </div>
          <img src={logo} alt="Door2fy" className="h-7 lg:h-9 opacity-80 object-contain" />
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 flex-grow pb-16 lg:pb-24">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left z-10 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-[3.8rem] font-semibold leading-[1.2] text-gray-900 tracking-tight">
              Reliable IT Solutions <br className="hidden lg:block" />
              at Your Doorstep
            </h1>

            <p className="text-gray-500 text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Expert IT support for homes and businesses. 
              Fast, secure and reliable solutions tailored 
              to your specific needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#4FB7D4] hover:bg-[#3EA2BE] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-semibold text-[11px] lg:text-[12px] uppercase tracking-widest transition duration-300 shadow-xl shadow-blue-200/50 group flex items-center justify-center">
                Explore Services 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <button className="bg-white border-2 border-gray-50 text-gray-400 hover:bg-gray-50 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-semibold text-[11px] lg:text-[12px] uppercase tracking-widest transition duration-300 shadow-sm flex items-center justify-center">
                View AMC Plans
              </button>
            </div>

            {/* Bottom Features */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 lg:gap-x-10 gap-y-3 pt-4 lg:pt-6 text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#4FB7D4] rounded-full"></span>
                Experts
              </div>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#4FB7D4] rounded-full"></span>
                Quick Response
              </div>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#4FB7D4] rounded-full"></span>
                Secure
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center items-center lg:justify-end order-1 lg:order-2 -mt-8 lg:-mt-16">
            
            {/* Background Shape */}
            <div className="absolute w-[80%] lg:w-[90%] h-[80%] lg:h-[90%] bg-blue-50/50 rounded-[30px] lg:rounded-[40px] rotate-3 -z-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-[400px] lg:max-w-[550px]">
               <img
                src={heroTechnician}
                alt="IT Support"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />

              {/* Floating Card 1 */}
              <div className="absolute top-[15%] left-[-5%] lg:left-[-10%] bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4 animate-bounce-slow">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 text-sm lg:text-base">🕒</div>
                <div>
                  <p className="text-[7px] lg:text-[8px] text-gray-400 font-semibold uppercase tracking-widest">On-Time</p>
                  <h3 className="font-semibold text-sm lg:text-lg text-gray-900">99%</h3>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-[5%] right-[0%] bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 text-xs lg:text-lg">24</div>
                <div>
                  <p className="text-[7px] lg:text-[8px] text-gray-400 font-semibold uppercase tracking-widest">Support</p>
                  <h3 className="font-semibold text-sm lg:text-lg text-gray-900">24/7</h3>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-[5%] lg:bottom-[10%] right-[5%] bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-4 lg:gap-5">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-50 rounded-lg lg:rounded-xl flex items-center justify-center text-yellow-500 text-lg lg:text-xl">⭐</div>
                <div>
                  <p className="text-[8px] lg:text-[9px] text-gray-400 font-semibold uppercase tracking-widest">Success</p>
                  <h3 className="font-semibold text-lg lg:text-2xl text-gray-900">4.8/5</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
