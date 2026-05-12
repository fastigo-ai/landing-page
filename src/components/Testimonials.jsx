import React from 'react';
import { Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { 
      name: "Priyanshu", 
      rating: 5, 
      review: "Great experience. Highly recommended for any IT issues. Very professional and on time.", 
      id: 1 
    },
    { 
      name: "Amit Singh", 
      rating: 5, 
      review: "Pehle clients dhundna mushkil tha, ab Door2fy portal se regular work mil raha hai. Payment process bhi smooth hai. — Amit Singh, Network Engineer", 
      id: 2 
    },
    { 
      name: "Rashi", 
      rating: 5, 
      review: "Door2fy saved me --By sending Engineer on time and they fixed my laptop properly. Best doorstep service.", 
      id: 3 
    },
    { 
      name: "Vicky", 
      rating: 5, 
      review: "Engineer reached in 8 minutes. Laptop fixed at home. Super smooth experience. Truly impressed by the speed.", 
      id: 4 
    },
    { 
      name: "Rohit", 
      rating: 5, 
      review: "Knowledgeable technicians and very quick service. Best in the region for both hardware and software issues.", 
      id: 5 
    },
    { 
      name: "Sonia", 
      rating: 5, 
      review: "Excellent support team. They followed up until my issue was completely resolved. Great customer care.", 
      id: 6 
    }
  ];

  // Helper to render a card with fixed height and width for a uniform "3D" look
  const ReviewCard = ({ r }) => (
    <div
      className="w-[340px] md:w-[440px] h-[220px] md:h-[260px] p-8 md:p-12 rounded-[3rem] bg-[#F8FDFF] border border-[#E1F7F9] relative overflow-hidden flex-shrink-0 mx-5 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(79,183,212,0.12)] hover:bg-white flex flex-col justify-between"
    >
      {/* Radial Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #4FB7D4 2px, transparent 2px)", backgroundSize: "24px 24px" }} />
      
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-5">
            {/* Avatar using Initials */}
            <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] flex items-center justify-center font-extrabold text-[#4FB7D4] shadow-sm text-lg md:text-xl transform group-hover:scale-110 transition-transform">
              {r.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-lg md:text-xl tracking-tight">{r.name}</h4>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <Quote className="text-[#4FB7D4]/20 w-10 h-10 md:w-12 md:h-12 rotate-180" fill="currentColor" />
        </div>
        
        <p className="text-gray-600 leading-relaxed font-bold text-sm md:text-base line-clamp-3 tracking-tight">
          "{r.review}"
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16 md:mb-24">
        <span className="text-[#4FB7D4] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">What Engineers & Clients Say</h2>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-medium text-base md:text-lg">Real feedback from our trusted partners and happy customers across the country.</p>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full flex flex-col gap-8 md:gap-12">
        {/* Row 1: Right to Left */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-4">
          {[...reviews, ...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={`r1-${idx}`} r={r} />
          ))}
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-max py-4">
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
