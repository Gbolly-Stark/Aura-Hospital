"use client"
import React, { useState } from "react";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto mt-12">
      <div className="text-center mb-12">
        <p className="text-cyan-500 font-semibold text-sm sm:text-lg uppercase tracking-wide">
          GET IN TOUCH
        </p>
        <h2 className="text-gray-900 mt-2 font-bold text-2xl md:text-4xl">
          We Are Here To Help You 24/7
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Have a question, need an urgent appointment, or want to consult a specialist? Reach out to our medical team anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
    
        <div className="lg:col-span-2 bg-white border border-cyan-100 rounded-2xl p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Message Received!
              </h3>
              <p className="text-gray-600 mt-2">
                Thank you for contacting us. Our reception team will reach out to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department / Specialty
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden transition-all text-sm bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Emergency Care">Emergency Care</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Diagnostics / Lab">Diagnostics / Lab</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your concern or requested appointment time..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-hidden transition-all text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
              >
                Send Message / Book Appointment
              </button>
            </form>
          )}
        </div>

    
        <div className="space-y-6">
    
          <div className="bg-cyan-600 text-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Emergency Hotline</h4>
                <p className="text-cyan-100 text-xs">24/7 Rapid Medical Response</p>
              </div>
            </div>
            <p className="mt-4 text-2xl font-extrabold tracking-wide">
              +1 (800) 999-CARE
            </p>
          </div>

    
          <div className="bg-cyan-50/60 border border-cyan-200 p-6 rounded-2xl space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-white rounded-lg border border-cyan-200 shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">Our Location</h5>
                <p className="text-gray-600 text-xs leading-relaxed mt-0.5">
                  123 Healthcare Boulevard, Medical District Suite 400
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-white rounded-lg border border-cyan-200 shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm">Working Hours</h5>
                <p className="text-gray-600 text-xs mt-0.5">
                  Emergency: <span className="font-semibold text-cyan-700">24 Hours / 7 Days</span>
                </p>
                <p className="text-gray-600 text-xs">
                  Outpatient OPD: Mon - Sat (8:00 AM - 8:00 PM)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;