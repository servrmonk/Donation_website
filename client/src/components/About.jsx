
import aboutImg from '../assets/about.png'
export default function About() {
  return (
    <section className="about">
    <div className="hero">
      <div className="banner">
        <h1>Our Story</h1>
        <p>
        This  platform is designed to connect donors with causes that create meaningful impact. Built on the values of transparency and accountability, it provides detailed insights into how every contribution is used, ensuring full visibility at every stage. By offering real-time tracking and comprehensive reports, donors can see the direct outcomes of their support, empowering them to make informed decisions. With a strong focus on community development, the platform supports a wide range of initiatives that promote education, healthcare, and infrastructure growth. Together, we are not just giving donations but investing in sustainable change that uplifts communities and transforms lives.
        </p>
      </div>
      <div className="banner">
        <img src={aboutImg} alt="aboutImg" />
      </div>
    </div>
  </section>
  )
}
