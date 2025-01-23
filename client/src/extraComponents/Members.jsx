import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
export default function Members() {
  const members = [
    { id: 1, image: m1, title: "Sakshi" },
    { id: 2, image: m2, title: "Shyam" },
    { id: 3, image: m3, title: "Raju" },
    { id: 4, image: m4, title: "Sonal" },
    { id: 5, image: m5, title: "Sonali" },
    { id: 6, image: m6, title: "Kajju" },
    { id: 7, image: m7, title: "Jackie" },
  ];

  return (
    <section className="members">
      <div className="container">
        <div className="heading_section">
          <h2 className="heading">MEMBERS</h2>
          <p>
            The members responsible for maintaining donation apps and operations
            play a vital role in ensuring seamless functionality and user
            experience. They manage the technical upkeep of the platform,
            troubleshoot issues, and implement updates to enhance performance.
           
          </p>
        </div>
        <div className="members_container">
          {members.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
