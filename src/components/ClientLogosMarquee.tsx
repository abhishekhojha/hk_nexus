"use client";

import React from "react";

// Client data with testimonials - exported for use in other components
export const clients = [
  {
    name: "Rana Arts",
    logo: "/images/testimonials/rana-arts.png",
    person: "Syed Adnan Ali",
    designation: "Operations & Supply Chain Partner",
    testimonial:
      "HK Nexus Global has been more than a service provider — they've been a true operational partner for us. From managing logistics coordination and marketplace listings to handling material requirements and order supply, their team brought structure, reliability, and clarity to our operations. What impressed us most was their proactive approach and deep understanding of business workflows. With HK Nexus by our side, we've been able to scale smoothly and focus on growth with confidence.",
  },
  {
    name: "Biznweb",
    logo: "/images/testimonials/biznweb.jpeg",
    person: "Sikander Khan",
    designation: "Business & Digital Growth Partner",
    testimonial:
      "Working with HK Nexus Global transformed the way we plan and execute our business strategy. Their insights into marketing strategy, business demand forecasting, and in-depth business analysis helped us make smarter, data-driven decisions. Beyond strategy, their technical support team consistently delivered dependable solutions with speed and precision. HK Nexus Global doesn't just solve problems — they anticipate them and guide you forward.",
  },
  {
    name: "BlinkHost",
    logo: "/images/testimonials/blinkhost.png",
    person: "Rahul Kure",
    designation: "Digital & Customer Support Partner",
    testimonial:
      "HK Nexus Global played a critical role in strengthening our customer engagement and digital presence. Their expertise in digital marketing combined with seamless voice, chat, email, and technical support created a reliable support ecosystem for our customers. Their agents communicate with empathy, professionalism, and technical clarity — exactly what modern customers expect. HK Nexus Global helped us deliver a better customer experience, every single day.",
  },
  {
    name: "SPS",
    logo: "/images/testimonials/sps.jpeg",
    person: "Scholar Public School",
    designation: "Education Partner",
    testimonial:
      "HK Nexus Global has been a valuable partner in enhancing our parent and student communication services. Their call center support has streamlined admission inquiries, fee-related assistance, and daily school coordination with efficiency and care. The team communicates with professionalism, clarity, and empathy, ensuring every query is handled smoothly. With HK Nexus Global's support, we are able to deliver timely, reliable, and improved service experiences to our school community every day.",
  },
];

const ClientLogosMarquee = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-center text-lg font-semibold text-gray-500 uppercase tracking-wide">
          Trusted by Leading Companies
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-48 h-20 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-4 group">
                {client.logo && (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogosMarquee;
