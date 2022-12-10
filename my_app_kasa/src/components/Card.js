import { useState } from "react";
import Lodgings from "../data/logements.json";
import "../style/Card.css";
import { Link } from "react-router-dom";
import UseTitle from "../index";

function Card() {
  UseTitle("Logements");
  const [lodgings] = useState(Lodgings);
  return (
    <div className="content">
      {lodgings.map((lodging) => (
        <Link to={`/lodging/${lodging.id}`} key={lodging.id}>
          <div key={lodging.id} className="block">
            <img src={lodging.cover} alt={lodging.title} className="topBlock" />
            <div className="titleBlock">{lodging.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
