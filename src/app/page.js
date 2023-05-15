'use client';

// Components
import IntroSection from "./components/HomePage/IntroSection";
import IntroCards from "./components/HomePage/IntroCards";
import FacilitiesCards from "./components/HomePage/FacilitiesCards";


export default function Home() {

  return (
    <>
      <IntroSection />
      <IntroCards />
      <FacilitiesCards/>
    </>
  )
}
