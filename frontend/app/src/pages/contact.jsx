import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-center px-6 py-12 lg:px-8">
      {/* Header Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Get in Touch with Us
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Looking to buy agricultural land, sell your property, or explore
          investment opportunities? Our team of real estate experts is here to
          guide you every step of the way.
        </p>
      </div>

      {/* Content Section with Contact Info and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto w-full">
        {/* Left Side - Contact Info with Image */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 flex flex-col border border-gray-100">
          {/* Contact Image */}
          

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you want details about available land plots, property
            pricing, or partnership opportunities, reach out to us anytime.
          </p>
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
              alt="Office team at work"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700">sales@propertyconnect.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700">+91 91234 56789</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700">
                Property Connect Office, Connaught Place, New Delhi, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-gray-100">
          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 placeholder-transparent"
              />
              <label className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-indigo-600">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder=" "
                className="peer w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 placeholder-transparent"
              />
              <label className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-indigo-600">
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                placeholder=" "
                className="peer w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 placeholder-transparent"
              />
              <label className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-indigo-600">
                Phone Number
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                placeholder=" "
                className="peer w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 placeholder-transparent"
              ></textarea>
              <label className="absolute left-3 -top-2 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-indigo-600">
                Tell us about your property needs
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300 transform hover:scale-[1.02]"
            >
              Request a Callback 📞
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Visit Our Office
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Drop by our New Delhi office to discuss your real estate goals in
          person.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5406842561493!2d77.20902131492007!3d28.61393998242283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36e9a3e6e3%3A0x4d8d9f4f1e0a5cbb!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1694514695123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;