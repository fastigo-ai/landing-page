import React from 'react';

const Services = () => {
  const services = [
    { 
      title: "Macbook Support", 
      desc: "Specialised Support for macOS & Apple Devices. Right at Your Doorstep.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h16zM4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2H4z" />
        </svg>
      )
    },
    { 
      title: "Windows Support", 
      desc: "Complete windows solution: - installed, updated and optimized services at you Home.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" />
        </svg>
      )
    },
    { 
      title: "Networking", 
      desc: "Networking Setup & Support Service at Your Doorstep.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0114.142 0M2.828 9.9a13.5 13.5 0 0118.344 0" />
        </svg>
      )
    },
    { 
      title: "Hardware Repair", 
      desc: "Certified Hardware Repair Service Right Where You Are.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    { 
      title: "Data Recovery", 
      desc: "Get Your Lost Files Back Expert Data Recovery Service at Home.", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    { 
      title: "IT AMC", 
      desc: "Hassle-Free IT AMC Service Keep Your Systems Running All Year Long", 
      icon: (
        <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className=" mb-12 md:mb-20">
          <span className="text-[#4FB7D4] font-bold   text-[14px] md:text-[15px] mb-3 md:mb-4 pl-1 block">Skip the tech stress.</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-[4.5rem] font-bold mb-4  text-gray-900 tracking-tight leading-tight">Expert tech support <br className='-pb-4' />delivered fast </h2>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-[4.5rem] font-bold mb-4  text-gray-900 tracking-tight leading-tight">Expert tech support <br className='-pb-4' /> delivered fast</h2> */}
          <p className="text-gray-500 mx-auto text-[15px] md:text-sm font-medium leading-relaxed">Our team of verified Door2fy Professionals are always on time</p>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div key={i} className="reveal group p-6 md:p-8 bg-[#F8FDFF] rounded-[2rem] border border-[#E1F7F9] hover:border-[#4FB7D4] hover:bg-white transition-all duration-500 text-left flex flex-col items-start space-y-6 shadow-sm hover:shadow-xl">
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#E1F7F9] rounded-2xl flex items-center justify-center text-[#4FB7D4] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              
              {/* Content Container */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed font-medium line-clamp-3">{service.desc}</p>
                <div className="mt-auto">
                  <a href="#form-section" className="inline-flex items-center text-gray-900 font-bold text-sm md:text-base hover:text-[#4FB7D4] transition-colors group/link">
                    Enquire Now <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
