import UseTitle from "../index";
import lodging from "../data/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SlideShow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import Star from "../components/Stars";
import "../style/Lodging.css";

function Lodging() {
  UseTitle("Home logement");
  const paramsId = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let product = lodging.find((product) => paramsId.id === product.id);
    if (!product) {
      navigate("/error");
    }
  });

  return (
    <div className="lodging">
      {lodging
        .filter((product) => product.id === paramsId.id)
        .map((product, index) => (
          <div key={product.id - index} className="">
            <SlideShow />
            <section className="info">
              <article className="lodgingInfo">
                <div className="lodgingLocation">
                  <h1>{product.title}</h1>
                  <p className="localisation">{product.location}</p>
                  <ul className="lodgingTag">
                    {product.tags.map((tag) => (
                      <li className="lodgingTagItem" key={tag + lodging.id}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="lodgingInfoHost">
                <div className="hostInfo">
                  <p className="hostName">{product.host.name}</p>
                  <img
                    className="hostPicture"
                    src={product.host.picture}
                    alt="Hôte"
                  />
                </div>
                <Star>{product.rating}</Star>
              </article>
            </section>
            <section className="moreInfo">
              <Collapse title="Description" description={product.description} />
              <Collapse
                title="Équipements"
                description={product.equipments.map((equipment) => (
                  <li className="infoEquipments" key={equipment + lodging.id}>
                    {equipment}
                  </li>
                ))}
              />
            </section>
          </div>
        ))}
    </div>
  );
}

export default Lodging;
