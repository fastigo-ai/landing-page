import React from "react";

const Partner = () => {
  return (
    <section id="form-section" className="bg-white overflow-hidden relative pb-16 lg:pb-24">
      {/* Decorative background element for section contrast */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#F0F9FF] to-white -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col items-start text-left">
            <span className="uppercase tracking-[4px] text-cyan-600 text-[10px] md:text-[11px] font-semibold block mb-4">
              Partner With Us
            </span>
            <h2 className="text-3xl lg:text-5xl leading-[1.2] font-semibold text-gray-900 mb-8 tracking-tight">
              Become a <br />
              <span className="text-[#4FB7D4]">Door2fy</span> Partner
            </h2>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 font-normal">
              Join our network of elite experts and grow your business with the most trusted IT brand in the region.
            </p>
            {/* Bullet Points */}
            <div className="space-y-6 w-full">
              {[
                "Get more high-quality leads and grow your business",
                "Flexible work schedules and higher earnings",
                "Be part of a trusted and premium partner brand",
                "24/7 dedicated partner support and training"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-1 rounded-full bg-cyan-500 flex items-center justify-center text-white">
                    <svg className="w-3 md:w-3.5 h-3 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High Contrast Form */}
          <div className="relative">
            {/* Subtle glow behind the form */}
            <div className="absolute -inset-4 bg-cyan-100/30 rounded-[3rem] blur-2xl -z-10"></div>
            
            <form className="relative z-10 space-y-6 bg-[#EEF7FA] p-6 md:p-8 lg:p-12 rounded-[2.5rem] border border-cyan-100 shadow-[0_30px_60px_rgba(79,183,212,0.15)]">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-2">Registration Form</h3>
                <p className="text-gray-400 text-sm text-center font-normal">Join 100+ partners across the country.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-[#0F5E75] uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl bg-white border-2 border-transparent focus:border-cyan-400 text-gray-800 text-sm outline-none transition-all placeholder:text-gray-300 shadow-sm font-normal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-[#0F5E75] uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl bg-white border-2 border-transparent focus:border-cyan-400 text-gray-800 text-sm outline-none transition-all placeholder:text-gray-300 shadow-sm font-normal"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-[#0F5E75] uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+91 00000 00000"
                    className="w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl bg-white border-2 border-transparent focus:border-cyan-400 text-gray-800 text-sm outline-none transition-all placeholder:text-gray-300 shadow-sm font-normal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold text-[#0F5E75] uppercase tracking-widest ml-1">Service Interest</label>
                  <select
                    className="w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl bg-white border-2 border-transparent focus:border-cyan-400 text-gray-800 text-sm outline-none appearance-none cursor-pointer shadow-sm font-normal"
                  >
                    <option value="">Select Category</option>
                    <option value="macbook">MacBook Support</option>
                    <option value="windows">Windows / Desktop</option>
                    <option value="networking">IT Networking</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-[#0F5E75] uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your background..."
                  className="w-full px-5 md:px-6 py-4 md:py-5 rounded-2xl bg-white border-2 border-transparent focus:border-cyan-400 text-gray-800 text-sm outline-none resize-none transition-all placeholder:text-gray-300 shadow-sm font-normal"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-14 md:h-16 rounded-2xl bg-[#4FB7D4] hover:bg-[#0F5E75] text-white text-sm font-semibold uppercase tracking-widest shadow-[0_15px_30px_rgba(79,183,212,0.3)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
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