// Components
import IntroSection from "./components/HomePage/IntroSection";
import IntroCards from "./components/HomePage/IntroCards";
import FacilitiesCards from "./components/HomePage/FacilitiesCards";
import ServicesSection from "./components/HomePage/ServicesSection";
import About from "./components/HomePage/About";
import Testimonials from "./components/HomePage/Testimonials";
import AboutDr from "./components/HomePage/AboutDr";

export const metadata = {
    openGraph: {
      type: 'article',
      url: '',
      title: 'Dr. Birinder Thind | Best Cardiologist In Noida',
      description: 'Dr. Birinder Singh Thind is a consultant cardiologist at the Thind`s Heart Clinic in Noida having a rich experience in the management and treatment of heart diseases.',
    },
    title: 'Dr. Birinder Thind | Best Cardiologist In Noida',
    description: 'Dr. Birinder Singh Thind is a consultant cardiologist at the Thind`s Heart Clinic in Noida having a rich experience in the management and treatment of heart diseases.',
}

export default function Home() {

  return (
    <>
      <IntroSection />
      <IntroCards />
      <FacilitiesCards/>
      <ServicesSection/>
      <About/>
      <Testimonials/>
      <AboutDr/>
    </>
  )
}
