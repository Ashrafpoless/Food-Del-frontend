//assets
import { assets } from '../../assets/assets';
// components
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            suscipit et nulla tenetur ea unde sint amet qui eius eaque?
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+32 400 50 60 70</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        All Rights Reserved &copy; copyright, Ashraf Poless fullstack web
        developer
      </p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
