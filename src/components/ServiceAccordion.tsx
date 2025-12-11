"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ServiceAccordionProps {
  services: {
    id: string;
    title: string;
    overview: string;
    benefits: string[];
    icon: React.ReactNode;
  }[];
}

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 text-left">
                {service.title}
              </h3>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className="px-8 pb-8 pt-4 border-t border-gray-100">
              {/* Overview */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.overview}
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Key Enterprise Benefits
                </h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
