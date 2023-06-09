import { useDispatch } from "react-redux";
import classes from "./NavBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { pageActions } from "../../store/PageSlice";
import { useState } from "react";

const NavBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const handleSearchClick = () => {
    if (props.title === "product") {
      dispatch(
        pageActions.setPage({ value: 1, page: 10, searchQuery: searchQuery })
      );
    } else if (props.title === "User") {
      dispatch(
        pageActions.setPage({ value: 1, page: 10, searchQuery: searchQuery })
      );
    }
  };
  return (
    <div className={classes["nav-bar"]}>
      <div className={classes["navbar-brand"]}>
        <p>{props.title}</p>
      </div>
      <div className={classes["navbar-search"]}>
        <input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className={classes["search-input"]}
          type="text"
          placeholder="search"
        />
        <button onClick={handleSearchClick}>
          <SearchIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
