"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/AccordionItem";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Users,
  HelpCircle,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const departments = [
    {
      name: "Sales Department",
      description: "For inquiries about our services and pricing.",
      email: "sales@hknexus.com",
      phone: "+1 (800) 123-4567",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      name: "Technical Support",
      description: "Get help with technical issues and troubleshooting.",
      email: "support@hknexus.com",
      phone: "+1 (800) 123-4568",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      name: "Partnerships",
      description: "Explore collaboration opportunities with us.",
      email: "partners@hknexus.com",
      phone: "+1 (800) 123-4569",
      icon: <Users className="w-6 h-6" />,
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
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Reach out
              to us and let's start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">1-800-123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Mon-Fri 9am-6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@hknexus.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Online support 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-gray-600">
                      123 Business Avenue, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Connect with Specific Departments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the right team to help you with your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{dept.description}</p>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4 text-secondary" />
                      {dept.email}
                    </a>
                    <a
                      href={`tel:${dept.phone}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 text-secondary" />
                      {dept.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-[400px] relative shadow-lg border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222781.96901770242!2d77.2410785894995!3d23.199639466317002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1764184694315!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>

              {/* Location Card Overlay */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm hidden md:block pointer-events-none border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  HK Nexus HQ
                </h3>
                <p className="text-gray-600 text-sm mb-4 pl-6">
                  Bhopal, Madhya Pradesh
                  <br />
                  India
                </p>
                <a
                  href="https://maps.google.com?q=Bhopal,+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline pointer-events-auto pl-6 flex items-center gap-1"
                >
                  Get Directions{" "}
                  <span className="text-lg leading-none">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
