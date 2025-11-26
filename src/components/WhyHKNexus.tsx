"use client";
import React, { useState } from 'react';
import { User, HeartHandshake, RefreshCw, X } from 'lucide-react';

const WhyHKNexus = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "7dQYLzW-7yU"; // The ID from your URL

  const cards = [
    {
      label: "VISION",
      title: "Leadership That Sets Standards",
      description: "Focused on excellence, guided by experts.",
      icon: <User className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    },
    {
      label: "ALWAYS",
      title: "Global Support, Anytime",
      description: "Multilingual teams delivering 24/7 coverage.",
      icon: <HeartHandshake className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    },
    {
      label: "INTEGRATION",
      title: "Technology + Talent Aligned",
      description: "Advanced systems paired with human precision.",
      icon: <RefreshCw className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-gray-100"> 
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why HK Nexus
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Where Expertise, Reliability, and Global Support Come Together
          </p>
        </div>

        {/* --- Video Thumbnail Section --- */}
        <div 
          className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-sm mb-12 group cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Dynamic YouTube Thumbnail */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay (Darken) */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full border-[3px] border-white flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-lg">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                 <path d="M5 3l14 9-14 9V3z" />
               </svg>
            </div>
          </div>
        </div>

        {/* --- Video Popup Modal --- */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
            onClick={() => setIsVideoOpen(false)} // Close when clicking background
          >
            <div 
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside video container
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* YouTube Iframe with Autoplay */}
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-6">
                <div className="p-2 bg-transparent">
                  {card.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">
                  {card.label}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyHKNexus;