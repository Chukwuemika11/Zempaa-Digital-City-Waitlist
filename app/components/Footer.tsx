import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const serviceCategories = [
    "Home Repair & Maintenance",
    "Cleaning & Organization",
    "Food, Catering & Private Chefs",
    "Fashion, Beauty & Styling",
    "Health, Wellness & Medical",
    "Fitness, Therapy & Massage",
    "Education, Tutoring & Coaching",
    "Events, Entertainment & Music",
    "Tech & Digital Services",
    "Pet Care & Training",
    "Gardening & Landscaping",
    "Logistics, Delivery & Errands",
    "Childcare & Elderly Care",
    "Creative & Design Services",
    "Legal, Financial & Business",
    "Automotive & Bike Services",
    "Security & Escort",
    "Rental Services",
    "Art, Crafts & Gifts",
    "Eco & Waste Management",
    "Construction & Heavy Services"
  ];

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/zdc-logo.svg" 
                  alt="Zempaa Digital City Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-2xl font-bold">
                <span>Zempaa</span> Digital City
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Africa&apos;s largest employment generating ecosystem. Connecting millions of 
              service providers with clients across the continent.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[#0E6B87] shrink-0" />
                <a 
                  href="mailto:zempaahelp@gmail.com" 
                  className="text-gray-300 hover:text-white transition"
                >
                  zempaahelp@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-[#0E6B87] shrink-0" />
                <a 
                  href="tel:+2348130346089" 
                  className="text-gray-300 hover:text-white transition"
                >
                  +234 813 034 6089
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-[#0E6B87] shrink-0" />
                <span className="text-gray-300">Enugu, Nigeria</span>
              </div>
            </div>

            {/* Waitlist CTA */}
            <div className="bg-linear-to-r from-[#0E6B87]/20 to-[#0A8CB8]/20 p-4 rounded-lg border border-[#0E6B87]/30">
              <p className="text-sm mb-3 text-gray-200">Be among the first to join</p>
              <Link 
                href="/waitlist"
                className="inline-flex items-center bg-[#0E6B87] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0B5A70] transition"
              >
                Join Waitlist
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-8 cursor-pointer">
            <h3 className="text-lg font-semibold mb-6">Service Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {serviceCategories.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 rounded-lg hover:bg-gray-800/30 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0E6B87] mr-3 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition mr-6"
                >
                  Home
                </Link>
                <Link 
                  href="/waitlist" 
                  className="text-gray-300 hover:text-white transition mr-6"
                >
                  Waitlist
                </Link>

                <Link 
                  href="/service-gallery" 
                  className="text-gray-300 hover:text-white transition mr-6"
                >
                  Services
                </Link>

                <a 
                  href="mailto:zempaahelp@gmail.com" 
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Support
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Zempaa Digital City. All rights reserved.
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;