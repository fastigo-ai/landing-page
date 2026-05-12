import React from 'react';

const Services = () => {
  const services = [
    { 
      title: "Macbook Support", 
      desc: "Specialised support for macOS optimization and Apple device troubleshooting.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h16zM4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2H4z" />
        </svg>
      )
    },
    { 
      title: "Windows Support", 
      desc: "OS installation, driver setup, updates, and performance tuning.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
      )
    },
    { 
      title: "Networking", 
      desc: "Router configuration, WiFi optimization, and secure network setup.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0114.142 0M2.828 9.9a13.5 13.5 0 0118.344 0" />
        </svg>
      )
    },
    { 
      title: "Hardware Repair", 
      desc: "Screen replacement, keyboard fix, and internal component repairs.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    { 
      title: "Data Recovery", 
      desc: "Safe retrieval of lost documents, photos, and critical business data.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    { 
      title: "IT AMC", 
      desc: "Annual Maintenance Contracts for proactive business IT management.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <section className="mb-12 md:mb-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 text-center">
        <span className="text-[#4FB7D4] font-semibold uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-3 md:mb-4 block">Our Services</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900 tracking-tight leading-tight">Complete IT Solutions for Every Need</h2>
        <p className="text-gray-400 mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">From technical support to enterprise solutions, we've got you covered.</p>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {services.map((service, i) => (
            <div key={i} className="reveal group p-4 md:p-8 bg-[#F8FDFF] rounded-[1.5rem] md:rounded-[2rem] border border-[#E1F7F9] hover:border-[#4FB7D4] hover:bg-white transition-all duration-500 text-left flex flex-col md:flex-row items-start md:items-start space-y-4 md:space-y-0 md:space-x-6 shadow-sm hover:shadow-xl">
              {/* Icon Container */}
              <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-[#E1F7F9] rounded-xl md:rounded-2xl flex items-center justify-center text-[#4FB7D4] transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              
              {/* Content Container */}
              <div className="flex flex-col">
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-900 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-[10px] md:text-[13px] mb-4 md:mb-6 leading-relaxed font-normal line-clamp-2 md:line-clamp-none">{service.desc}</p>
                <a href="#form-section" className="inline-flex items-center text-gray-700 font-semibold text-[9px] md:text-[13px] hover:text-[#4FB7D4] transition-colors group/link">
                  Enquire Now <span className="ml-1 md:ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
