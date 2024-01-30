import blueArrow from "../img/blue-arrow.png";
import arrow from "../img/arrow.png";
function FormSection() {
  return (
    <div className="form-section">
      <div className="form-section__block">
        <p className="form-section__block__first_paragraph">
          Would you like us to contact you?
        </p>
        <p className="form-section__block__second_paragraph">
          We’re always in touch
        </p>
        <div className="vet-email">
          <p className="form-section__block__third_paragraph">
            pet.clinic@gmail.com
          </p>
          <div className="custom-ball" style={{ right: "16px", bottom: "0px" }}>
            <img className="symbol-arrow" src={blueArrow} />
          </div>
        </div>
      </div>
      <div className="form-section__block form-section__block__form">
        <input
          placeholder="Your name"
          className="form-section__block__form_input"
        />
        <input
          placeholder="Your Number"
          className="form-section__block__form_input"
        />
        <input
          placeholder="Type of your Pet"
          className="form-section__block__form_input"
        />
        <input
          placeholder="What time should I call you?"
          className="form-section__block__form_input"
        />
        <div className="form-section__block__form__send-button">
          <p>Send</p>
          <div className="ball">
            <img className="symbol-arrow" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
