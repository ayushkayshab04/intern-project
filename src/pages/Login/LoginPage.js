import MyButton from "../../components/button/MyButton";
import classes from "./LoginPage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.background =
      "linear-gradient(to right, #00b09b, #96c93d) !important";
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (email && password) {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      console.log("===========", response);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      if (response.status === 200) {
        localStorage.setItem("signedIn", true);
        navigate("/users");
      }
    }
  };
  return (
    <div className={classes["login-page"]}>
      <div className={classes["login-div"]}>
        <form onSubmit={handleClick}>
          <div className={classes["login-txt"]}>
            <p>Login</p>
          </div>
          <div className={classes["input-div"]}>
            <input
              type="text"
              size={20}
              placeholder="Username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="passwrd"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={classes["button-div"]}>
            <MyButton type="submit" title={"Sign In"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
