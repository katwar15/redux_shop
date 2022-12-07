import React from "react";

import "./App.css";
import { Shop } from "./features/cart/Shop";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./features/Navbar/Navbar";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <>
      <Navbar />
      <Shop />
    </>
  );
}

export default App;
