import { Link } from "react-router-dom";
import Heroimg from "../assets/hero.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
          We provide a convenient platform for individuals and organizations to
          contribute to causes they care about. These apps make it easy to
          donate securely and quickly, offering features like recurring
          donations, progress tracking, and detailed reports on how funds are
          being used. With user-friendly interfaces, they simplify the process
          of giving, allowing donors to support various charities, non-profits,
          or crowdfunding campaigns with just a few taps on their devices.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src={Heroimg} alt="Hero" />
      </div>
    </section>
  );
}
