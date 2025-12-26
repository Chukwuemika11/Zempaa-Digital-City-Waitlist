// "use client";

// import { useRouter } from 'next/navigation';

// const Hero = () => { 
//   const router = useRouter();
  
//   function goTowaitlist(){
//     router.push("/waitlist")
//   }
  
//   return (
//     <section className="relative overflow-hidden bg-linear-to-b from-white to-blue-50 py-20 sm:py-32">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           {/* Main Heading */}
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
//             <span className="block">Africa&apos;s Largest</span>
//             <span className="block bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] bg-clip-text text-transparent mt-2">
//               Employment Generating Ecosystem
//             </span>
//           </h1>

//           {/* Subheading */}
//           <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
//             Empowering millions through sustainable job creation, skills development, 
//             and economic opportunities across the African continent.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <button onClick={goTowaitlist} className="rounded-lg cursor-pointer bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95">
//               Join the Waitlist
//             </button>
//             <button onClick={goTowaitlist} className="rounded-lg border cursor-pointer border-[#0E6B87] px-8 py-3 text-base font-semibold text-[#0E6B87] transition-all hover:bg-blue-50">
//               Learn More
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#0E6B87]">1M+</div>
//               <div className="mt-2 text-gray-600">On waitlist</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#0E6B87]">2310+</div>
//               <div className="mt-2 text-gray-600">Service Providers</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#0E6B87]">1200+</div>
//               <div className="mt-2 text-gray-600">Clients</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Hero = () => { 
  const router = useRouter();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  function goTowaitlist(){
    router.push("/waitlist")
  }

  function goToservices(){
    router.push("/service-gallery")
  }
  
  // Animation styles
  const animationStyles = `
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
    
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    
    @keyframes pulseSlow {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.02);
      }
    }
    
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    .animation-delay-300 {
      animation-delay: 0.3s;
    }
    
    .animation-delay-500 {
      animation-delay: 0.5s;
    }
    
    .animate-pulse-slow {
      animation: pulseSlow 2s infinite;
    }
  `;
  
  // Add styles to document
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [animationStyles]);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    // Observe stats
    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll('.stat-item');
      statElements.forEach((stat, index) => {
        observer.observe(stat);
        // Add delay based on index
        (stat as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      });
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Number counting animation
  useEffect(() => {
    const countersObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalValue = target.getAttribute('data-target');
          if (finalValue) {
            const value = parseInt(finalValue.replace(/[+,]/g, ''));
            const isPlus = finalValue.includes('+');
            let start = 0;
            const increment = value / 50;
            const duration = 1500; // 1.5 seconds
            const intervalTime = duration / (value / increment);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= value) {
                target.textContent = isPlus ? 
                  value.toLocaleString() + '+' : 
                  value.toLocaleString();
                clearInterval(timer);
              } else {
                target.textContent = Math.floor(start).toLocaleString();
              }
            }, intervalTime);
          }
        }
      });
    }, { threshold: 0.5 });

    // Start observing counters after a brief delay
    const timer = setTimeout(() => {
      const counters = document.querySelectorAll('.count-up');
      counters.forEach(counter => countersObserver.observe(counter));
    }, 500);

    return () => {
      clearTimeout(timer);
      countersObserver.disconnect();
    };
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-blue-50 py-20 sm:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0E6B87] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0A8CB8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div ref={headingRef} className="opacity-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Africa&apos;s Largest</span>
              <span className="block bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] bg-clip-text text-transparent mt-2">
                Employment Generating Ecosystem
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 sm:text-xl opacity-0 animate-fadeInUp animation-delay-300">
            Empowering millions through sustainable job creation, skills development, 
            and economic opportunities across the African continent.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-fadeInUp animation-delay-500">
            <button 
              onClick={goTowaitlist} 
              className="rounded-lg cursor-pointer bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 animate-pulse-slow"
            >
              Join the Waitlist
            </button>
            <button 
              onClick={goToservices} 
              className="rounded-lg border cursor-pointer border-[#0E6B87] px-8 py-3 text-base font-semibold text-[#0E6B87] transition-all hover:bg-blue-50 hover:scale-105 active:scale-95"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center stat-item opacity-0">
              <div className="text-3xl font-bold text-[#0E6B87]">
                <span className="count-up" data-target="1,000,000+">0</span>
              </div>
              <div className="mt-2 text-gray-600">On waitlist</div>
            </div>
            <div className="text-center stat-item opacity-0">
              <div className="text-3xl font-bold text-[#0E6B87]">
                <span className="count-up" data-target="2,310+">0</span>
              </div>
              <div className="mt-2 text-gray-600">Service Providers</div>
            </div>
            <div className="text-center stat-item opacity-0">
              <div className="text-3xl font-bold text-[#0E6B87]">
                <span className="count-up" data-target="1,200+">0</span>
              </div>
              <div className="mt-2 text-gray-600">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;