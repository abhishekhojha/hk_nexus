"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    {
      type: "image" as const,
      image: "/images/home/slider/1.png",
      title: "Customer Service in 360-degree",
      subtitle: "Scalable, virtual, and real",
      description:
        "AI-powered contact center service provider that provides a full range of services intended to improve the client experience for companies all over the world. Examine our options.",
    },
    {
      type: "image" as const,
      image: "/images/home/slider/2.png",
      title: "INTELLIGENCE ORCHESTRATION WITH EXCELLENCE",
      subtitle: "AI that grows. knowledge that lasts.",
      description:
        "At HK Nexus Global, we combine innovation and AI-powered solutions with human knowledge to improve experience and performance at every stage. We create solutions that are tailored to your objectives and environment thanks to our extensive industry knowledge and decades of operational expertise. We precisely handle changing demands, issues, and goals while guiding customers through their transformation journey in a clear and collaborative manner.",
    },
    {
      type: "image" as const,
      image: "/images/home/slider/3.png",
      title: "Powering Global Business Excellence",
      subtitle: "Technology meets human expertise",
      description:
        "Delivering world-class customer support solutions that combine cutting-edge AI technology with experienced professionals. We empower businesses worldwide with 24/7 multilingual support, ensuring exceptional service delivery across all touchpoints and driving measurable results for your organization.",
    },
    {
      type: "video" as const,
      video: "/videos/home/slider.mp4",
      title: "Experience Excellence in Action",
      subtitle: "See our solutions come to life",
      description:
        "Watch how we transform customer experiences through innovative technology and dedicated support teams working around the clock to deliver exceptional results.",
    },
  ];

  // Set video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, [currentSlide]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="w-full">
        {/* Full Width Image Slider Container */}
        <div className="relative h-[450px] lg:h-[450px] xl:h-[480px] w-full overflow-hidden group">
          {/* Slider Images/Videos with Overlay */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image or Video */}
              {slide.type === "image" ? (
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              )}

              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24">
                <div className="max-w-4xl w-full text-center text-white">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-extrabold tracking-tight mb-3 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold mb-4 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm sm:text-sm lg:text-sm xl:text-sm max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* <h5 className="text-xs md:text-lg text-gray-500 flex items-center justify-center">
          <Dot className="text-green-500 h-12 w-12" /> 24/7 availability, 40%
          cost savings, multilingual reach
        </h5> */}
        {/* <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 my-6">
          <span className="block">Powering World-Class Customer</span>
          <span>Support for </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Global Businesses
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xs md:text-lg text-gray-500 mb-10">
          Where technology, talent, and 24/7 operations come together to power
          exceptional service.
        </p> */}
      </div>
    </section>
  );
}
