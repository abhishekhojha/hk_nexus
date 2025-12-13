"use client";

import React from "react";
import {
  Instagram,
  Facebook,
  ArrowRight,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-24 pb-12 px-6 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          {/* Column 1: Brand & Socials (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="relative w-48 h-24">
              <Image
                src="/logo21.png"
                alt="HK Nexus Global"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-10 max-w-sm">
              Where technology, talent, and 24/7 operations come together to
              power exceptional service.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-gray-900 hover:text-gray-600 hover:scale-110 transition-all duration-300"
              >
                <Linkedin strokeWidth={2} className="w-7 h-7" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-900 hover:text-gray-600 hover:scale-110 transition-all duration-300"
              >
                <Instagram strokeWidth={2} className="w-7 h-7" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="group hover:scale-110 transition-all duration-300"
              >
                {/* Creating the filled Facebook circle look */}
                <div className="bg-gray-900 text-white rounded-full p-1 group-hover:bg-gray-700 transition-colors">
                  <Facebook
                    strokeWidth={0}
                    fill="currentColor"
                    className="w-5 h-5"
                  />
                </div>
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="text-gray-900 hover:text-gray-600 hover:scale-110 transition-all duration-300"
              >
                <Youtube strokeWidth={2} className="w-7 h-7" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-900 hover:text-gray-600 hover:scale-110 transition-all duration-300"
              >
                <Twitter strokeWidth={2} className="w-7 h-7" />
              </Link>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Quick Links
            </h3>
            <ul className="space-y-5">
              {["About Us", "Services", "Why HK Nexus", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Contact Us"
                          ? "/contact"
                          : item === "About Us"
                          ? "/about"
                          : item === "Services"
                          ? "/services"
                          : item === "Why HK Nexus"
                          ? "/why-hk-nexus"
                          : "#"
                      }
                      className="text-gray-600 hover:text-[#594ad2] transition-colors font-medium text-[15px]"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Services (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Services
            </h3>
            <ul className="space-y-5">
              {[
                "Inbound Support",
                "Outbound Calling",
                "Technical Support",
                "Chat & Email Support",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#594ad2] transition-colors font-medium text-[15px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Contact & Support
            </h3>
            <ul className="space-y-5 mb-10">
              <li className="text-gray-600 font-medium text-[15px] hover:text-gray-900 cursor-default">
                1-800-123-4567
              </li>
              <li className="text-gray-600 font-medium text-[15px] hover:text-gray-900 cursor-pointer transition-colors">
                info@hknexusglobal.com
              </li>
              <li className="text-gray-600 font-medium text-[15px]">
                Mon–Fri, 9am–6pm
              </li>
            </ul>

            {/* CTA Button with Hover Fill Effect */}
            <Link href="/contact">
              <button className="group relative flex items-center justify-between w-full max-w-[220px] py-3.5 px-6 rounded-full border border-gray-300 overflow-hidden transition-all duration-300 hover:border-gray-900 hover:shadow-lg">
                {/* Background fill animation */}
                <div className="absolute inset-0 w-0 bg-gray-900 transition-all duration-[250ms] ease-out group-hover:w-full"></div>

                <span className="relative z-10 text-sm font-bold text-gray-700 group-hover:text-white transition-colors duration-200">
                  Talk to an expert
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm font-medium mb-4 md:mb-0">
            &copy; 2025 HK Nexus. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500 text-sm font-medium">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
