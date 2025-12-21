"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Briefcase, Phone, Headset } from "lucide-react";

export default function QuickConnectButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-24 right-12 z-50 ">
        {/* Options Menu */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="p-2 space-y-2 min-w-[240px]">
              {/* For Clients */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-200 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Business Purpose</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/80">
                    Get in touch with us
                  </div>
                </div>
              </Link>

              {/* For Employees */}
              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-200 group"
              >
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Briefcase className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Career Purpose</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/80">
                    Join our team
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`border-2 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 ${
            isOpen ? "rotate-90" : "animate-pulse-glow"
          }`}
          aria-label="Quick Connect"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <Headset className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom CSS for glow animation */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(89, 74, 210, 0.4),
              0 0 40px rgba(89, 74, 210, 0.2), 0 0 60px rgba(89, 74, 210, 0.1);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(89, 74, 210, 0.6),
              0 0 60px rgba(89, 74, 210, 0.4), 0 0 90px rgba(89, 74, 210, 0.2);
            transform: scale(1.05);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
