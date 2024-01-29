import CharitySectionBlock from "./CharitySectionBlock";
import charitySectionImage1 from "../img/charity-section-image1.png";
import charitySectionImage2 from "../img/charity-image-section2.png";
import charitySectionImage3 from "../img/charity-section-image3.png";
import charitySectionImage4 from "../img/charity-section-image4.png";
import charitySectionImage5 from "../img/charity-section-image5.png";
import charitySectionImage6 from "../img/charity-section-image6.png";
import blueArrow from "../img/blue-arrow.png";
function CharitySection() {
  return (
    <div className="charity-section">
      <div className="charity-section__container">
        <div className="charity-section__wrapper">
          <p className="charity-section__header">
            We collaborate with charities around the world
          </p>
          <p className="charity-section__paragraph">
            Our vet clinic prioritizes community involvement and animal welfare
            through regular charity events benefiting local animal shelters,
            rescue organizations, and related causes
          </p>
        </div>
        <div className="charity-section__wrapper">
          <div className="line"></div>
          <div className="charity-section__subelement">
            <p className="charity-section__subelement-title">110+</p>
            <p className="charity-section__subelement-paragraph">
              Animals saved all time
            </p>
          </div>
          <div className="line line-second"></div>
          <div className="charity-section__subelement">
            <p className="charity-section__subelement-title">64</p>
            <p className="charity-section__subelement-paragraph">
              Charitable events Held
            </p>
          </div>
        </div>
      </div>
      <div className="charity-section__container charity-section__container_second">
        <div className="charity-section__container_second_paragraph">
          <p>Collaborate with popular brand</p>
        </div>
        <CharitySectionBlock
          text="Happy Smile Foundation"
          img={charitySectionImage1}
          textWidth="132.04px"
        ></CharitySectionBlock>
        <CharitySectionBlock
          text="Healthy Atmosphere Foundation"
          img={charitySectionImage2}
          textWidth="137.84px"
        ></CharitySectionBlock>
        <CharitySectionBlock
          text="Friendly Hand Foundation"
          img={charitySectionImage3}
          textWidth="130px"
        ></CharitySectionBlock>
        <CharitySectionBlock
          text="We Are Together Foundation"
          img={charitySectionImage4}
          textWidth="140px"
        ></CharitySectionBlock>
        <CharitySectionBlock
          text="Circle of Life Foundation"
          img={charitySectionImage5}
          textWidth="140px"
        ></CharitySectionBlock>
        <CharitySectionBlock
          text="Good Hands Foundation"
          img={charitySectionImage6}
          textWidth="144px"
        ></CharitySectionBlock>
        <div className="charity-section__block_contacts_us">
          <p>Contact us for cooperation</p>
          <div className="custom-ball" style={{ top: "24px", right: "18px" }}>
            <img className="symbol-arrow" src={blueArrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharitySection;
