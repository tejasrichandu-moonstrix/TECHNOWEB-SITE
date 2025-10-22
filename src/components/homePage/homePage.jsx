import NavBar from "./navBar";
import HeroSection from "./heroSection";
import Details from "./details"
import DarkHeroSection from "./DarkHeroSection";
import ServicesGrid from "./ServicesGrid";
import Development from "./developmentPhases";
import FeaturesSection from "./ourProducts";
import Products from "./ourProductCards"
import ValuesSection from "./valuesSection"
import FeaturedWorks from"./Featured"
import Partners from "./Partners"
import Insights from "../Insights/Insights";
import Clients from "./clients"
import Form from "./form"
import Footer  from "./footer"
function HomePage() {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      <Details/>
      <DarkHeroSection/>
      <ServicesGrid/>
      <Development/>
      <FeaturesSection/>
      <Products/>
      <ValuesSection/>
      <FeaturedWorks/>
      <Partners/>
      <Insights />
      <Clients/>
      <Form/>      
    </div>
  );
}
export default HomePage;
