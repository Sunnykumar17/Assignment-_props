import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";
import "./index.css";

ReactDom.render(
  <>
    <Card
    colorCode = "#FF6663"
    header = "#FF6663"
    title =" PINK"
    />
    <Card
    colorCode = "#333333"
    header = "#333333"
    title =" GRAY"
    />
    <Card
    colorCode = "#000000"
    header = "#000000"
    title =" BLACK"
    />
    <Card
    colorCode = "#38BB14"
    header = "#38BB14"
    title =" GREEN"
    />
    <Card
    colorCode = "#C90B0B"
    header = "#C90B0B"
    title =" RED"
    />
    <br />
    <Card
    colorCode = "#FF8000"
    header = "#FF8000"
    title =" ORANGE"
    />
    <Card
    colorCode = "#FFF500"
    header = "#FFF500"
    title =" YELLOW"
    />
    <Card
    colorCode = "#CCCCCC"
    header = "#FFF500"
    title =" LIGHTGRAY"
    />
    <Card
    colorCode = "#7E41A2"
    header = "#7E41A2"
    title =" PURPLE"
    />
    <Card
    colorCode = "#c14911"
    header = "#c14911"
    title =" BROWN"
    />
  </>,
  document.getElementById("root")
);