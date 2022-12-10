import { ReactComponent as Star } from "../assets/star.svg";
import "../style/Star.css"

function Stars(props) { 
let LogementRating = parseInt(props.children);
const starArray = [...Array(5).keys()].map((i) => i + 1);

const Rating = ({ rating }) => starArray.map((i)=> (
    <Star  fill="#e3e3e3;"
    key={`${i}`}
    className={`${rating >= i ? 'on' : 'off'}`}
  />
));

return (
<div className="star" >
  <Rating rating={LogementRating} />
</div>
);

}

export default Stars;
