"use client";

import { Target, TrendingUp, Users, Clock, Shield, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SolutionsSection = () => {
  const router = useRouter();

  function goToHome(){
    router.push("/waitlist")
  }

  const solutions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Unified Platform",
      description: "A single platform for both formal and informal entrepreneurs",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Economic Growth",
      description: "Increase Africa's GDP by empowering 100M+ service providers",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Improved Living Standards",
      description: "Create sustainable income for millions of households",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Poverty Reduction",
      description: "Direct impact on poverty reduction across Africa",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Long-term Impact",
      description: "99.9% reduction in unemployment and underemployment",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Easy Booking",
      description: "Faster and easier service booking for clients",
      color: "from-indigo-500 to-indigo-600"
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
      
      @keyframes floatUp {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
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
      
      .animate-scaleIn {
        animation: scaleIn 0.5s ease-out forwards;
      }
      
      .animate-floatUp {
        animation: floatUp 3s ease-in-out infinite;
      }
      
      .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
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
      
      .animate-stat {
        opacity: 0;
      }
      
      .animate-icon {
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
          if (target.classList.contains('animate-card')) {
            target.classList.add('animate-scaleIn');
          }
          if (target.classList.contains('animate-stat')) {
            target.classList.add('animate-fadeInUp');
          }
          if (target.classList.contains('animate-icon')) {
            target.classList.add('animate-fadeIn');
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
          
          // Staggered animations for solution cards
          if (target.classList.contains('animate-card')) {
            const parent = target.parentNode;
            if (parent) {
              const children = Array.from(parent.children);
              const index = children.indexOf(target);
              target.style.animationDelay = `${(index % 6) * 0.1}s`;
            }
          }
          
          // Staggered animations for stats
          if (target.classList.contains('animate-stat')) {
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
      const elements = document.querySelectorAll('.animate-on-scroll, .animate-card, .animate-stat, .animate-icon, .animate-left, .animate-right, .animate-fade');
      elements.forEach(el => observer.observe(el as HTMLElement));
    }, 100);

    return () => {
      document.head.removeChild(styleSheet);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-on-scroll opacity-0">
            Our Solution
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0 animation-delay-100">
            Transforming Africa&apos;s service economy through technology and empowerment
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="group animate-card opacity-0">
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${solution.color} mb-6 animate-icon opacity-0 transition-transform duration-300 group-hover:scale-110`}>
                  <div className="text-white animate-floatUp">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#0E6B87]">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-3xl font-bold text-gray-900 transition-transform duration-300 group-hover:scale-110">
                    {index === 1 ? "100M+" : index === 4 ? "99.9%" : "✓"}
                  </div>
                  <div className="text-sm text-gray-500">
                    {index === 1 ? "Service Providers" : index === 4 ? "Impact Target" : "Core Solution"}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Mission Statement Card */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-2xl animate-fadeInUp opacity-0 animation-delay-300">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Creating Millions of Jobs Across Africa
                </h3>
                <p className="text-lg opacity-90">
                  By connecting skills with opportunities, we&apos;re building a future where 
                  every African can access dignified work and sustainable income.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl animate-fadeInUp opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              The Zempaa Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 animate-stat opacity-0 transition-all duration-300 hover:scale-105 hover:bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-[#0E6B87] mb-2 animate-pulse">1</div>
                <div className="text-gray-700 font-medium">Unified Platform</div>
                <div className="text-sm text-gray-500">For all entrepreneurs</div>
              </div>
              <div className="text-center p-4 animate-stat opacity-0 transition-all duration-300 hover:scale-105 hover:bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-[#0E6B87] mb-2 animate-pulse">100M+</div>
                <div className="text-gray-700 font-medium">Service Providers and clients</div>
                <div className="text-sm text-gray-500">Empowered and served</div>
              </div>
              <div className="text-center p-4 animate-stat opacity-0 transition-all duration-300 hover:scale-105 hover:bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-[#0E6B87] mb-2 animate-pulse">Millions</div>
                <div className="text-gray-700 font-medium">Jobs Created</div>
                <div className="text-sm text-gray-500">Across Africa</div>
              </div>
              <div className="text-center p-4 animate-stat opacity-0 transition-all duration-300 hover:scale-105 hover:bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-[#0E6B87] mb-2 animate-pulse">99.9%</div>
                <div className="text-gray-700 font-medium">Unemployment Reduction</div>
                <div className="text-sm text-gray-500">Long-term Goal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-linear-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white transition-all duration-300 hover:shadow-2xl animate-fadeInUp opacity-0 animation-delay-200">
            <h3 className="text-3xl font-bold mb-6">
              Join the Movement Transforming Africa
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the solution that&apos;s creating economic opportunities 
              and reducing poverty across the continent.
            </p>

            <p className="text-sm font-bold opacity-90 mb-8 max-w-2xl mx-auto animate-pulse">
              The PAN-African Service Platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={goToHome} 
                className="bg-white cursor-pointer text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 animate-left opacity-0"
              >
                Join the waitlist
              </button>
              <button 
                onClick={goToHome}
                className="bg-transparent cursor-pointer border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 animate-right opacity-0"
              >
                Partner With Us As We Expand The GDP Of Africa
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;