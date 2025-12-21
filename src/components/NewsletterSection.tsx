"use client";

import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error("Failed to subscribe.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full pb-20 px-4">
      <div
        className="max-w-7xl mx-auto rounded-xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
        style={{
          background: `linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)`,
        }}
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold leading-[1.15] tracking-tight">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-white/90 text-lg font-medium max-w-md">
            Insights that elevate your customer experience strategy.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-white mb-3 font-medium text-base ml-1">
              Subscribe to Our Newsletter
            </label>

            {/* Input and Button Row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-white/10 backdrop-blur-sm text-white placeholder-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-lg bg-[#E0DDF7] text-[#594ad2] font-bold text-sm sm:text-base hover:bg-white transition-colors duration-200 shadow-lg whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {/* Checkbox Section */}
            <div className="flex items-center gap-3 ml-1">
              {/* Custom styled checkbox wrapper to match design aesthetics */}
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  required
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white bg-transparent checked:bg-white transition-all"
                />
                {/* SVG Checkmark icon that appears when checked */}
                <svg
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#594ad2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <label
                htmlFor="newsletter-consent"
                className="text-white text-xs lg:text-sm font-medium cursor-pointer select-none opacity-90 hover:opacity-100 transition-opacity"
              >
                I agree to receive email updates from HK Nexus.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
