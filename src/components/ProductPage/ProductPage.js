import NavBar from "../NavBar/NavBar";
import classes from "./ProductPage.module.css";
import SideBar from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import MyCard from "../Card/MyCard";
import MyPagination from "../MyPagination/MyPagination";
import { useSelector } from "react-redux";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { Skeleton } from "@mui/material";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [signedIn, setSignedIn] = useContext(Context);
  const signedIn = localStorage.getItem("signedIn");
  const limit = 10;
  const skip = useSelector((state) => state.page.skip);
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#EEEEEE";

    const getProductData = async () => {
      const response = await fetch(url, {
        method: "GET",
      });
      const responseData = await response.json();
      console.log("=============>", responseData.products);
      setProductData(responseData.products);
      setIsLoading(false);
    };

    getProductData()
      .then()
      .catch((e) => console.log(e));
  }, [url]);
  if (signedIn) {
    return (
      <div className={classes["product-page-div"]}>
        <div className={classes["nav-bars"]}>
          <NavBar title={"Product"} />
          <SideBar />
        </div>
        {!isLoading ? (
          <div className={classes["data-div"]}>
            <div className="">
              <div className={classes["product-div"]}>
                {productData.map((item) => (
                  <MyCard
                    key={item.id}
                    title={item.title}
                    image={item.thumbnail}
                    summary={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
            <div className={classes["pagination"]}>
              <MyPagination name={"product"} count={4} />
            </div>
          </div>
        ) : (
          <div className={classes["data-div"]}>
            <div className={classes["product-div"]}>
              {Array(limit)
                .fill()
                .map(() => (
                  <Skeleton
                    className={classes["product-skeleton"]}
                    variant="rectangular"
                    height={300}
                    width={230}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <ErrorComponent />;
  }
};

export default ProductPage;
