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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Blogs
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

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(to right, var(--secondary), var(--primary))`,
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
