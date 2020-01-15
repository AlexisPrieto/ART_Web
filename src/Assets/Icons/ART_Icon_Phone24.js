import React from "react";

const SVG = ({
  style ={},//"enable-background:new 0 0 49.827 49.827;",
  fill = "#010002",
  width = "100%",
  className = "",
  viewBox = "0 0 170.000000 111.000000"
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
    <g transform="translate(0.000000,141.000000) scale(0.100000,-0.100000)">
        <path fill={fill} d="M877 1304 c-13 -13 -8 -151 6 -162 27 -23 38 3 35 84 -2 62 -6 79
        -18 82 -9 1 -19 0 -23 -4z"/>
        <path fill={fill} d="M684 1257 c-7 -20 53 -147 70 -147 28 0 28 20 0 90 -20 52 -32 70
        -46 70 -10 0 -21 -6 -24 -13z"/>
        <path fill={fill} d="M1050 1204 c-17 -36 -30 -69 -30 -74 0 -14 25 -29 37 -22 16 10 65
        132 59 148 -12 32 -38 12 -66 -52z"/>
        <path fill={fill} d="M514 1149 c-9 -15 105 -129 122 -122 26 10 14 39 -34 86 -47 46 -74
        58 -88 36z"/>
        <path fill={fill} d="M1190 1105 c-50 -51 -53 -56 -38 -71 15 -15 21 -13 72 36 56 53 72
        90 38 90 -10 0 -42 -25 -72 -55z"/>
        <path fill={fill} d="M332 1049 c-109 -54 -129 -100 -101 -230 48 -225 305 -575 489 -667
        71 -36 98 -39 142 -16 54 28 128 104 128 132 0 30 -151 189 -188 199 -14 3
        -49 -2 -80 -12 l-55 -17 -24 29 c-37 44 -163 233 -163 244 0 6 16 31 35 56 19
        25 35 55 35 67 0 32 -79 208 -102 229 -28 24 -45 22 -116 -14z m127 -113 c22
        -52 41 -98 41 -102 0 -4 -18 -29 -40 -55 -22 -26 -40 -53 -40 -59 0 -27 131
        -225 197 -299 l38 -42 59 21 c33 11 67 18 76 15 8 -3 47 -37 85 -76 l70 -70
        -49 -45 c-26 -24 -59 -47 -72 -50 -70 -18 -261 144 -382 323 -136 201 -208
        418 -154 466 18 16 110 67 122 67 4 0 26 -42 49 -94z"/>
        <path fill={fill} d="M1300 973 c-73 -30 -86 -42 -66 -62 12 -11 25 -9 86 15 58 22 70 31
        68 47 -4 29 -15 29 -88 0z"/>
        <path fill={fill} d="M731 946 c-26 -15 -50 -51 -51 -78 0 -13 8 -18 25 -18 15 0 25 6 25
        14 0 18 27 46 45 46 18 0 45 -28 45 -46 0 -8 -26 -41 -59 -73 -59 -58 -93
        -123 -74 -142 6 -6 48 -9 94 -7 78 3 84 4 87 26 3 21 0 22 -57 22 -34 0 -61 4
        -61 10 0 5 25 33 54 63 30 30 58 66 62 81 9 36 -13 84 -47 101 -34 18 -57 18
        -88 1z"/>
        <path fill={fill} d="M984 918 c-15 -24 -45 -71 -66 -105 -52 -83 -49 -97 25 -101 l57 -3
        0 -34 c0 -31 3 -35 25 -35 22 0 25 4 25 35 0 31 3 35 25 35 20 0 25 5 25 25 0
        20 -5 25 -25 25 -24 0 -24 1 -27 97 -3 83 -6 98 -20 101 -11 2 -26 -12 -44
        -40z m16 -118 c0 -36 -2 -40 -25 -40 -14 0 -25 2 -25 5 0 6 44 75 48 75 1 0 2
        -18 2 -40z"/>
        <path fill={fill} d="M1256 794 c-11 -29 7 -35 90 -32 71 3 79 5 79 23 0 18 -8 20 -81 23
        -69 2 -83 0 -88 -14z"/>
        <path fill={fill} d="M1225 650 c-4 -7 -1 -18 6 -26 20 -20 131 -63 147 -57 25 10 6 38
        -42 61 -62 30 -101 37 -111 22z"/>
        <path fill={fill} d="M1145 530 c-9 -15 9 -42 60 -89 48 -44 68 -48 73 -14 2 14 -13 35
        -49 67 -51 46 -72 55 -84 36z"/>
        <path fill={fill} d="M1024 445 c-7 -18 32 -130 52 -146 17 -14 34 -3 34 21 0 10 -12 46
        -26 79 -26 59 -49 77 -60 46z"/>
    </g>
  </svg>
);

export default SVG;
