"use client";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import WhyHKNexus from "@/components/WhyHKNexus";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/AccordionItem";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <main>
        <Hero />

        <ServicesSection />
        <WhyHKNexus />
        <BlogSection />
        <FAQSection />
        <NewsletterSection />
      </main>
    </div>
  );
}
