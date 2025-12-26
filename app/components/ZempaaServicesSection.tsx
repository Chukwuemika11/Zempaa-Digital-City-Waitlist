"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ZempaaServicesSection = () => {
  const router = useRouter();

  function goTowaitlist(){
    router.push("/waitlist")
  }

    function goToServices(){
    router.push("/service-gallery")
  }
  
  const featuredCategories = [
    "Home Repair & Maintenance",
    "Cleaning & Organization", 
    "Food & Catering Services",
    "Fashion & Beauty",
    "Health & Wellness",
    "Education & Tutoring",
    "Tech & Digital Services",
    "Events & Entertainment",
    "Automotive Services",
    "Pet Care Services",
    "Child & Elderly Care",
    "Creative & Design Services",
    "Legal & Business Services",
    "Logistics & Delivery",
    "Fitness & Therapy",
    "Gardening & Landscaping",
    "Construction Services",
    "Security Services",
    "Rental Services",
    "Eco & Waste Management"
  ];

  useEffect(() => {
    // Add animation styles
    const animationStyles = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes floatUp {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-slideInLeft {
        animation: slideInLeft 0.7s ease-out forwards;
      }
      
      .animate-slideInRight {
        animation: slideInRight 0.7s ease-out forwards;
      }
      
      .animate-floatUp {
        animation: floatUp 3s ease-in-out infinite;
      }
      
      .animation-delay-100 {
        animation-delay: 0.1s;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animation-delay-400 {
        animation-delay: 0.4s;
      }
      
      .animation-delay-500 {
        animation-delay: 0.5s;
      }
      
      .service-item {
        opacity: 0;
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
          const target = entry.target as HTMLElement;
          
          if (target.classList.contains('animate-on-scroll')) {
            target.classList.add('animate-fadeInUp');
          }
          if (target.classList.contains('service-item')) {
            // Add staggered animation for service items
            const parent = target.parentNode;
            if (parent) {
              const children = Array.from(parent.children);
              const index = children.indexOf(target);
              target.style.animationDelay = `${(index % 8) * 0.05}s`;
            }
            target.classList.add('animate-fadeInUp');
          }
          if (target.classList.contains('animate-fade')) {
            target.classList.add('animate-fadeIn');
          }
          if (target.classList.contains('animate-left')) {
            target.classList.add('animate-slideInLeft');
          }
          if (target.classList.contains('animate-right')) {
            target.classList.add('animate-slideInRight');
          }
        }
      });
    }, observerOptions);

    // Add animation classes after component mounts
    setTimeout(() => {
      const animateElements = document.querySelectorAll('.animate-on-scroll, .service-item, .animate-fade, .animate-left, .animate-right');
      animateElements.forEach(el => observer.observe(el as HTMLElement));
    }, 100);

    return () => {
      document.head.removeChild(styleSheet);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-on-scroll opacity-0">
            Earn Money Through Diverse Services
          </h2>
          <p className="mt-4 text-xl text-[#0E6B87] font-semibold animate-on-scroll opacity-0 animation-delay-100">
            With Zempaa Digital City
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0 animation-delay-200">
            Turn your skills into income. Whether you&apos;re a professional, craftsman, 
            or creative, there&apos;s a place for your services on our platform.
          </p>
        </div>

        {/* Services Grid - Clean & Simple */}
        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredCategories.map((service, index) => (
            <div 
              key={index}
              className="service-item group p-4 rounded-xl border border-gray-200 hover:border-[#0E6B87] hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#0E6B87] mr-3 group-hover:scale-150 transition-transform duration-300 animate-floatUp"></div>
                <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 animate-fade opacity-0 animation-delay-300">
            Plus many more opportunities in baking, laundry, web development, mechanics, 
            and countless other services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={goTowaitlist} 
              className="bg-[#0E6B87] cursor-pointer text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#0B5A70] transition-all duration-300 hover:scale-105 active:scale-95 animate-left opacity-0 shadow-lg hover:shadow-xl"
            >
              Start Earning Now
            </button>
            <button 
              onClick={goToServices} 
              className="border cursor-pointer border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 animate-right opacity-0"
            >
              View All Categories
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ZempaaServicesSection;