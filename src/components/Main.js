import HeroSection from "./HeroSection";
import "../css/main.css";
import ServicesSection from "./ServicesSection";
import DoctorsSection from "./DoctorsSection";
import EquipmentSection from "./EquipmentSection";
import CharitySection from "./CharitySection";
function Main() {
  return (
    <div className="main">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <EquipmentSection />
      <CharitySection />
    </div>
  );
}

export default Main;
