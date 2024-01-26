import HeroSection from "./HeroSection";
import "../css/main.css";
import ServicesSection from "./ServicesSection";
import DoctorsSection from "./DoctorsSection";
function Main() {
  return (
    <div className="main">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
    </div>
  );
}

export default Main;
