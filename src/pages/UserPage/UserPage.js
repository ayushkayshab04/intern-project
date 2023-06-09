import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
// import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import MyPagination from "../../components/MyPagination/MyPagination";
import classes from "./UserPage.module.css";
import React, { lazy, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

const ErrorComponent = lazy(() =>
  import("../../components/ErrorComponent/ErrorComponent")
);

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [signedIn, setSignedIn] = useContext(Context);
  const isUserSignedIn = localStorage.getItem("signedIn");
  // setSignedIn(isUserSignedIn);
  const [data, setData] = useState([]);
  const limit = 8;
  const skip = useSelector((state) => state.page.skip);
  const url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#EEEEEE";

    const getData = async () => {
      const response = await fetch(url, {
        method: "GET",
      });
      const responseData = await response.json();
      setData(responseData.users);
      setIsLoading(false);
    };

    getData()
      .then()
      .catch((e) => {
        throw new Error(e);
      });
  }, [url]);
  if (isUserSignedIn) {
    return (
      <div className={classes["user-page-div"]}>
        <div className={classes["nav-bars"]}>
          <NavBar title={"User"} />
          <SideBar />
        </div>
        {!isLoading ? (
          <div className={classes["data-div"]}>
            <div className={classes["table-div"]}>
              <table>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                </tr>
                {data.map((item) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.firstName + " " + item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>{item.birthDate}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className={classes["pagination-div"]}>
              <MyPagination name={"user"} count={4} />
            </div>
          </div>
        ) : (
          <div className={classes["data-div"]}>
            <div className={classes["table-div"]}>
              <Skeleton variant="rectangular" height={550} width={1000} />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <ErrorComponent />;
  }
};

export default UserPage;
