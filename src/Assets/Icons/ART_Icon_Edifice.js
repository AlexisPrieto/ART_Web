import React from "react";

const SVG = ({
  style = {}, //"enable-background:new 0 0 49.827 49.827;",
  fill = "#010002",
  width = "100%",
  className = "",
  viewBox = "-100 -40 724 624"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill={fill} d="m458.706 491.471v-425.942c0-36.14-29.389-65.529-65.53-65.529h-262.117c-36.14 0-65.529 29.389-65.529 65.529v425.941h-32.765v32.765h458.706v-32.765h-32.765zm-163.824-393.177h65.529v65.529h-65.529zm0 98.294h65.529v65.529h-65.529zm0 98.294h65.529v65.529h-65.529zm-131.058-196.588h65.529v65.529h-65.529zm0 98.294h65.529v65.529h-65.529zm0 98.294h65.529v65.529h-65.529zm32.764 196.589v-98.294h131.059v98.294z"/>
  </svg>
);

export default SVG;
