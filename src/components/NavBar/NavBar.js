import classes from "./NavBar.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = (props) => {
  return (
    <div className={classes["nav-bar"]}>
      <div className={classes["navbar-brand"]}>
        <p>{props.title}</p>
      </div>
      <div className={classes["navbar-search"]}>
        <input
          className={classes["search-input"]}
          type="text"
          placeholder="search"
        />
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
};

export default NavBar;
