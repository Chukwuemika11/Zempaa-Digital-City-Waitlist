"use client";

import { TrendingUp, Users, Target, Zap } from 'lucide-react';
import { useEffect } from 'react';

const FocusSection = () => {
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
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
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
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes pulseGlow {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(14, 107, 135, 0.4);
        }
        50% {
          box-shadow: 0 0 20px 10px rgba(14, 107, 135, 0.2);
        }
      }
      
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: translateY(-100px);
        }
        60% {
          opacity: 1;
          transform: translateY(10px);
        }
        80% {
          transform: translateY(-5px);
        }
        100% {
          transform: translateY(0);
        }
      }
      
      @keyframes countUp {
        from {
          transform: scale(1.2);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-slideInLeft {
        animation: slideInLeft 0.7s ease-out forwards;
      }
      
      .animate-slideInRight {
        animation: slideInRight 0.7s ease-out forwards;
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease-out forwards;
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.6s ease-out forwards;
      }
      
      .animate-pulseGlow {
        animation: pulseGlow 3s ease-in-out infinite;
      }
      
      .animate-bounceIn {
        animation: bounceIn 1s ease-out forwards;
      }
      
      .animate-countUp {
        animation: countUp 0.8s ease-out forwards;
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
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
      
      .animate-card {
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
          if (target.classList.contains('animate-left')) {
            target.classList.add('animate-slideInLeft');
          }
          if (target.classList.contains('animate-right')) {
            target.classList.add('animate-slideInRight');
          }
          if (target.classList.contains('animate-fade')) {
            target.classList.add('animate-fadeIn');
          }
          if (target.classList.contains('animate-card')) {
            target.classList.add('animate-scaleIn');
          }
          if (target.classList.contains('animate-number')) {
            target.classList.add('animate-countUp');
          }
          if (target.classList.contains('animate-benefit')) {
            target.classList.add('animate-fadeInUp');
          }
          
          // Staggered animations for benefit cards
          if (target.classList.contains('animate-benefit')) {
            const parent = target.parentNode;
            if (parent) {
              const children = Array.from(parent.children);
              const index = children.indexOf(target);
              target.style.animationDelay = `${index * 0.2}s`;
            }
          }
        }
      });
    }, observerOptions);

    // Observe elements after component mounts
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-fade, .animate-card, .animate-number, .animate-benefit');
      elements.forEach(el => observer.observe(el as HTMLElement));
    }, 100);

    return () => {
      document.head.removeChild(styleSheet);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0E6B87] px-4 py-2 rounded-full mb-6 animate-on-scroll opacity-0">
            <Target className="w-4 h-4 animate-pulseGlow" />
            <span className="text-sm font-semibold">Our Mission</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-on-scroll opacity-0 animation-delay-100">
            Our Focus
          </h2>
          <p className="mt-6 text-2xl text-[#0E6B87] font-semibold animate-on-scroll opacity-0 animation-delay-200">
            Empowering Digital Entrepreneurship Across Africa
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0 animation-delay-300">
            A hub where anyone with a skill, talent or service can instantly become 
            an entrepreneur and access steady income.
          </p>
        </div>

        {/* Transformation Story */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 animate-card opacity-0">
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* Before Zempaa */}
              <div className="flex-1 animate-left opacity-0">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 transition-transform duration-300 hover:scale-110">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Before Zempaa Digital City</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-white rounded-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="text-3xl font-bold text-red-600 animate-number opacity-0">₦150,000</div>
                      <div className="text-gray-600">Average monthly income</div>
                    </div>
                    <ul className="space-y-2">
                      {["Limited client reach", "Irregular work schedule", "Manual client acquisition"].map((item, index) => (
                        <li key={index} className="flex items-start transition-transform duration-300 hover:translate-x-2">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow/Divider */}
              <div className="hidden lg:block animate-fade opacity-0 animation-delay-300">
                <div className="relative">
                  <div className="w-16 h-1 bg-linear-to-r from-red-500 to-[#0E6B87] animate-pulseGlow"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-linear-to-r from-red-500 to-[#0E6B87] flex items-center justify-center animate-bounceIn">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* After Zempaa */}
              <div className="flex-1 animate-right opacity-0">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 transition-transform duration-300 hover:scale-110">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">With Zempaa Digital City</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-white rounded-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="text-3xl font-bold text-green-600 animate-number opacity-0">₦300,000 - ₦500,000</div>
                      <div className="text-gray-600">Additional monthly income</div>
                    </div>
                    <ul className="space-y-2">
                      {["Visible to millions of clients", "20-25+ services monthly", "Steady income stream"].map((item, index) => (
                        <li key={index} className="flex items-start transition-transform duration-300 hover:translate-x-2">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Example Highlight */}
            <div className="mt-8 p-6 bg-linear-to-r from-[#0E6B87]/10 to-[#0A8CB8]/10 rounded-2xl transition-all duration-300 hover:scale-[1.02] animate-fadeInUp opacity-0 animation-delay-500">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#0E6B87] flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <span className="text-white text-xl">🔧</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Real Example: Plumbers</h4>
                  <p className="text-gray-700">
                    A plumber posting services on Zempaa Digital City gets seen by millions across Nigeria, 
                    increasing their monthly income from ₦150,000 to <span className="font-bold">₦450,000 - ₦650,000</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-benefit opacity-0">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 animate-pulseGlow">
              <Users className="w-6 h-6 text-[#0E6B87]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Reach</h3>
            <p className="text-gray-600">
              Your services are visible to millions of potential clients across Africa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-benefit opacity-0">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 animate-pulseGlow animation-delay-200">
              <TrendingUp className="w-6 h-6 text-[#0E6B87]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Income Growth</h3>
            <p className="text-gray-600">
              Average income increases by 200-300% for skilled professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-benefit opacity-0">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 animate-pulseGlow animation-delay-400">
              <Zap className="w-6 h-6 text-[#0E6B87]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Entrepreneurship</h3>
            <p className="text-gray-600">
              Turn your skills into a business in minutes, not months.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-2xl animate-fadeInUp opacity-0 animation-delay-300">
            <h3 className="text-2xl font-bold mb-4">
              The Future of Africa&apos;s Gig Service Economy is Here
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Powered by Zempaa Digital City
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FocusSection;