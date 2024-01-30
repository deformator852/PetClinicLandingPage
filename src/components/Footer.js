import "../css/footer.css";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import telegram from "../img/telegram.png";
function Footer() {
  return (
    <div className="footer">
      <p className="footer-header">Always happy to help your friend</p>
      <div className="footer__free-call-button">Free call</div>
      <div className="footer__expanded-menu">
        <div className="footer__expanded-menu__item">
          <p>About us</p>
          <p>Address</p>
          <p>Connection</p>
        </div>
        <div className="footer__expanded-menu__item">
          <p>Services</p>
          <p>Dentistry</p>
          <p>Documentation</p>
          <p>Vaccination</p>
          <p>Surgery</p>
          <p>Consultation</p>
          <p>Newborns</p>
        </div>
        <div className="footer__expanded-menu__item">
          <p>Doctors</p>
          <p>Specialists</p>
          <p>Licenses</p>
          <p>Practice</p>
          <p>Vacancies</p>
        </div>
        <div className="footer__expanded-menu__item">
          <p>Equipment</p>
          <p>Certificates</p>
          <p>Exploitation</p>
        </div>
        <div className="footer__expanded-menu__item">
          <p>Charity</p>
          <p>Promotions</p>
          <p>Partners</p>
          <p>Achievements</p>
        </div>
        <div className="footer__expanded-menu__item">
          <p>Reviews</p>
          <p>Our clients</p>
          <p>On platforms</p>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__information">
        <div className="footer__information__block">
          <p>&copy; Copywriting | All Rights Reserved</p>
        </div>
        <div className="footer__information__block">
          <p>
            <img src={instagram} />
          </p>
          <p>
            <img src={facebook} />
          </p>
          <p>
            <img src={linkedin} />
          </p>
          <p>
            <img src={telegram} />
          </p>
        </div>
        <div className="footer__information__block">
          <p>Terms of Use | Privacy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
