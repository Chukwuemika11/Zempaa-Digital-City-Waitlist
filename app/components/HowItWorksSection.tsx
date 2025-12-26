"use client";

import { CheckCircle, UserCheck, ClipboardList, Wallet, Clock, Star, Search, CreditCard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HowItWorksSection = () => {
  const router = useRouter();
  
  function goTowaitlist(){
    router.push("/waitlist")
  }

     function goToServices(){
    router.push("/service-gallery")
  }
  
  const providerSteps = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Sign Up",
      description: "Create your account in minutes"
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Register Business",
      description: "Add your business details and skills"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Get Verified",
      description: "Subscribe for verification badge"
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "List Services",
      description: "Post services you offer"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Get Booked",
      description: "Receive booking requests"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "See Payments",
      description: "Track pending payments in wallet"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Render Service",
      description: "Provide service based on agreement"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Get Paid",
      description: "Receive instant payment"
    }
  ];

  const clientSteps = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Sign Up",
      description: "Create your account quickly"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Find Service",
      description: "Search for services you need"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pay & Book",
      description: "Secure payment and booking"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Receive Service",
      description: "Get the service you requested"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Rate Provider",
      description: "Share your experience"
    }
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
      
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes pulseScale {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
      
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-fadeInLeft {
        animation: fadeInLeft 0.7s ease-out forwards;
      }
      
      .animate-fadeInRight {
        animation: fadeInRight 0.7s ease-out forwards;
      }
      
      .animate-pulseScale {
        animation: pulseScale 2s ease-in-out infinite;
      }
      
      .animate-slideIn {
        animation: slideIn 0.5s ease-out forwards;
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
      
      .step-item {
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
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          if (target.classList.contains('animate-on-scroll')) {
            target.classList.add('animate-fadeInUp');
          }
          if (target.classList.contains('step-item')) {
            target.classList.add('animate-slideIn');
          }
          if (target.classList.contains('animate-left')) {
            target.classList.add('animate-fadeInLeft');
          }
          if (target.classList.contains('animate-right')) {
            target.classList.add('animate-fadeInRight');
          }
          if (target.classList.contains('animate-card')) {
            target.classList.add('animate-fadeInUp');
          }
          
          // Add staggered delay for step items
          if (target.classList.contains('step-item')) {
            const parent = target.parentNode;
            if (parent) {
              const children = Array.from(parent.children);
              const index = children.indexOf(target);
              target.style.animationDelay = `${index * 0.1}s`;
            }
          }
        }
      });
    }, observerOptions);

    // Observe elements after component mounts
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll, .step-item, .animate-left, .animate-right, .animate-card');
      elements.forEach(el => observer.observe(el as HTMLElement));
    }, 100);

    return () => {
      document.head.removeChild(styleSheet);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-on-scroll opacity-0">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 animate-on-scroll opacity-0 animation-delay-100">
            Simple steps to get started on Zempaa Digital City
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Service Providers Process */}
          <div className="bg-white cursor-pointer rounded-2xl shadow-lg p-8 animate-card opacity-0">
            <div className="flex items-center mb-8 animate-fadeInLeft opacity-0">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 animate-pulseScale">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">For Service Providers</h3>
                <p className="text-gray-600">Start earning with your skills</p>
              </div>
            </div>

            <div className="space-y-6">
              {providerSteps.map((step, index) => (
                <div key={index} className="step-item flex items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] flex items-center justify-center text-white font-bold mr-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-blue-50/50 group-hover:bg-blue-100/50 transition-all duration-300 group-hover:translate-x-2 flex-1">
                    <div className="text-[#0E6B87] mr-3 transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#0E6B87]">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={goTowaitlist} 
              className="mt-8 w-full cursor-pointer bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 animate-fadeInUp opacity-0 animation-delay-300"
            >
              Become a Provider
            </button>
          </div>

          {/* Clients Process */}
          <div className="bg-white cursor-pointer rounded-2xl shadow-lg p-8 animate-card opacity-0 animation-delay-100">
            <div className="flex items-center mb-8 animate-fadeInRight opacity-0">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4 animate-pulseScale">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">For Clients</h3>
                <p className="text-gray-600">Find trusted services easily</p>
              </div>
            </div>

            <div className="space-y-6">
              {clientSteps.map((step, index) => (
                <div key={index} className="step-item flex items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-r from-green-600 to-green-500 flex items-center justify-center text-white font-bold mr-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-green-50/50 group-hover:bg-green-100/50 transition-all duration-300 group-hover:translate-x-2 flex-1">
                    <div className="text-green-600 mr-3 transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={goToServices} 
              className="mt-8 w-full cursor-pointer border-2 border-[#0E6B87] text-[#0E6B87] font-semibold py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] active:scale-95 animate-fadeInUp opacity-0 animation-delay-300"
            >
              Find Services
            </button>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-2xl p-8 animate-fadeInUp opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of service providers and clients already using Zempaa Digital City
            </p>
            <button 
              onClick={goTowaitlist} 
              className="bg-black cursor-pointer text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulseScale"
            >
              Join the waitlist
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;