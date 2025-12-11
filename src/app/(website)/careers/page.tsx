"use client";
import React, { useState, useRef } from "react";
import { MapPin, ArrowRight, Upload, Dot, X, FileText } from "lucide-react";
import { toast } from "sonner";
import { benefits, jobOpenings, lifeAtCompany, locationData } from "./data";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedState, setSelectedState] = useState("Madhya Pradesh");
  const [selectedCity, setSelectedCity] = useState("Bhopal");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error(
        "Invalid file type. Please upload PDF, DOC, or DOCX files only."
      );
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10MB limit.");
      return;
    }

    setResumeFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      toast.error("Please upload your resume");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("resume", resumeFile);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          message: "",
        });
        setResumeFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast.error(
          data.error || "Failed to submit application. Please try again."
        );
      }
    } catch (error) {
      console.error("Application submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = e.target.value;
    setSelectedState(newState);
    // Auto-select first city of the new state
    const state = locationData.states.find((s) => s.name === newState);
    if (state && state.cities.length > 0) {
      setSelectedCity(state.cities[0]);
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const getCurrentCities = () => {
    const state = locationData.states.find((s) => s.name === selectedState);
    return state ? state.cities : [];
  };

  const handleViewBhopalOpenings = () => {
    setSelectedState("Madhya Pradesh");
    setSelectedCity("Bhopal");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span>Build Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {" "}
              Career With Us
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10">
            Join a fast-growing customer support & call-center team shaping the
            future of communication.
          </p>
          <div className="flex gap-4 justify-center">
            <div className="flex justify-center gap-4">
              <a
                href="#openings"
                className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200 text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                View Openings
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#apply-form"
                className="bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-200 text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Work With Us Section --- */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Work With Us?
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              We believe in nurturing talent and providing a platform for
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-6">
                  <div className="p-2 bg-gray-50 rounded-lg text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Current Openings Section --- */}
      <section id="openings" className="w-full py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Current Openings
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              Find the role that fits your skills and passion.
            </p>
          </div>

          {/* Location Filters */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* Country Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  Country
                </label>
                <select
                  disabled
                  value={locationData.country}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
                >
                  <option>{locationData.country}</option>
                </select>
              </div>

              {/* State Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all bg-white"
                >
                  {locationData.states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all bg-white"
                >
                  {getCurrentCities().map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Conditional Rendering: Jobs or Coming Soon */}
          {selectedCity === "Bhopal" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="p-8 flex-grow flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#594ad2] transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {job.summary}
                    </p>

                    <div className="mb-6 w-full">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-500 text-xs"
                          >
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8 w-full">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-500 text-xs"
                          >
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#apply-form"
                      className="w-full mt-auto bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 hover:bg-[#594ad2] hover:border-[#594ad2] hover:text-white"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <div className="max-w-2xl mx-auto">
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Openings Coming Soon to {selectedCity}
                </h3>
                <p className="text-gray-500 text-lg mb-8">
                  We're expanding! Check back soon for opportunities in your
                  area.
                </p>
                <button
                  onClick={handleViewBhopalOpenings}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-2"
                >
                  View Current Openings in Bhopal
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- Life at Our Company --- */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Life at HK Nexus
            </h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
              More than just a workplace—a community where we learn, grow, and
              celebrate together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAtCompany.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Application Form Section --- */}
      <section id="apply-form" className="w-full py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-[#594ad2] p-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Apply Now
              </h2>
              <p className="text-white/80">Start your journey with us today.</p>
            </div>

            <div className="p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="text-sm font-medium text-gray-700"
                    >
                      Position Applying For
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Resume / CV *
                  </label>
                  {!resumeFile ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                        isDragging
                          ? "border-[#594ad2] bg-[#594ad2]/5"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="border-2 border-[#594ad2] bg-[#594ad2]/5 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-[#594ad2]" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {resumeFile.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(resumeFile.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 hover:bg-red-100 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#594ad2] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us why you're a great fit..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
