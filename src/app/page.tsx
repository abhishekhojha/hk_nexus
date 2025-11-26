"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";
import WhyHKNexus from "@/components/WhyHKNexus";
import FAQSection from "@/components/AccordionItem";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <main>
        <Hero />
    
        <ServicesSection />
        <WhyHKNexus />
        <FAQSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}
