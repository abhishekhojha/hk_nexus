"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Import this
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 2. Get current path

  // 3. Close menu ONLY when the path changes (navigation completes)
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blog" },
  ];

  return (
    <>
      <nav className="z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-2 sticky md:relative top-0 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center z-50">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-12 w-12 md:w-15 md:h-15">
                  <Image
                    src="/mainlogo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <span className="text-primary font-bold md:text-xl text-base tracking-tight">
                  HK Nexus Global
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/20"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`fixed inset-0 z-[45] md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sliding Drawer */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[350px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col h-full ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-20 flex items-center justify-between px-6 border-b border-gray-50">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Menu
            </span>
            {/* Close Button inside Drawer for better UX */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between p-4 rounded-xl text-lg font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-500 ease-out ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
              >
                {item.name}
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
              </Link>
            ))}

            <hr className="my-4 border-gray-100" />

            <Link
              href="#"
              className={`w-full flex items-center justify-center px-6 py-4 text-base font-bold text-white transition-all duration-500 ease-out bg-primary rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-[0.98] ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + navLinks.length * 50}ms` }}
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
