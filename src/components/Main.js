import HeroSection from "./HeroSection";
import "../css/main.css";
import ServicesSection from "./ServicesSection";
import DoctorsSection from "./DoctorsSection";
import EquipmentSection from "./EquipmentSection";
function Main() {
  return (
    <div className="main">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <EquipmentSection />
    </div>
  );
}

export default Main;
