import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// 1. Data Structure
const faqData = [
  {
    question: "What services does HK Nexus provide?",
    answer:
      "We deliver 24/7 multilingual contact center solutions including inbound customer support, outbound sales & collections, technical support.",
  },
  {
    question: "Do you support multiple languages?",
    answer:
      "Yes, we support over 30 languages with native-level fluency to ensure seamless communication globally.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Our pricing is customized based on seat count, language requirements, and support hours. Contact us for a tailored quote.",
  },
  {
    question: "What contract terms do you offer?",
    answer:
      "We offer flexible contract terms ranging from month-to-month pilots to long-term annual agreements depending on your needs.",
  },
];

// 2. Single Accordion Item Component
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden mb-4 transition-colors duration-300 ${
        isOpen ? "bg-gray-50 shadow-xl" : "bg-gray-50/80 hover:bg-gray-50"
      }`}
    >
      {/* Clickable Header */}
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-8">
          {question}
        </h3>

        {/* Icon Container - Purple circle */}
        <div
          className={`flex-shrink-0 w-10 h-10 bg-[#594ad2] rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="text-white w-6 h-6" strokeWidth={2.5} />
        </div>
      </button>

      {/* Expandable Content Body */}
      {/* Using a grid transition trick for smooth height animation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-base leading-relaxed px-6 pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// 3. Main FAQ Section Component
const FAQSection = () => {
  // State to track which active index is open. 0 means the first one is open by default.
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto bg-white w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Left Column: Header Info (Takes up 2/5 columns on large screens) */}
        <div className="lg:col-span-2 lg:sticky lg:top-8">
          {/* Pill Label */}
          <span className="inline-block px-4 py-2 rounded-full bg-[#594ad2]/10 text-[#594ad2] text-sm font-semibold tracking-wide mb-8">
            Need clarity?
          </span>

          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked <span className="text-[#594ad2]">Questions</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
            Quick answers about our services, security, pricing and onboarding.
          </p>
        </div>

        {/* Right Column: Accordion Stack (Takes up 3/5 columns on large screens) */}
        <div className="lg:col-span-3 w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
