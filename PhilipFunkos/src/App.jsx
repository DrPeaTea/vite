import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./home";
import Product from "./products";
import Contact from "./contact";

function App() {
  function home() {
    let page1 = document.querySelector(".home-page");
    let page2 = document.querySelector(".products-page");
    let page3 = document.querySelector(".contact-page");
    page1.classList.remove("disable");
    page2.classList.add("disable");
    page3.classList.add("disable");
  }
  function product() {
    let page1 = document.querySelector(".home-page");
    let page2 = document.querySelector(".products-page");
    let page3 = document.querySelector(".contact-page");
    page2.classList.remove("disable");
    page1.classList.add("disable");
    page3.classList.add("disable");
  }
  function contact() {
    let page1 = document.querySelector(".home-page");
    let page2 = document.querySelector(".products-page");
    let page3 = document.querySelector(".contact-page");
    page3.classList.remove("disable");
    page1.classList.add("disable");
    page2.classList.add("disable");
  }
  return (
    <div className="App">
      <div className="tabs">
        <div className="home" onClick={home}>
          Home
        </div>
        <div className="product" onClick={product}>
          Products
        </div>
        <div className="contant" onClick={contact}>
          Contact
        </div>
      </div>
      <Home />
      <Product />
      <Contact />
    </div>
  );
}

export default App;
