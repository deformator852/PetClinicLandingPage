import equipmentImage from "../img/equipment-image.png";
import blueArrow from "../img/blue-arrow.png";
import seconSectionImage from "../img/equipment-section2-image.png";

function EquipmentSection() {
  return (
    <div className="equipment-section">
      <div className="equipment-section-wrapper">
        <div>
          <div>
            <p className="equipment-section-header">
              Our doctors choose only the best equipment
            </p>
          </div>
          <div className="international-quality-card">
            <p>All our equipment has international quality certificates</p>
            <div className="changed-ball">
              <img className="symbol-arrow" src={blueArrow} />
            </div>
            <p>More about</p>
          </div>
          <div className="all-equipment-containers">
            <div className="all-equipment">
              <p>All equipment undergoes special treatment</p>
              <div className="custom-ball">
                <img className="symbol-arrow" src={blueArrow} />
              </div>
            </div>
            <div className="equipment-image">
              <img src={equipmentImage} />
            </div>
          </div>
        </div>
        <div className="equipment-second-container">
          <img
            className="equipment-second-container-image"
            src={seconSectionImage}
          />
          <div className="equipment-second-container-description">
            <p>
              Our clinic uses proven drugs and also provides them to our clients
            </p>
            <div className="changed-ball">
              <img className="symbol-arrow" src={blueArrow} />
            </div>
            <p>More about</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentSection;
