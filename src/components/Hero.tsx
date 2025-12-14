import { Dot } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <section className="w-full md:pt-16 pt-10 flex justify-center items-center">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
            {/* Left Column: Image & Testimonial (70% width) */}
            <div className="relative h-full mb-4 md:mb-0 md:mr-4">
              {/* Main Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Customer Support Agent"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Testimonial Card */}
              {/* <div className="bg-white p-6 rounded-2xl shadow-xl absolute top-1/2 -translate-y-1/2 left-4 lg:-left-8 max-w-xs w-[calc(100%-2rem)] lg:w-80 z-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-bold text-gray-900">Denny Jones</span>
                </div>
                <p className="text-gray-600 text-sm mb-2 text-left leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vehicula massa in enim luctus. Rutrum arcu.
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400"/>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Right Column: CTA Card (30% width) */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl p-6 lg:p-8 flex items-center bg-gradient-to-br from-[#BC55D8] via-[#B06CE5] to-[#9FD6FF]">
              {/* White Content Box */}
              <div className="bg-white rounded-3xl p-6 lg:p-8 w-full shadow-2xl flex flex-col justify-center h-auto min-h-[60%]">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Ready to Scale <br className="hidden lg:block" /> Customer
                  Support?
                </h2>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  Get a customized pricing estimate or connect directly with our
                  experts.
                </p>

                {/* Buttons stack on the narrower 30% column to prevent breaking */}
                <div className="flex flex-col gap-3">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 text-center cursor-pointer">
                    Get a Free Quote
                  </button>
                  <Link
                    className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-200 text-center cursor-pointer"
                    href="/contact"
                  >
                    Talk to an expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h5 className="text-xs md:text-lg text-gray-500 flex items-center justify-center">
          <Dot className="text-green-500 h-12 w-12" /> 24/7 availability, 40%
          cost savings, multilingual reach
        </h5>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          <span className="block">Powering World-Class Customer</span>
          <span>Support for </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Global Businesses
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xs md:text-lg text-gray-500 mb-10">
          Where technology, talent, and 24/7 operations come together to power
          exceptional service.
        </p>
      </div>
    </section>
  );
}
