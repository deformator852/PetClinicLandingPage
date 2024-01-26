import catImage1 from "../img/CatImage-1.png";
import symbolBall from "../img/symbol-boll.png";
import dog from "../img/Image Dog.png";
import arrow from "../img/arrow.png";
import catImage2 from "../img/CatImage-2.png";
import phone from "../img/phone.png";
import mapPin from "../img/map-pin.png";
import ArrowButton from "./ArrowButton";
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-wrapper">
        <p className="we-are">We are Pet.</p>
        <div className="phone-number">
          <img style={{ marginRight: "6px" }} src={phone} />
          +1 (671) 555-0110
        </div>
      </div>
      <p className="vets">Caring Vets, Healthy Pets - Trust Us</p>
      <div className="clinic-info">
        <div>
          <img src={catImage1} />
        </div>
        <div className="clinic-description">
          <p>
            Our veterinary clinic is a compassionate and skilled facility
            dedicated to providing high-quality medical care for pets.
          </p>
          <ArrowButton nameClass="button arrow-button clinic-description-button" />
        </div>
        <div className="dog-cat-info">
          <div className="dog">
            <img src={dog} />
            <p>
              Trust us to be your go-to vet clinic for all your pet's healthcare
              needs.
            </p>
          </div>
          <div className="cat">
            <img src={catImage2} />
            <ArrowButton nameClass="button arrow-button clinic-description-button" />
          </div>
        </div>
        <div className="address-container">
          <img style={{ marginRight: "4px" }} src={mapPin} />
          2715 Ash Dr. San Jose, South Dakota 83475
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
