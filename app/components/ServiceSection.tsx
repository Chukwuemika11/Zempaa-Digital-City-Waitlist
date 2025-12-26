"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const ServiceSection = () => {
  const router = useRouter();
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<HTMLDivElement>(null);
  
  function goTowaitlist(){
    router.push("/waitlist")
  }

  useEffect(() => {
    // Add animation styles
    const animationStyles = `
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .animate-fadeInLeft {
        animation: fadeInLeft 0.8s ease-out forwards;
      }
      
      .animate-fadeInRight {
        animation: fadeInRight 0.8s ease-out forwards;
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.6s ease-out forwards;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
    `;

    // Inject styles
    const styleSheet = document.createElement("style");
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate-left')) {
            entry.target.classList.add('animate-fadeInLeft');
          } else if (entry.target.classList.contains('animate-right')) {
            entry.target.classList.add('animate-fadeInRight');
          } else if (entry.target.classList.contains('animate-up')) {
            entry.target.classList.add('animate-fadeInUp');
          } else if (entry.target.classList.contains('animate-scale')) {
            entry.target.classList.add('animate-scaleIn');
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const leftElements = document.querySelectorAll('.animate-left');
    const rightElements = document.querySelectorAll('.animate-right');
    const upElements = document.querySelectorAll('.animate-up');
    const scaleElements = document.querySelectorAll('.animate-scale');

    leftElements.forEach(el => observer.observe(el));
    rightElements.forEach(el => observer.observe(el));
    upElements.forEach(el => observer.observe(el));
    scaleElements.forEach(el => observer.observe(el));

    return () => {
      document.head.removeChild(styleSheet);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image with animation */}
          <div className="order-2 lg:order-1 animate-left opacity-0">
            <div className="relative h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/artisans.jpg" // Add your image path here
                alt="Service marketplace connecting professionals across Africa"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
          
          {/* Right Column - Content with staggered animations */}
          <div className="order-1 lg:order-2" ref={contentRef}>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl animate-right opacity-0">
               Need a Service or Want to Offer One?
              <span className="block text-[#0E6B87] mt-2 animate-up opacity-0 animation-delay-200">
                You&apos;re in the Right Place
              </span>
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 animate-up opacity-0 animation-delay-400">
              Join Africa&apos;s premier service marketplace. Whether you need skilled professionals 
              or want to offer your expertise, we connect service providers with clients across 
              the continent.
            </p>
            
            <div className="mt-10 space-y-6" ref={serviceCardsRef}>
              {/* Service Provider Option */}
              <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-scale opacity-0">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center animate-up opacity-0 animation-delay-400">
                    <span className="text-xl">👨‍💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 animate-up opacity-0 animation-delay-500">
                      Become a Service Provider
                    </h3>
                    <p className="text-gray-600 mb-4 animate-up opacity-0 animation-delay-600">
                      Showcase your skills to millions of potential clients. Grow your business 
                      and access new opportunities across Africa.
                    </p>
                    <button 
                      onClick={goTowaitlist} 
                      className="cursor-pointer bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] text-white font-semibold px-6 py-2.5 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 animate-up opacity-0 animation-delay-700"
                    >
                      Start Offering Services
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Client Option */}
              <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-scale opacity-0 animation-delay-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center animate-up opacity-0 animation-delay-500">
                    <span className="text-xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 animate-up opacity-0 animation-delay-600">
                      Find Expert Services
                    </h3>
                    <p className="text-gray-600 mb-4 animate-up opacity-0 animation-delay-700">
                      Access Africa&apos;s largest network of verified professionals. 
                      Book trusted services for your personal or business needs.
                    </p>
                    <button 
                      className="border-2 cursor-pointer border-[#0E6B87] text-[#0E6B87] font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 animate-up opacity-0 animation-delay-800"
                    >
                      Browse Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;