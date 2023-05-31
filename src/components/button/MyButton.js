import classes from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button className={classes["button-87"]} {...props}>
      {props.title}
    </button>
  );
};

export default MyButton;
