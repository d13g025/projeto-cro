import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import Slider from "./components/Slider";
import Facts from "./components/Facts";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import FactorsRisk from "./components/FactorsRisk";
import SectionInfo from "./components/SectionInfo";
import Coments from "./components/Coments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <SectionInfo />
    <Facts />
    <Cards />
    <FactorsRisk />
    <Coments />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
