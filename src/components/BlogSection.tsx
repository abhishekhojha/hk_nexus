"use client";
import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";

// Sample blog data - replace with actual data from your backend/CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Customer Support: AI and Human Touch",
    excerpt:
      "Discover how combining AI technology with human expertise creates the perfect customer support experience.",
    image: "/images/blog/customer-support-ai.png",
    category: "Customer Support",
    date: "Dec 8, 2025",
    readTime: "5 min read",
    slug: "future-of-customer-support",
  },
  {
    id: 2,
    title: "Multilingual Support: Breaking Language Barriers",
    excerpt:
      "Learn how multilingual support can expand your business reach and improve customer satisfaction globally.",
    image: "/images/blog/multilingual-support.png",
    category: "Global Business",
    date: "Dec 5, 2025",
    readTime: "4 min read",
    slug: "multilingual-support-guide",
  },
  {
    id: 3,
    title: "10 Best Practices for Outbound Sales Success",
    excerpt:
      "Proven strategies and techniques to boost your outbound sales performance and close more deals.",
    image: "/images/blog/outbound-sales.png",
    category: "Sales",
    date: "Dec 1, 2025",
    readTime: "6 min read",
    slug: "outbound-sales-best-practices",
  },
];

const BlogSection = ({ title }: { title?: boolean }) => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-white">
      {/* Background Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        {title && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-4xl xl:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Latest Insights
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Expert tips, industry trends, and actionable strategies to grow
                your business.
              </p>
            </div>

            <Link
              href="/blog"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-primary/30 flex-shrink-0"
            >
              View All Articles
            </Link>
          </div>
        )}

        {/* Blog List - Alternating Layout */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={post.id}
                className={`bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group`}
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-0`}
                >
                  {/* Image Container */}
                  <div className="relative w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Category Badge */}
                    <div
                      className={`absolute top-6 ${
                        isEven ? "left-6" : "right-6"
                      } px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm shadow-lg`}
                      style={{
                        background: `linear-gradient(to right, var(--secondary), var(--primary))`,
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Meta Info */}
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-base group-hover:gap-4 transition-all w-fit"
                    >
                      Read More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
