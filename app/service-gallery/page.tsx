"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesGallery = () => {
  const router = useRouter();

  const services = [
    {
      category: "Home Repair & Maintenance",
      image: "/images/artisans.jpg",
      services: [
        "Plumbing", "Electrical repairs", "HVAC/AC servicing", "Painting", "Carpentry/Furniture services",
        "Order a carpenter", "Order a painter", "Order an Architect", "Home technician", "Buy and install services",
        "Buy and repair services", "Home Solar Installation & Maintenance", "Home Pest Control & Fumigation",
        "Home Appliance Rental", "Water dispenser bottle supply", "Pure water merchants", "Book Water supply"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Cleaning & Organization",
      image: "/images/Car-Wash-Business.jpg",
      services: [
        "Home & office cleaning", "Laundry services for clothes", "Shoe cleaning and repair (cobbler)",
        "Mobile Car Wash & Detailing", "Home Organization Services", "Eco-Friendly Waste Management & Recycling"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      category: "Food, Catering & Private Chefs",
      image: "/images/caterer.jpg",
      services: [
        "Food hub for events", "Caterer", "Personal cook", "Order food for private/family dinner",
        "Event catering packages"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      category: "Fashion, Beauty & Styling",
      image: "/images/makeup.png",
      services: [
        "Makeup services", "Hair styling", "Barber (home or shop)", "Manicure & Pedicure", "Nail technician",
        "Tailoring & Fashion Design", "Sewing services (torn clothes)", "Repair spoilt jewelries",
        "Rent outfits services", "Personal Styling & Consultation", "Mobile Beauty & Spa (home service)"
      ],
      color: "from-pink-500 to-purple-600"
    },
    {
      category: "Health, Wellness & Medical",
      image: "/images/Chiropractors.jpg",
      services: [
        "Health & Medical Consultation", "Book health doctor (home or virtual)", "Home Delivery Pharmacy",
        "Virtual Mental Health & Counseling", "Chiropractor", "Physiotherapist", "Therapy sessions",
        "Virtual Nutrition & Meal Planning", "Virtual Meditation & Mindfulness Coaching"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      category: "Fitness, Therapy & Massage",
      image: "/images/massage.jpeg",
      services: [
        "Personal fitness & wellness coaching", "Gym instructor (home)", "Massage services",
        "Mobile Fitness Bootcamp", "Personal coach for football/sports"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      category: "Education, Tutoring & Coaching",
      image: "/images/skill.jpg",
      services: [
        "Tutoring & home lessons", "On-Demand Home Tutoring (STEM)", "Virtual Language & Skill Training",
        "Virtual Career Coaching & Resume Building", "Relationship & Etiquette Coaching",
        "Mentoring Services", "Virtual Public Speaking Coaching"
      ],
      color: "from-indigo-500 to-blue-600"
    },
    {
      category: "Events, Entertainment & Music",
      image: "/images/dj.png",
      services: [
        "Event planning & decoration", "Book DJ", "Book a Musician (birthdays, weddings, etc.)",
        "Book Saxophonist", "Book Violinist", "Singer", "Talking Drummer", "Oghene", "Choir Group",
        "Book Local Storytelling", "Book Cultural Performance", "Gift Wrapping & Personalization",
        "Photography & Videography", "Boat cruise services"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      category: "Tech & Digital Services",
      image: "/images/phone-technician.webp",
      services: [
        "Tech Setup & Repair", "Mobile Phone & Gadget Repair", "Website Development & Maintenance",
        "Mobile App Development", "UI/UX Design", "Cybersecurity Consultation", "Virtual IT Support",
        "Cloud Computing Setup", "Virtual Data Analysis & Visualization"
      ],
      color: "from-indigo-600 to-blue-700"
    },
    {
      category: "Pet Care & Training",
      image: "/images/petcare.jpg",
      services: [
        "Pet care & grooming", "Mobile Pet Training"
      ],
      color: "from-yellow-500 to-orange-600"
    },
    {
      category: "Gardening & Landscaping",
      image: "/images/gardener1.jpg",
      services: [
        "Home gardening services"
      ],
      color: "from-green-500 to-lime-600"
    },
    {
      category: "Logistics, Delivery & Errands",
      image: "/images/danfo.webp",
      services: [
        "On-Demand Courier & Errands", "Dispatch Riders", "Keke Napep riders", "Motorcycle riders (Okada)",
        "Danfo bus drivers", "Taxi drivers", "Personal driver", "Shipping services"
      ],
      color: "from-gray-500 to-gray-700"
    },
    {
      category: "Childcare & Elderly Care",
      image: "/images/babysitter.jpg",
      services: [
        "On-Demand Childcare & Babysitting", "Mobile Elderly Care & Companionship"
      ],
      color: "from-teal-500 to-cyan-600"
    },
    {
      category: "Creative & Design Services",
      image: "/images/Craftsmen.jpeg",
      services: [
        "Virtual Interior Design Consultation", "Artworks & Crafts", "Craftman services"
      ],
      color: "from-purple-600 to-indigo-700"
    },
    {
      category: "Legal, Financial & Business",
      image: "/images/pos.webp",
      services: [
        "On-Demand Legal Consultation", "Financial Planning & Budgeting", "Virtual Business Plan Writing",
        "Professional/Motivational Speaking", "POS agents services"
      ],
      color: "from-blue-600 to-indigo-700"
    },
    {
      category: "Automotive & Bike Services",
      image: "/images/mechanic.jpg",
      services: [
        "Repair automobile parts", "Mechanic", "Vulcanizer", "Mobile Vehicle Tinting",
        "Bike & Motorcycle Maintenance", "Mobile Bicycle Repair"
      ],
      color: "from-gray-600 to-gray-800"
    },
    {
      category: "Security & Escort",
      image: "/images/bouncer.jpg",
      services: [
        "Book Bouncer", "Book Local Security Escort", "Fire service"
      ],
      color: "from-red-600 to-orange-700"
    },
    {
      category: "Rental Services",
      image: "/images/rent.jpg",
      services: [
        "General rental services", "Home Appliance Rental", "Rent outfits"
      ],
      color: "from-yellow-600 to-amber-600"
    },
    {
      category: "Art, Crafts & Gifts",
      image: "/images/jewelry-repair.jpg",
      services: [
        "Artworks", "Gift Wrapping & Personalization", "Custom jewelry repair"
      ],
      color: "from-pink-600 to-rose-600"
    },
    {
      category: "Eco & Waste Management",
      image: "/images/waste.avif",
      services: [
        "Eco-Friendly Waste Management (partner with government)", "Eco-Friendly Recycling & Upcycling"
      ],
      color: "from-emerald-500 to-green-600"
    },
    {
      category: "Construction & Heavy Services",
      image: "/images/construction.jpg",
      services: [
        "Construction workers", "Road construction services"
      ],
      color: "from-gray-700 to-black"
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
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.5s ease-out forwards;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
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
      
      .service-card {
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
          if (target.classList.contains('service-card')) {
            target.classList.add('animate-scaleIn');
          }
          if (target.classList.contains('animate-fade')) {
            target.classList.add('animate-fadeIn');
          }
          
          // Staggered animations for service cards
          if (target.classList.contains('service-card')) {
            const parent = target.parentNode;
            if (parent) {
              const children = Array.from(parent.children);
              const index = children.indexOf(target);
              target.style.animationDelay = `${(index % 7) * 0.1}s`;
            }
          }
        }
      });
    }, observerOptions);

    // Observe elements after component mounts
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll, .service-card, .animate-fade');
      elements.forEach(el => observer.observe(el as HTMLElement));
    }, 100);

    return () => {
      document.head.removeChild(styleSheet);
      observer.disconnect();
    };
  }, []);

  function goToWaitlist() {
    router.push("/waitlist");
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6 animate-on-scroll opacity-0">
            Discover All 21 Service Categories
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll opacity-0 animation-delay-100">
            From home repairs to professional expertise, Zempaa Digital City connects you with skilled artisans and professionals across Africa
          </p>
          <button 
            onClick={goToWaitlist}
            className="bg-white cursor-pointer text-[#0E6B87] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 animate-on-scroll opacity-0 animation-delay-200"
          >
            Join Now to Access All Services
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 animate-on-scroll opacity-0">
              Complete Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0 animation-delay-100">
              Every service you need, offered by verified professionals across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
                  <div className={`absolute inset-0 bg-linear-to-r ${service.color} opacity-30`}></div>
                  <Image
                    src={service.image}
                    alt={service.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 6}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{service.category}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.services.slice(0, 6).map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[#0E6B87]"
                      >
                        {item}
                      </span>
                    ))}
                    {service.services.length > 6 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                        +{service.services.length - 6} more
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={goToWaitlist}
                    className="w-full cursor-pointer py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-blue-50 hover:text-[#0E6B87] transition-all duration-300 group-hover:scale-105"
                  >
                    Explore {service.category}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade opacity-0">
              <div className="text-4xl font-bold text-[#0E6B87] mb-2">21</div>
              <div className="text-gray-700">Service Categories</div>
            </div>
            <div className="text-center animate-fade opacity-0 animation-delay-100">
              <div className="text-4xl font-bold text-[#0E6B87] mb-2">200+</div>
              <div className="text-gray-700">Service Types</div>
            </div>
            <div className="text-center animate-fade opacity-0 animation-delay-200">
              <div className="text-4xl font-bold text-[#0E6B87] mb-2">54</div>
              <div className="text-gray-700">African Countries</div>
            </div>
            <div className="text-center animate-fade opacity-0 animation-delay-300">
              <div className="text-4xl font-bold text-[#0E6B87] mb-2">24/7</div>
              <div className="text-gray-700">Service Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] rounded-3xl p-8 md:p-12 text-white animate-fadeInUp opacity-0">
            <h2 className="text-3xl font-bold mb-6">
              Find Any Service or Offer Your Skills
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need a service or want to earn from your skills, Zempaa Digital City connects Africa's largest network of professionals and clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={goToWaitlist}
                className="bg-white cursor-pointer text-[#0E6B87] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Join as Service Provider
              </button>
              <button 
                onClick={goToWaitlist}
                className="bg-transparent cursor-pointer border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Join as Client
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ServicesGallery;