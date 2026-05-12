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
      className="w-[320px] md:w-[420px] h-[200px] md:h-[240px] p-6 md:p-10 rounded-[2.5rem] bg-[#F8FDFF]/80 border border-cyan-100 border-dashed relative overflow-hidden flex-shrink-0 mx-4 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(79,183,212,0.15)] hover:bg-white flex flex-col justify-between"
    >
      {/* Radial Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #4FB7D4 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
      
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            {/* Avatar using Initials */}
            <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center font-bold text-cyan-600 shadow-sm text-base md:text-lg">
              {r.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg">{r.name}</h4>
              <div className="flex gap-0.5 text-yellow-400 text-[10px] md:text-[11px]">
                {Array(r.rating).fill("⭐").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
          <Quote className="text-gray-200/60 w-8 h-8 md:w-10 md:h-10 rotate-180" fill="currentColor" />
        </div>
        
        <hr className="border-t border-dashed border-cyan-100 mb-6" />
        
        <p className="text-gray-600 leading-relaxed font-normal text-sm md:text-base line-clamp-3">
          {r.review}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center mb-16">
        <span className="text-cyan-600 font-semibold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">What Engineers & Clients Say</h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto font-normal">Real feedback from our trusted partners and happy customers across the country.</p>
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
