import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import classes from "./UserPage.module.css";
import React, { useContext, useEffect, useState } from "react";
import MyPagination from "../MyPagination/MyPagination";
import { Context } from "../../App";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [signedIn, setSignedIn] = useContext(Context);
  const [data, setData] = useState([]);
  const limit = 8;
  const skip = useSelector((state) => state.page.skip);
  const url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
  useEffect(() => {
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
  if (signedIn === true) {
    return (
      <div>
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
              <MyPagination count={4} />
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
