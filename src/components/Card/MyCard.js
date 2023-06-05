import { Link } from "react-router-dom";
import classes from "./MyCard.module.css";

const MyCard = (props) => {
  const summary = props.summary.split("").slice(0, 42).join("");

  return (
    <div className={classes["item-card"]}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>
        {summary}
        <Link>...</Link>
      </p>
      <p>Price: ${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default MyCard;
