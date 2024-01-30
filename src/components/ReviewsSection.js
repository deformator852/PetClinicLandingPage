import review1 from "../img/review1.png";
import review2 from "../img/review2.png";
import review3 from "../img/review3.png";
import review4 from "../img/review4.png";
import arrow from "../img/arrow.png";
function ReviewsSection() {
  return (
    <div className="reviews-section">
      <p className="reviews-section__header">
        Our clients are always satisfied
      </p>
      <div className="reviews-section__container">
        <div className="reviews-section__container__wrapper">
          <div
            className="reviews-section__min-block reviews-section__block"
            style={{ marginRight: "25px" }}
          >
            <img src={review1} />
            <p>
              I've been bringing my pets to this veterinary clinic for years and
              have never been disappointed. The vets are highly skilled and
              provide personalized care for each animal.
            </p>
          </div>
          <div className="reviews-section__max-block reviews-section__block">
            <img src={review2} />
            <p>
              I recently had a positive experience at this veterinary clinic.
              The staff was friendly and efficient, making the check-in process
              a breeze. The vet was very patient in answering my questions and
              provided clear instructions for my pet's care.{" "}
            </p>
          </div>
        </div>
        <div className="reviews-section__container__wrapper">
          <div className="reviews-section__max-block reviews-section__block">
            <img src={review3} />
            <p>
              As a satisfied client, I highly recommend this veterinary clinic.
              The staff is friendly and knowledgeable, and the vets are skilled
              and compassionate. From routine check-ups to complex surgeries,
              they provide top-notch care for all types of pets.{" "}
            </p>
          </div>
          <div
            className="reviews-section__min-block reviews-section__block"
            style={{ marginLeft: "25px" }}
          >
            <img src={review4} />
            <p>
              I recently visited this veterinary clinic for the first time and
              was thoroughly impressed. The staff was welcoming and attentive,
              making my furry friend feel right at home.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
