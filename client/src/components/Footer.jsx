import Logo from "../assets/logo.png";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Patna , India</li>
          <li>supportpatnateam@mail.com</li>
          <li>91 7969693744</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/x.com"}>
              <span>
                <FaTwitterSquare />{" "}
              </span>
              <span>X</span>
            </Link>
          </li>
          <li>
            <Link to={"/instagram.com"}>
              <span>
                <FaInstagramSquare />
              </span>
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link to={"/youtube.com"}>
              <span>
                <FaYoutube />
              </span>
              <span>Youtube</span>
            </Link>
          </li>
          <li>
            <Link to={"/linkdin.com"}>
              <span>
                <FaLinkedin />
              </span>
              <span>Linkedin</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
