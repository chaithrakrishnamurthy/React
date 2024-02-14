import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";

const StarRating = ({ noOfStar =5}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseHover = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = (getCurrentIndex) => {
    setHover(rating);
  };
  return (
    <div>
      {[...Array(noOfStar)].map((_, index) => {
        index = index+1;
        return (
          <FaStar className={index<= (hover ||rating)? "Active" :"Inactive"}
            key={index}
            onClick={() => handleRating(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

