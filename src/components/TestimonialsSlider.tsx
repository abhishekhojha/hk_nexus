"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { clients } from "./ClientLogosMarquee";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const currentClient = clients[currentIndex];

  return (
    <section className="w-full py-14 xl:py-16 px-6 xl:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl xl:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our partners.
          </p>
        </div>

        {/* Slider Card */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          {/* Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

            {/* Quote Icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full">
                <Quote className="w-6 h-6 text-primary/50" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Logo */}
              <div className="flex-shrink-0 w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-4 border border-gray-100">
                <img
                  src={currentClient.logo}
                  alt={currentClient.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {currentClient.name}
                  </h4>
                  <p className="text-gray-900 font-semibold">
                    {currentClient.person}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {currentClient.designation}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  &quot;{currentClient.testimonial}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-primary to-secondary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
