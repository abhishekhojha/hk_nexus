import React from 'react';
import { Calendar, Headset, TrendingUp, Settings, Languages } from 'lucide-react';

// 1. Define the Data
const services = [
  {
    title: "Inbound Customer Support",
    description: "Fast, friendly, 24/7 customer assistance for queries, orders, and issue resolution.",
    icon: <Headset className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />,
  },
  {
    title: "Outbound Sales and Telemarketing",
    description: "Targeted outbound calling to generate leads, qualify prospects, and close sales.",
    icon: <TrendingUp className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />,
  },
  {
    title: "Technical Support",
    description: "L1–L3 support for troubleshooting software, hardware, and app issues.",
    icon: <Settings className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />,
  },
  {
    title: "Multilingual Support",
    description: "Native-level agents offering support in multiple regional & global languages.",
    icon: <Languages className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />,
  }
];

const ServicesSection = () => {
  return (
    <section className="relative w-full pb-16 px-4 overflow-hidden bg-white">
      {/* Background Decorative Blob (Subtle wave effect from top left) */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />

      {/* SVG Gradient Definition for Icons */}
      <svg width="0" height="0" className="absolute block">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for customer support, sales, and multilingual communication.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col items-start">
                <div className="mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Button */}
              {/* Using CSS variables for the exact gradient: secondary (pink) -> primary (purple) */}
              <button 
                className="w-full py-4 px-6 flex justify-between items-center text-white font-medium transition-opacity hover:opacity-90 cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--secondary), var(--primary))`
                }}
              >
                <span className="text-sm font-semibold tracking-wide">Book a Consultation</span>
                <Calendar className="w-5 h-5 opacity-90" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;