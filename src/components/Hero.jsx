// Hero.jsx
import React from "react";

const Hero = ({ logo, heroTechnician }) => {
  return (
    <section className="w-full -mt-4 bg-white overflow-hidden relative min-h-[600px] flex flex-col">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30"></div>

      {/* Focus Lights - Bottom Corners */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#4FB7D4]/10 rounded-full -z-10 blur-[120px]"></div>
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full -z-10 blur-[120px]"></div>
      {/* Top Header Row - Full Width Border */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col flex-grow pt-8 lg:pt-24">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 flex-grow pb-16 lg:pb-12">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left z-10 order-2 lg:order-1 pt-4 lg:pt-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm mx-auto lg:mx-0 w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] lg:text-[12px] font-medium text-gray-600 tracking-wide">
                Trusted by{" "}
                <span className="font-bold text-gray-900">5000+</span> homes{" "}
                <span className="mx-1 text-gray-300">·</span> 10 cities live
              </span>
            </div>

            <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-[1.15] text-gray-900 tracking-tight ">
              Get your tech issues <br /> fixed in minutes!
            </h1>
            <p className="text-gray-500 text-base lg:text-lg -mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Get trusted tech experts in minutes and solve issues without
              delays
            </p>
            <div className="inline-flex items-center -mt-4 gap-2 px-5 py-2.5 border-2 border-[#4FB7D4] text-[#4FB7D4] rounded-full font-bold text-[13px] hover:bg-[#4FB7D4]/5 transition-all cursor-pointer w-fit mx-auto lg:mx-0 group shadow-sm mb-4">
              Request Door2fy in your locality
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </div>

            {/* Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center  mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105 active:scale-95 block shadow-lg rounded-xl overflow-hidden"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-[48px] lg:h-[56px] w-auto"
                  />
                </a>

                <a
                  href="#"
                  className="transition-all hover:scale-105 active:scale-95 block shadow-lg rounded-xl overflow-hidden"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-[48px] lg:h-[56px] w-auto"
                  />
                </a>
              </div>
              {/* Ratings */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex gap-0.5 text-[#45afcb]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="font-bold text-gray-900">4.5</span>
                  <span className="text-gray-500">from 42,700+ ratings</span>
                </div>
              </div>
            </div>

            {/* Live In Cities */}
            <div className=" space-y-4">
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-gray-400 uppercase text-center lg:text-left">
                  Live In
                </span>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    "Bengaluru",
                    "Delhi",
                    "Noida",
                    "Gurgaon",
                    "Mumbai",
                    "Pune",
                    "Hyderabad",
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-5 py-2 bg-white border border-gray-100 rounded-full text-[13px] font-semibold text-gray-700 shadow-sm hover:border-[#45afcb]/30 transition-colors cursor-default"
                    >
                      {city}
                    </span>
                  ))}
                  <span className="px-5 py-2 text-[#45afcb] font-bold text-[13px] cursor-pointer hover:underline underline-offset-4">
                    + 8 more cities →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}

          {/* Right Image Section */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:justify-end order-1 lg:order-2 ">
            {/* Background Shape */}
            <div className="absolute w-[80%] lg:w-[110%] h-[80%] lg:h-[110%] bg-blue-50/50 rounded-[30px] lg:rounded-[40px] rotate-3 -z-10 -right-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-[450px] lg:max-w-[500px]">
              <img
                src={heroTechnician}
                alt="IT Support"
                className="relative z-10 w-full h-[500px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] object-contain select-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />

              {/* Floating Card 1 */}
              <div className="absolute top-[35%] -left-12 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4 animate-bounce-slow">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 text-sm lg:text-base">
                  🕒
                </div>
                <div>
                  <p className="text-[7px] lg:text-[8px] text-gray-400 font-semibold uppercase tracking-widest">
                    On-Time
                  </p>
                  <h3 className="font-semibold text-sm lg:text-lg text-gray-900">
                    99%
                  </h3>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-4 -right-1 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 text-xs lg:text-lg">
                  24
                </div>
                <div>
                  <p className="text-[7px] lg:text-[8px] text-gray-400 font-semibold uppercase tracking-widest">
                    Support
                  </p>
                  <h3 className="font-semibold text-sm lg:text-lg text-gray-900">
                    24/7
                  </h3>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-[5%] -right-2 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-50 rounded-lg lg:rounded-xl flex items-center justify-center text-yellow-500 text-lg lg:text-xl">
                  ⭐
                </div>
                <div>
                  <p className="text-[8px] lg:text-[9px] text-gray-400 font-semibold uppercase tracking-widest">
                    Success
                  </p>
                  <h3 className="font-semibold text-lg lg:text-2xl text-gray-900">
                    4.8/5
                  </h3>
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
