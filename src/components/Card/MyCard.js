import { Link } from "react-router-dom";
import classes from "./MyCard.module.css";
import ProductModal from "../../UI/ProductModal";

const MyCard = (props) => {
  const summary = props.summary.split("").slice(0, 42).join("");
  console.log("=================PROPS>", props.summary);

  return (
    <div className={classes["item-card"]}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>
        {summary}
        <Link>...</Link>
      </p>
      <p>Price: ${props.price}</p>
      <div className={classes["card-button"]}>
        <ProductModal
          title={props.title}
          key={props.id}
          summary={props.summary}
          images={props.multiImg}
        />
      </div>
    </div>
  );
};

export default MyCard;
