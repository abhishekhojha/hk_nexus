"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description:
        "We build trust through transparent and honest communication.",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Innovation",
      description: "We constantly evolve to provide cutting-edge solutions.",
      icon: <Target className="w-6 h-6 text-primary" />,
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality service.",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8 text-white" />,
    },
    {
      value: "50+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8 text-white" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="w-8 h-8 text-white" />,
    },
    {
      value: "98%",
      label: "Retention Rate",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "HK Nexus transformed our customer support operations. Their team is professional, efficient, and truly cares about our success.",
      author: "David Miller",
      role: "COO, TechStream",
    },
    {
      quote:
        "The level of dedication and expertise they bring to the table is unmatched. We've seen a significant improvement in customer satisfaction.",
      author: "Elena Rodriguez",
      role: "Director of Operations, GlobalRetail",
    },
    {
      quote:
        "Partnering with HK Nexus was one of the best decisions we made. They seamlessly integrated with our team and processes.",
      author: "James Carter",
      role: "CEO, FinServe",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/team/sarah.jpg", // Placeholder path
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/team/michael.jpg", // Placeholder path
    },
    {
      name: "Jessica Williams",
      role: "Head of Operations",
      image: "/team/jessica.jpg", // Placeholder path
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-accent/10 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                HK Nexus
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with world-class support and technology. We
              are dedicated to bridging the gap between talent and opportunity.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-inner">
              {/* Placeholder for Story Image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Users className="w-20 h-20 opacity-20" />
                <span className="sr-only">Office Image Placeholder</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2020, HK Nexus started with a simple mission: to
                  provide businesses with reliable, high-quality support
                  services that feel like an extension of their own team.
                </p>
                <p>
                  What began as a small team of dedicated professionals has
                  grown into a global organization, serving clients across
                  various industries. We believe in the power of human
                  connection enhanced by technology.
                </p>
                <p>
                  Today, we continue to expand our capabilities, always staying
                  true to our core belief that great service is the foundation
                  of business success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-primary via-[#7a6ce4] to-secondary text-white shadow-xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 group hover:bg-white/5 rounded-xl transition-colors duration-300"
                >
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide every interaction and decision we
                make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-primary">
                    {/* Override icon color to use gradient text effect or just primary/secondary */}
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here is what our partners have
                to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg shadow-md">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <p className="text-gray-600 italic mb-6 pt-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-secondary font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate individuals driving our mission forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-accent transition-colors duration-300">
                    {/* Placeholder for Team Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 group-hover:bg-gray-200 transition-colors">
                      <Users className="w-16 h-16 opacity-30" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to work with us?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Join the hundreds of businesses that trust HK Nexus for their
              support needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
