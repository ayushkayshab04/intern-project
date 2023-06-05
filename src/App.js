import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import RootLayout from "./components/pages/root";
import React, { useState } from "react";
import UserPage from "./components/UserPage/UserPage";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
export const Context = React.createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
    ],
  },
]);
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
