import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";
import ZempaaServicesSection from "./components/ZempaaServicesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FocusSection from "./components/FocusSection";
import SolutionsSection from "./components/SolutionsSection";
import Footer from "./components/Footer";

export default function Home() {
   return (
    <div>
      <Navbar/>
      <Hero/>
      <ServiceSection/>
      <ZempaaServicesSection/>
      <HowItWorksSection/>
      <FocusSection/>
      <SolutionsSection />
      <Footer />
    </div>
  );
}
