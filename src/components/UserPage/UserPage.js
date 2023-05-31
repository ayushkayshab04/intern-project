import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import classes from "./UserPage.module.css";

const UserPage = () => {
  return (
    <div className={classes["nav-bars"]}>
      <NavBar />
      <SideBar />
    </div>
  );
};

export default UserPage;
