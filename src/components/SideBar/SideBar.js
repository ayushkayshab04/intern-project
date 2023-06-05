import { Link } from "react-router-dom";
import classes from "./SideBar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { Context } from "../../App";

const SideBar = () => {
  const [signedIn, setSignedIn] = useContext(Context);
  const logout = () => {
    setSignedIn(false);
  };
  return (
    <div className={classes.navbar}>
      <nav>
        <div className={classes["nav-item"]}>
          <AccountCircleIcon fontSize="large" />
          <Link className={classes["nav-link"]} to="/user">
            User
          </Link>
        </div>
        <div className={classes["nav-item"]}>
          <InventoryIcon fontSize="large" />
          <Link className={classes["nav-link"]} to="/product">
            Product
          </Link>
        </div>
        <div className={classes["logout"]}>
          <LogoutIcon fontSize="large" />
          <Link onClick={logout} className={classes["nav-link"]} to="/login">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
