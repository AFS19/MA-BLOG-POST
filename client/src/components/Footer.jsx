import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <img src="./img/mablog.png" alt="" />
        <div className="socials">
          <Link to="#mablog.instagram.com" className="link">
            <FaInstagram className="socials-icon" />
          </Link>
          <Link to="#mablog.twitter.com" className="link">
            <FaFacebook className="socials-icon" />
          </Link>
          <Link to="#mablog.linkedin.com" className="link">
            <FaLinkedin className="socials-icon" />
          </Link>
        </div>

        <div className="copyright">mablog © 2023 • Publié avec m.afs</div>
      </div>
    </footer>
  );
}
