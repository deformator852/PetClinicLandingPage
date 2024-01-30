import HeroSection from "./HeroSection";
import "../css/main.css";
import ServicesSection from "./ServicesSection";
import DoctorsSection from "./DoctorsSection";
import EquipmentSection from "./EquipmentSection";
import CharitySection from "./CharitySection";
import ReviewsSection from "./ReviewsSection";
import FormSection from "./FormSection";
function Main() {
  return (
    <div className="main">
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
      <EquipmentSection />
      <CharitySection />
      <ReviewsSection />
      <FormSection />
    </div>
  );
}

export default Main;
