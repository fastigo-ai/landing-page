import React from "react";
import Phone from '../assets/phone1.PNG'
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
    <section className="bg-white py-16 md:py-24 overflow-hidden relative">
      {/* Dynamic Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4FB7D4]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#4FB7D4] uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-bold mb-4 block">
            Why Choose Door2fy
          </span>
          <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
            Trusted by Hundreds of Businesses for Seamless IT Support
          </h2>
          <div className="h-1.5 w-20 bg-[#4FB7D4] rounded-full mx-auto mt-8"></div>
        </div>

        {/* 3D Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 lg:mb-24">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 text-center transition-all duration-500 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(79,183,212,0.12)] flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] text-[#4FB7D4] flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                {item.num}
              </h3>

              <p className="text-gray-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom App Banner */}
        <div className="relative group max-w-6xl mx-auto">
          <div className="absolute inset-4 bg-[#4FB7D4]/10 blur-3xl rounded-[4rem] group-hover:opacity-60 transition-opacity"></div>
          
          <div className="relative bg-[#F8FDFF] rounded-[3rem] md:rounded-[4rem] px-8 lg:px-20 py-0 flex flex-col lg:flex-row items-center justify-between border border-[#E1F7F9] shadow-[0_20px_50px_rgba(79,183,212,0.05)] overflow-hidden">
            {/* Phones Image - Left Side */}
            <div className="relative w-full lg:w-[60%] flex justify-center lg:justify-start transform transition-transform duration-700 group-hover:scale-105 pt-10 lg:pt-0">
              <img
                src={Phone}
                alt="mobile app"
                className="w-full max-w-[300px] lg:max-w-[540px] drop-shadow-[0_30px_70px_rgba(79,183,212,0.15)] select-none pointer-events-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[42%] text-center lg:text-left py-12 lg:py-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Manage Services <br />
                on the Go
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 font-medium">
                Download our mobile app to book services, track your requests and get instant updates.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1" target="_blank" rel="noopener noreferrer" className="transform transition-all hover:scale-105 active:scale-95 shadow-xl rounded-2xl overflow-hidden block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-12 md:h-14 w-auto"
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
