"use client";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import WhyHKNexus from "@/components/WhyHKNexus";
import ClientTestimonials from "@/components/ClientTestimonials";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/AccordionItem";
import NewsletterSection from "@/components/NewsletterSection";
import QuickConnectButton from "@/components/QuickConnectButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Users, Globe, Briefcase, Building2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Our incredible Workforce",
      icon: <Users className="w-8 h-8 text-white" />,
    },
    {
      value: 16,
      suffix: "+",
      label: "Languages",
      icon: <Globe className="w-8 h-8 text-white" />,
    },
    {
      value: 10,
      suffix: "+",
      label: "Industries Served",
      icon: <Briefcase className="w-8 h-8 text-white" />,
    },
    {
      value: 5,
      suffix: "+",
      label: "Clients",
      icon: <Building2 className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 ">
      <main>
        <Hero />
        <section className="mb-30 py-10 xl:py-12 px-8 xl:px-16 bg-gradient-to-r from-primary via-[#7a6ce4] to-secondary text-white shadow-xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300"
                >
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ServicesSection />
        <WhyHKNexus />
        <ClientTestimonials />
        <FAQSection />
        <NewsletterSection />
      </main>

      {/* Quick Connect Button */}
      <QuickConnectButton />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
