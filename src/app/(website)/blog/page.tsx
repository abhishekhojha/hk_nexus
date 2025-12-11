"use client";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <main>
        <section className="relative pt-20 pb-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
              <span>Our</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Blogs
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10">
              Read our latest insights and learn how to improve your business.
            </p>
          </div>
        </section>
        <BlogSection />
        <NewsletterSection />
      </main>
    </div>
  );
}
