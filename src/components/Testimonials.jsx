import React from 'react';
import { Quote } from "lucide-react";

const Testimonials = () => {
const reviews = [
  { 
    name: "Aarav Sharma", 
    location: "Noida Sector 62",
    rating: 5, 
    review: "Door2Fy fixed my laptop quickly. Professional engineer and smooth service.", 
    id: 1 
  },
  { 
    name: "Sneha Verma", 
    location: "Indirapuram",
    rating: 5, 
    review: "Quick response and efficient networking support by Door2Fy.", 
    id: 2 
  },
  { 
    name: "Karan Mehta", 
    location: "Greater Noida",
    rating: 5, 
    review: "Excellent hardware repair service. My MacBook was repaired faster than expected and is working perfectly now.", 
    id: 3 
  },
  { 
    name: "Ritika Singh", 
    location: "Delhi NCR",
    rating: 5, 
    review: "Highly professional team with genuine support. The technician arrived on time and handled the system setup perfectly.", 
    id: 4 
  },
  { 
    name: "Aditya Rao", 
    location: "Sector 18 Noida",
    rating: 5, 
    review: "Door2Fy provides reliable IT services at affordable pricing. Their remote support saved a lot of time for our office.", 
    id: 5 
  },
  { 
    name: "Pooja Malhotra", 
    location: "Gurgaon",
    rating: 5, 
    review: "Great experience with their networking and AMC services. The support team was polite, responsive, and technically strong.", 
    id: 6 
  }
];

  // Helper to render a card with fixed height and width for a uniform "3D" look
  const ReviewCard = ({ r }) => (
    <div
      className="w-[320px] md:w-[400px] h-[220px] md:h-[240px] p-6 md:p-8 rounded-[2.5rem] bg-white border border-gray-100 relative overflow-hidden flex-shrink-0 mx-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-between"
    >
      {/* Radial Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #4FB7D4 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Stars at Top */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#4FB7D4] fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review Text in Middle */}
        <p className="text-gray-800 leading-relaxed font-medium text-sm md:text-base mb-4 flex-grow line-clamp-3">
          “{r.review}”
        </p>
        
        {/* Bottom Section: Avatar, Name, Location */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Circular Avatar */}
          <div className="w-10 h-10 rounded-full bg-[#E1F7F9] flex items-center justify-center font-bold text-[#4FB7D4] text-base">
            {r.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-[15px] leading-tight">{r.name}</h4>
            <p className="text-gray-500 text-[11px] md:text-[12px] font-medium">{r.location}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-8 lg:py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8  mb-16 md:mb-18">
        <span className="text-[#4FB7D4] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block pl-4">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-[4.5rem] font-bold text-gray-900 tracking-tight leading-tight">Trusted by Door2fy  <br />Tech Experts.</h2>
        <p className="text-gray-500 mt-4  mx-auto font-medium text-base md:text-sm pl-4">Professional tech assistance, delivered when you need it.</p>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full flex flex-col gap-8 md:gap-12">
        {/* Row 1: Right to Left */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-2">
          {[...reviews, ...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={`r1-${idx}`} r={r} />
          ))}
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-max py-2">
          {[...reviews, ...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={`r2-${idx}`} r={r} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused !important;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 35s; }
          .animate-marquee-reverse { animation-duration: 35s; }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
