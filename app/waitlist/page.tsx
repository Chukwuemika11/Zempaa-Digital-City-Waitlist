'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WaitlistPage = () => {
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

  const purposeOptions = [
    { value: "Service Provider", label: "Service Provider" },
    { value: "Client", label: "Client" },
    { value: "Both", label: "Both Service Provider and Client" }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    frequent_services: [] as string[]
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [phoneError, setPhoneError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Only allow numbers
      const numericValue = value.replace(/\D/g, '');
      
      // Validate Nigerian phone number format
      if (numericValue.length > 0) {
        // Check if starts with valid Nigerian prefix
        const validPrefixes = ['070', '080', '081', '090', '091'];
        const prefix = numericValue.substring(0, 3);
        
        if (!validPrefixes.includes(prefix)) {
          setPhoneError('Phone number must start with 070, 080, 081, 090, or 091');
        } else if (numericValue.length !== 11) {
          setPhoneError('Phone number must be 11 digits');
        } else {
          setPhoneError('');
        }
      } else {
        setPhoneError('');
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      if (prev.frequent_services.includes(service)) {
        return {
          ...prev,
          frequent_services: prev.frequent_services.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          frequent_services: [...prev.frequent_services, service]
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.frequent_services.length === 0) {
      setError('Please select at least one service');
      return;
    }
    
    // Validate phone number before submitting
    if (phoneError) {
      setError(phoneError);
      return;
    }
    
    if (formData.phone.length !== 11) {
      setError('Phone number must be 11 digits');
      return;
    }
    
    const validPrefixes = ['070', '080', '081', '090', '091'];
    const prefix = formData.phone.substring(0, 3);
    if (!validPrefixes.includes(prefix)) {
      setError('Phone number must start with 070, 080, 081, 090, or 091');
      return;
    }
    
    setLoading(true);
    setError('');
    setPhoneError('');

    try {
      const payload = {
        ...formData,
        frequent_services: formData.frequent_services.join(', ')
      };

      const response = await fetch('https://zempaa-digital-city.onrender.com/api/wishlist/join/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
       
      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          purpose: '',
          frequent_services: []
        });
      } else {
        // Handle validation errors from backend
        if (data.email && data.email.length > 0) {
          setError(data.email[0]);
        } else if (data.phone && data.phone.length > 0) {
          setError(data.phone[0]);
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="lg:text-4xl text-2xl font-bold text-gray-900 sm:text-5xl mb-6">
              Join Early With Exclusive Rewards
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Reach millions of clients and get booked as a service provider early on
            </p>
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] text-white px-6 py-2 rounded-full">
              <span className="font-bold">Zempaa Digital City</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Join Our Waitlist
            </h2>
            <p className="text-gray-600 mb-8">
              Be among the first to access Africa&apos;s largest service marketplace
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-[#0E6B87] focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6B87] focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={11}
                  className={`w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E6B87] focus:border-transparent outline-none transition ${
                    phoneError ? 'border-red-500' : ''
                  }`}
                  placeholder="08123456789"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                )}
              </div>

              {/* Purpose - Correct Options */}
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                  What will you use Zempaa Digital City for? *
                </label>
                <div className="space-y-3">
                  {purposeOptions.map((option) => (
                    <label 
                      key={option.value}
                      className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer transition"
                    >
                      <input
                        type="radio"
                        id={`purpose-${option.value}`}
                        name="purpose"
                        value={option.value}
                        checked={formData.purpose === option.value}
                        onChange={handleChange}
                        required
                        className="h-5 w-5 text-[#0E6B87] focus:ring-[#0E6B87]"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frequent Services - Multi-select */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What services will you book frequently on ZDC? *
                  <span className="text-gray-500 font-normal"> (Select all that apply)</span>
                </label>
                
                {/* Selected Services Display */}
                <div 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer min-h-14 flex flex-wrap items-center gap-2"
                  onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                >
                  {formData.frequent_services.length === 0 ? (
                    <span className="text-gray-400">Click to select services (choose multiple)</span>
                  ) : (
                    formData.frequent_services.map(service => (
                      <span 
                        key={service} 
                        className="inline-flex items-center bg-blue-100 text-[#0E6B87] px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceToggle(service);
                          }}
                          className="ml-2 text-[#0E6B87] hover:text-[#0B5A70]"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                </div>

                {/* Dropdown */}
                {showServicesDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {serviceCategories.map(service => (
                      <div
                        key={service}
                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center"
                        onClick={() => handleServiceToggle(service)}
                      >
                        <input
                          type="checkbox"
                          checked={formData.frequent_services.includes(service)}
                          onChange={() => {}}
                          className="h-4 w-4 text-[#0E6B87] rounded focus:ring-[#0E6B87] mr-3"
                        />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {formData.frequent_services.length > 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    Selected: {formData.frequent_services.length} service(s)
                  </p>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining waitlist...
                  </span>
                ) : (
                  'Gain Early Rewards'
                )}
              </button>

              {/* Terms Note */}
              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to receive updates about Zempaa Digital City launch.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Early Bird Benefits</h3>
              <p className="text-gray-600 text-sm">Get verified badge, featured listing, and lower commission rates</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">First Access</h3>
              <p className="text-gray-600 text-sm">Be among the first service providers visible to millions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Special Rewards</h3>
              <p className="text-gray-600 text-sm">Receive launch bonuses and exclusive offers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success!</h3>
              <p className="text-gray-600 mb-6">
                Thank you! You&apos;ve been added to the Zempaa Digital City waitlist. 
                We&apos;ll notify you when we launch!
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="w-full cursor-pointer bg-[#0E6B87] text-white font-semibold py-3 rounded-lg hover:bg-[#0B5A70] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default WaitlistPage;