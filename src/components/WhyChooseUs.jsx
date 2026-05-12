import React from "react";
import Phone from '../assets/phone.png'
const WhyChooseUs = () => {
  const stats = [
    {
      num: "500+",
      label: "Expert Technicians",
      color: "bg-blue-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      num: "2k+",
      label: "Success Stories",
      color: "bg-cyan-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "100+",
      label: "Service Locations",
      color: "bg-teal-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "4.9/5",
      label: "Customer Rating",
      color: "bg-yellow-500",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#FBFDFE] py-12 lg:py-20 overflow-hidden relative">
      {/* Dynamic Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-cyan-600 uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold mb-4 block">
            Why Choose Doorsfy
          </span>
          <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight max-w-2xl mx-auto">
            Trusted by Hundreds of Businesses for Seamless IT Support
          </h2>
          <div className="h-1 w-16 bg-cyan-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* 3D Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 lg:mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2rem] p-6 md:p-8 text-center transition-all duration-500 transform hover:-translate-y-3 hover:rotate-x-1 hover:rotate-y-1 border-b-[4px] border-r-[4px] border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(79,183,212,0.1)] flex flex-col items-center justify-center overflow-hidden"
            >
              <div className={`w-11 h-11 rounded-xl ${item.color} text-white flex items-center justify-center mb-5 shadow-md transform group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1 tracking-tight">
                {item.num}
              </h3>

              <p className="text-gray-400 text-[9px] md:text-[10px] font-semibold uppercase tracking-widest leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom App Banner */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute inset-4 bg-cyan-200/15 blur-3xl rounded-[4rem] group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative bg-white rounded-[2.5rem] md:rounded-[3rem] px-8 lg:px-16 py-0 flex flex-col lg:flex-row items-center justify-between border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Phones Image */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0 pt-8 lg:pt-0 transform transition-transform duration-700 group-hover:scale-105">
              <img
                src={Phone}
                alt="mobile app"
                className="w-[240px] lg:w-[380px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left py-12 lg:py-16">
              <span className="inline-block bg-cyan-50 text-cyan-600 rounded-full px-4 py-1 text-[10px] font-semibold mb-4 uppercase tracking-[0.2em] border border-cyan-100">
                DOOR2FY APP
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-4 tracking-tight">
                Manage Services <br />
                on the Go
              </h2>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 font-normal">
                Download our mobile app to book services, track your requests and
                get instant updates.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href="#" className="transform transition-all hover:scale-105 active:scale-95 shadow-md rounded-xl overflow-hidden">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-11 md:h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;