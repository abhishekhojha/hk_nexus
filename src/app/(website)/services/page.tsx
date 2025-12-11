"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dot, Settings, Globe, Headset } from "lucide-react";
import { AccordionItem } from "./AccordionItem";
import ServiceAccordion from "@/components/ServiceAccordion";
import {
  coreServices,
  industryDetails,
  whyChooseUsCards,
  customerExperienceOverview,
  emergencyHelplineService,
  digitalTransformationOverview,
  digitalTransformationServices,
} from "./data";

// --- Data Definitions ---

export default function ServicesPage() {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number>(0);

  const handleIndustryToggle = (index: number) => {
    setActiveIndustryIndex(index);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span className="block mb-2">Transforming Customer Experience</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Across the Globe
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Delivering cutting-edge CX solutions powered by technology,
            expertise, and agility to exceed customer expectations worldwide.
          </p>
        </div>
      </section>

      {/* --- Main Services Overview --- */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
              Our Core Strengths
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customized Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Customized Solutions
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our unique CX solutions at HK Nexus Global are built on a
                foundation of cutting-edge technology, team expertise, and
                agility. We are able to anticipate consumer needs and
                continuously surpass their expectations thanks to this
                combination.
              </p>
            </div>

            {/* Worldwide Reach */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Worldwide Reach
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                HK Nexus Global, which has strategically placed offices all
                around the world, provides multilingual services,
                round-the-clock assistance, and a thorough awareness of various
                cultural nuances with the goal of increasing client
                satisfaction.
              </p>
            </div>

            {/* 360° Customer Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Headset className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  360° Customer Experience
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With our omni-channel solutions, we guarantee a 360° customer
                experience. We use business intelligence to make strategic
                decisions and provide customized inbound, outbound, staff
                augmentation, and backend solutions to effectively address a
                range of company requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Interactive Services Grid --- */}
      <section className="relative w-full py-24 px-4 overflow-hidden bg-white">
        {/* SVG Gradient Definition for Icons */}
        <svg width="0" height="0" className="absolute block">
          <defs>
            <linearGradient
              id="icon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="var(--secondary)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="p-8 flex-grow flex flex-col items-start">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-500 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Emergency Helpline Section --- */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold tracking-wide mb-6">
                Emergency Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {emergencyHelplineService.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {emergencyHelplineService.description}
              </p>

              {/* CTA Box */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {emergencyHelplineService.cta.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {emergencyHelplineService.cta.subtitle}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/emergency-helpline.png"
                  alt="Emergency Helpline Control Center"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Digital Transformation Section --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
              Digital Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {digitalTransformationOverview.title}
            </h2>
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold mb-4">
              {digitalTransformationOverview.subtitle}
            </p>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              {digitalTransformationOverview.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <Image
                src="/images/services/digital-transformation.png"
                alt="Digital Transformation with AI"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Services Accordion */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Digital Transformation Services
            </h3>
            <ServiceAccordion services={digitalTransformationServices} />
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-secondary to-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-xl"
            >
              Contact Us to Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* --- Detailed Expandable Sections (Industry Specific) --- */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-3xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <span className="inline-block px-4 py-2 rounded-full bg-[#594ad2]/10 text-[#594ad2] text-sm font-semibold tracking-wide mb-8">
              Specialized Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Industry <span className="text-[#594ad2]">Expertise</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-medium">
              We tailor our solutions to meet the unique challenges and
              compliance requirements of your specific industry.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-3 w-full">
            {industryDetails.map((industry, index) => (
              <AccordionItem
                key={industry.id}
                title={industry.title}
                content={industry.content}
                icon={industry.icon}
                isOpen={activeIndustryIndex === index}
                onClick={() => handleIndustryToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Delivering excellence through people, process, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 border border-gray-100"
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

      {/* --- CTA Footer --- */}
      <section className="w-full py-20 px-4 flex justify-center items-center bg-white">
        <div className="max-w-5xl w-full relative rounded-3xl p-8 lg:p-12 flex flex-col items-center text-center bg-gradient-to-br from-[#BC55D8] via-[#B06CE5] to-[#9FD6FF] shadow-2xl">
          <div className="bg-white rounded-2xl p-8 lg:p-12 w-full shadow-lg max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              Get a customized pricing estimate or connect directly with our
              experts to discuss your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200 text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-colors duration-200 text-center cursor-pointer hover:shadow-md"
              >
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
