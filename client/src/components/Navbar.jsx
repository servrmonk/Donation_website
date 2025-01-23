import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBitcoin, FaYoutube, FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className={show ? "navbar show_navbar" : "navbar"}>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/donate"}>DONATE US</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
        <ul>
          <li>
            <FaBitcoin />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaSquareGithub />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
      </div>
      <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
    </nav>
  );
}
