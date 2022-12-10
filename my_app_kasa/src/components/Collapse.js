import "../style/Collapse.css";
import Chevron from "../assets/chevron.svg";
import { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ChevronUp = <img src={Chevron} alt="Fleche" className="fleche-up" />;
  const ChevronDown = <img src={Chevron} alt="Fleche" className="fleche-down" />
  ;

  return !isOpen ? (
    <div className="collapse">
      <button className="collapse-button" onClick={() => setIsOpen(true)}>
        {title}
        {ChevronDown}
      </button>
    </div>
  ) : (
    <div className="collapse">
      <button className="collapse-button" onClick={() => setIsOpen(false)}>
        {title}
        {ChevronUp}
      </button>
      <div className="collapse-texte">
        <p className="collapse-description">{description}</p>
      </div>
    </div>
  );
};

export default Collapse;
