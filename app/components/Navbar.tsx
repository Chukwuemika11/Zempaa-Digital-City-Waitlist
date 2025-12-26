"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {

 const router = useRouter();
  
  function goToHome(){
    router.push("/")
  }

  function goTowaitlist(){
    router.push("/waitlist")
  }

  return (
    <nav className="sticky top-0 p-1 z-50 w-full border-b border-blue-50 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div onClick={goToHome} className="flex cursor-pointer items-center space-x-3">
            <Image 
              src="/images/zdc-logo.svg" 
              alt="ZDC Logo" 
              width={40} 
              height={40}
              className="h-12 w-12 lg:h-18 lg:w-18"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">Zempaa Digital City</span>
              <span className="text-xs text-gray-500">By Zempaa Group</span>
            </div>
          </div>

          {/* Coming Soon Button */}
          <button onClick={goTowaitlist}  className="rounded-lg cursor-pointer bg-linear-to-r from-[#0E6B87] to-[#0A8CB8] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md">
            Soon...
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;