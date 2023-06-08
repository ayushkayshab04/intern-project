import { Link } from "react-router-dom";
import classes from "./ErrorComponent.module.css";

const ErrorComponent = () => {
  return (
    <div className={classes["main-div"]}>
      <div className={classes["error-div"]}>
        <p>
          Please
          <Link className={classes["login-link"]} to="/login">
            login
          </Link>
          to visit this page!
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
