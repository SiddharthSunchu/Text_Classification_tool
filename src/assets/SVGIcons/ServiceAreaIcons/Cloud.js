/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:03:16
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 17:04:58
 */
/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Cloud svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 * @description Cloud svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
export const Cloud = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 548.176 548.176"
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
    <path
      fill={fill}
      d="M524.326,297.352c-15.896-19.89-36.21-32.782-60.959-38.684c7.81-11.8,11.704-24.934,11.704-39.399   c0-20.177-7.139-37.401-21.409-51.678c-14.273-14.272-31.498-21.411-51.675-21.411c-18.083,0-33.879,5.901-47.39,17.703   c-11.225-27.41-29.171-49.393-53.817-65.95c-24.646-16.562-51.818-24.842-81.514-24.842c-40.349,0-74.802,14.279-103.353,42.83   c-28.553,28.544-42.825,62.999-42.825,103.351c0,2.474,0.191,6.567,0.571,12.275c-22.459,10.469-40.349,26.171-53.676,47.106   C6.661,299.594,0,322.43,0,347.179c0,35.214,12.517,65.329,37.544,90.358c25.028,25.037,55.15,37.548,90.362,37.548h310.636   c30.259,0,56.096-10.711,77.512-32.12c21.413-21.409,32.121-47.246,32.121-77.516C548.172,339.944,540.223,317.248,524.326,297.352   z M362.729,289.648c-1.813,1.804-3.949,2.707-6.42,2.707h-63.953v100.502c0,2.471-0.903,4.613-2.711,6.42   c-1.813,1.813-3.949,2.711-6.42,2.711h-54.826c-2.474,0-4.615-0.897-6.423-2.711c-1.804-1.807-2.712-3.949-2.712-6.42V292.355   H155.31c-2.662,0-4.853-0.855-6.563-2.563c-1.713-1.714-2.568-3.904-2.568-6.566c0-2.286,0.95-4.572,2.852-6.855l100.213-100.21   c1.713-1.714,3.903-2.57,6.567-2.57c2.666,0,4.856,0.856,6.567,2.57l100.499,100.495c1.714,1.712,2.562,3.901,2.562,6.571   C365.438,285.696,364.535,287.845,362.729,289.648z"
    />
  </svg>
);
