import ArrowButton from "./ArrowButton";
import womenImage from "../img/women-image.png";
function DoctorsSection() {
  return (
    <div className="doctors-section">
      <p className="doctors-section-header">
        Our doctors provide a wide range of services, from routine check-ups
      </p>
      <div className="doctor-card">
        <div className="doctor-card-wrapper">
          <p>
            Our veterinarians have completed extensive training and education in
            veterinary medicine, including a Doctor of Veterinary Medicine (DVM)
            degree from an accredited veterinary school.
          </p>
          <div className="doctors">
            <ul className="doctors-list">
              <li>Surgeons</li>
              <li>Dentists</li>
              <li>Therapists</li>
              <li>Ophthalmologists</li>
            </ul>
            <ArrowButton nameClass="button arrow-button doctor-services-button" />
          </div>
        </div>
        <div className="women">
          <img src={womenImage} alt="doctor women image" />
          <ArrowButton nameClass="button arrow-button doctor-view-all" />
        </div>
      </div>
    </div>
  );
}

export default DoctorsSection;
