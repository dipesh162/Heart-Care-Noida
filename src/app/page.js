'use client';

// Components
import IntroSection from "./components/HomePage/IntroSection";
import IntroCards from "./components/HomePage/IntroCards";
import FacilitiesCards from "./components/HomePage/FacilitiesCards";
import ServicesSection from "./components/HomePage/ServicesSection";
import About from "./components/HomePage/About";
import Testimonials from "./components/HomePage/Testimonials";

export default function Home() {

  return (
    <>
      <IntroSection />
      <IntroCards />
      <FacilitiesCards/>
      <ServicesSection/>
      <About/>
      <Testimonials/>
    </>
  )
}
