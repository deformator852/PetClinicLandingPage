import Card from "./Card";
import cards1Dog from "../img/cards1-dog.png";
import cards1Man from "../img/cards1-man.png";
import cards1SecondDog from "../img/cards1-second-dog.png";
import cards2Cat from "../img/cards2-cat.png";
import cards2Dog from "../img/cards2-dog.png";
import cards2SecondCat from "../img/cards2-second-cat.png";
function ServicesSection() {
  return (
    <div className="services-section">
      <p className="services-section-header">
        Our clinic provides a wide range of services
      </p>
      <div className="cards-1">
        <Card
          imgPath={cards1Dog}
          cardHeaderText="Dentistry for animals"
          cardDescriptionText="Just like humans, animals can develop dental problems such as tooth decay, gum disease, and tooth loss."
        />
        <Card
          imgPath={cards1Man}
          cardHeaderText="Your pet's Documents"
          cardDescriptionText="Animals do not require legal documents like humans do. However, some animals may need certain documents for spec..."
        />
        <Card
          imgPath={cards1SecondDog}
          cardHeaderText="Vaccination"
          cardDescriptionText="Vaccination for animals is the process of administering a vaccine to an animal to help prevent the spread of diseases."
        />
      </div>
      <p className="cards-title">From surgery to behavioral consultations</p>
      <div className="cards-2">
        <Card
          imgPath={cards2Cat}
          cardHeaderText="Surgery for pets"
          cardDescriptionText="Pet surgery refers to medical procedures performed on animals under anesthesia by a licensed veteri..."
        />
        <Card
          imgPath={cards2Dog}
          cardHeaderText="Consultation"
          cardDescriptionText="The veterinarian may also perform diagnostic tests such as blood work, urinalysis, or x-rays to help diagnose..."
        />
        <Card
          imgPath={cards2SecondCat}
          cardHeaderText="Caring for newborn"
          cardDescriptionText="Animals do not require legal documents like humans do. However, some animals may need certain documents for spec..."
        />
      </div>
    </div>
  );
}

export default ServicesSection;
