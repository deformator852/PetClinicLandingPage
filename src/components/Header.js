import logo from "../img/logo.png";
import "../css/header.css";
function Header() {
  return (
    <div className="header">
      <div className="navigation">
        <a href="#" className="logo">
          <img src={logo} />
        </a>
        <ul>
          <li class="nav-item about-us">About us</li>
          <li class="nav-item">Services</li>
          <li class="nav-item">Doctors</li>
          <li class="nav-item">Equipment</li>
          <li class="nav-item">Charity</li>
          <li class="nav-item">Reviews</li>
        </ul>
        <div className="header-buttons">
          <div className="button questionnaire-button">Questionnaire</div>
          <div className="button free-call-button">Free Call</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
