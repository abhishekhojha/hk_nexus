"use client";
import React from "react";
import { Quote, CheckCircle2 } from "lucide-react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      title: "Reliability at Scale",
      quote:
        "HK Nexus delivers round-the-clock support without compromise. Whether it's peak volumes or complex campaigns, they scale smoothly and stay dependable.",
    },
    {
      title: "Quality You Can Hear",
      quote:
        "Their agents sound confident, empathetic, and well-trained. Customers feel heard—first time, every time.",
    },
    {
      title: "Global Mindset, Local Sensitivity",
      quote:
        "Multilingual capability with cultural understanding makes HK Nexus ideal for international markets.",
    },
    {
      title: "Process-Driven Excellence",
      quote:
        "Clear SOPs, strong QA, and transparent reporting give us confidence and control.",
    },
    {
      title: "Technology-Enabled Performance",
      quote:
        "From CRM integration to analytics and AI readiness, HK Nexus keeps operations modern and measurable.",
    },
    {
      title: "True Partnership",
      quote: "They don't just execute—they advise, optimize, and grow with us.",
    },
  ];

  const reasons = [
    "24/7/365 availability",
    "Consistent CSAT & SLA adherence",
    "Secure, compliant operations",
    "Fast onboarding & agile scaling",
    "Cost-effective without cutting corners",
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl xl:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-2">
            Trusted. Scalable. Human-First.
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-4xl mx-auto">
            Global clients view HK Nexus as a dependable partner that blends
            people, process, and technology to deliver consistent results across
            borders and time zones.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Key Client Impressions
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-gray-900" />
              </div>

              <div className="relative z-10">
                <h4 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  {testimonial.title}
                </h4>
                <p className="text-gray-600 font-medium text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Clients Stay Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white mb-12 mx-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Clients Stay
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/95 font-medium text-sm">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center bg-gray-50 rounded-xl p-8 border border-gray-100 mx-12">
          <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            In One Line
          </h4>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            HK Nexus is seen globally as a{" "}
            <span className="font-semibold text-gray-900">
              premium service partner
            </span>
            —where trust meets performance, and customer experience becomes a
            competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
