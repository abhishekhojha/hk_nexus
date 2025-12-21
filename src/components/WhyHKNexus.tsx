"use client";
import React, { useRef, useEffect } from "react";
import { CheckCircle2, Users, DollarSign, Globe, Shield } from "lucide-react";

const WhyHKNexus = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const cards = [
    {
      label: "RELIABILITY",
      title: "Reliable & Consistent Delivery",
      description:
        "Clients trust us to deliver on time, every time — with clear SLAs, real accountability, and zero guesswork.",
      icon: (
        <CheckCircle2 className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
      ),
    },
    {
      label: "EXPERTISE",
      title: "Skilled, Well-Trained Teams",
      description:
        "Our agents are professionally trained in communication, compliance, and customer empathy — ensuring every interaction reflects your brand positively.",
      icon: <Users className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    },
    {
      label: "VALUE",
      title: "Cost-Effective Without Compromise",
      description:
        "We offer enterprise-level service quality at competitive pricing, helping businesses scale efficiently without sacrificing performance.",
      icon: <DollarSign className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    },
    {
      label: "GLOBAL",
      title: "Global Coverage, Local Understanding",
      description:
        "With experience serving multiple regions and time zones, we provide 24/7 support while understanding local customer expectations.",
      icon: <Globe className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    },
    {
      label: "SECURITY",
      title: "Secure & Process-Driven Operations",
      description:
        "Data privacy, compliance, and structured workflows are built into everything we do — giving clients complete peace of mind.",
      icon: <Shield className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="w-full py-14 xl:py-16 px-6 xl:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl xl:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Why HK Nexus
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-4xl mx-auto">
            At HK Nexus, we don't just provide services — we build long-term
            partnerships. Businesses choose us because we combine people,
            process, and technology to deliver consistent, measurable results
            with a human touch.
          </p>
          <p className="text-gray-500 text-base md:text-lg font-medium max-w-3xl mx-auto mt-3">
            Our clients value us for our responsiveness, transparency, and
            commitment to quality, making us a trusted extension of their own
            teams.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-xl xl:text-2xl font-bold text-gray-900 mb-2">
            What Clients Appreciate About HK Nexus
          </h3>
        </div>

        {/* Video and Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left: Vertical Video */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg bg-black">
            <video
              ref={videoRef}
              src="/videos/home/why_hknexus.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right: Two Horizontal Images Stacked */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[242px] lg:h-[291px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/home/why_1.jpg"
                alt="Customer Service Excellence"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full h-[242px] lg:h-[291px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/home/why_2.jpg"
                alt="Intelligence Orchestration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 ${
                index === 3 || index === 4 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-6">
                <div className="p-2 bg-transparent">{card.icon}</div>
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
