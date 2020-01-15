import React from "react";

const SVG = ({
  style ={},//"enable-background:new 0 0 49.827 49.827;",
  fill = "#010002",
  width = "100%",
  className = "",
  viewBox = "-10 -10 70 50"
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
    <g>
      <path fill={fill} class="st0" d="M7.3,5.2c-4,0-7.3,3.2-7.3,7.1v20.5c0,3.9,3.3,7.1,7.3,7.1c4,0,7.3-3.2,7.3-7.1V12.3
        C14.6,8.4,11.3,5.2,7.3,5.2z M11.9,32.8c0,2.5-2.1,4.5-4.7,4.5c-2.6,0-4.7-2-4.7-4.5V12.3c0-2.5,2.1-4.5,4.7-4.5
        c2.6,0,4.7,2,4.7,4.5V32.8z"/>
      <g>
        <rect x="23.5" y="17.4" class="st0" width="19.2" height="2.6"/>
      </g>
      <g>
        <rect x="23.5" y="24.7" class="st0" width="4.9" height="2.6"/>
        <rect x="30.6" y="24.7" class="st0" width="4.9" height="2.6"/>
        <rect x="37.8" y="24.7" class="st0" width="4.9" height="2.6"/>
      </g>
      <g>
        <rect x="23.5" y="30.3" class="st0" width="4.9" height="2.6"/>
        <rect x="30.6" y="30.3" class="st0" width="4.9" height="2.6"/>
        <rect x="37.8" y="30.3" class="st0" width="4.9" height="2.6"/>
      </g>
      <g>
        <rect x="23.5" y="35.9" class="st0" width="4.9" height="2.6"/>
        <rect x="30.6" y="35.9" class="st0" width="4.9" height="2.6"/>
        <rect x="37.8" y="35.9" class="st0" width="4.9" height="2.6"/>
      </g>
      <path fill={fill} class="st0" d="M42.5,11.2H17.2v2.6h0v19c0,5.1-4,9.3-9.1,9.7H7.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3v0
        c0,0,0,0,0,0c0,0,0,0,0,0l35.2-0.1c3.6,0,6.5-2.9,6.5-6.5V17.7C49,14.1,46.1,11.2,42.5,11.2z M46.4,38.5c0,2.2-1.8,3.9-3.9,3.9
        L15,42.5c2.9-2.2,4.7-5.7,4.8-9.6h0V13.8h22.7c2.2,0,3.9,1.8,3.9,3.9V38.5z"/>
    </g>
  </svg>
);

export default SVG;
