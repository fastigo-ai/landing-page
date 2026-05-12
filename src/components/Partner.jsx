import React from "react";

const Partner = () => {
  return (
    <section id="form-section" className="bg-white overflow-hidden relative py-20 lg:py-32">
      {/* Decorative background element for section contrast */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#F8FDFF] to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col items-start text-left">
            <span className="uppercase tracking-[0.4em] text-[#4FB7D4] text-[10px] md:text-[11px] font-bold block mb-6">
              Partner With Us
            </span>
            <h2 className="text-4xl lg:text-6xl leading-[1.1] font-extrabold text-gray-900 mb-8 tracking-tight">
              Become a <br />
              <span className="text-[#4FB7D4]">Door2fy</span> Partner
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 font-medium max-w-lg">
              Join our network of elite experts and grow your business with the most trusted IT brand in the region.
            </p>
            {/* Bullet Points */}
            <div className="space-y-8 w-full">
              {[
                "Get more high-quality leads and grow your business",
                "Flexible work schedules and higher earnings",
                "Be part of a trusted and premium partner brand",
                "24/7 dedicated partner support and training"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 mt-1 rounded-full bg-[#4FB7D4] flex items-center justify-center text-white shadow-lg shadow-[#4FB7D4]/20 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-bold tracking-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High Contrast Form */}
          <div className="relative">
            {/* Subtle glow behind the form */}
            <div className="absolute -inset-6 bg-[#4FB7D4]/10 rounded-[3rem] blur-3xl -z-10"></div>
            
            <form className="relative z-10 space-y-7 bg-white p-8 md:p-10 lg:p-14 rounded-[3rem] border border-[#E1F7F9] shadow-[0_30px_70px_rgba(79,183,212,0.12)]">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-3 tracking-tight">Registration Form</h3>
                <p className="text-gray-500 text-sm md:text-base text-center font-medium">Join 100+ partners across the country.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <div className="space-y-2.5">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <div className="space-y-2.5">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+91 00000 00000"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Service Interest</label>
                  <div className="relative">
                    <select
                      className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none appearance-none cursor-pointer shadow-sm font-bold"
                    >
                      <option value="">Select Category</option>
                      <option value="macbook">MacBook Support</option>
                      <option value="windows">Windows / Desktop</option>
                      <option value="networking">IT Networking</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your background..."
                  className="w-full px-6 md:px-7 py-5 md:py-6 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none resize-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-16 md:h-20 rounded-2xl bg-[#4FB7D4] hover:bg-[#3EA2BE] text-white text-sm md:text-base font-extrabold uppercase tracking-widest shadow-[0_15px_40px_rgba(79,183,212,0.35)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              >
                Send Partnership Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
