import transparency from "../assets/transparency.jpg";
import community from "../assets/community.jpg";
import impact from "../assets/impact.jpg";

export default function Qualities() {
  const qualities = [
    { id: 1, image: transparency, title: "TRANSPARENCY", description:"Full transparency is a core value, ensuring that every contribution is tracked and accounted for. Donors can easily see how their funds are being used, with detailed reports providing clear insights into the impact of each donation. Building trust through open and honest communication is essential."},
    { id: 2, image: impact, title: "IMPACT MEASUREMENT",description:"Emphasizing impact measurement provides donors with clear insights into the outcomes of their contributions. Detailed reports and real-time updates show how donations are making a difference, ensuring funds are used effectively to drive positive change. Commitment to showing tangible results reinforces transparency and accountability." },
    { id: 3, image: community, title: "COMMUNITY DEVELOPMENT",description:"Supporting community development through funding and facilitating projects that enhance local well-being is a priority. Investments are made in initiatives like educational programs and infrastructure improvements that strengthen communities and address unique needs. Donors play a crucial role in fostering growth and creating opportunities that benefit entire communities." },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
