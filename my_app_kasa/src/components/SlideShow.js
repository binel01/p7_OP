import Arrow from "../assets/FlecheDroite.svg";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import lodging from "../data/logements.json";
import "../style/SlideShow.css";

function SlideShow() {
  const paramsId = useParams();
  const lodgingFind = lodging.find((object) => object.id === paramsId.id);
  // console.log(lodgingFind);
  const pictures = lodgingFind.pictures;
  const [current, setCurrent] = useState(0);
  //Si la diapositive actuelle est la dernière diapositive, passez à la première diapositive, sinon passez à la suivante
  const next = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };
  //Si la diapo actuelle est la première, réglez la diapo actuelle sur la dernière, sinon définir la diapo actuelle sur la diapo précédente.
  const prev = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };
  let onePicture = false;
  if (pictures.length === 1) {
    onePicture = true;
  }
  return (
    <div className="slider">
      <div className="fleches">
        <img
          src={Arrow}
          alt="fleche"
          onClick={prev}
          className={onePicture ? "CarouselNone" : "left"}
        />
        <img
          src={Arrow}
          alt="fleche"
          onClick={next}
          className={onePicture ? "CarouselNone" : "right"}
        />
      </div>
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
          </div>
        );
      })}
      <p className={onePicture ? "imageNumberNone" : "imageNumber"}>
        {current + 1}/{pictures.length}
      </p>
    </div>
  );
}

export default SlideShow;
