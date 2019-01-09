/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 16:40:40
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 16:41:06
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
export const Location = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 61.168 61.168"
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
      d="M50.216,37.584h-7.161l3.047-4.4c5.755-7.671,4.922-20.28-1.781-26.982c-3.621-3.622-8.437-5.617-13.56-5.617
	c-5.122,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952l3.068,4.431h-7.513L0,60.584h61.168L50.216,37.584z
	 M30.938,12.584c3.859,0,7,3.141,7,7s-3.141,7-7,7s-7-3.141-7-7S27.078,12.584,30.938,12.584z M12.216,39.584h7.634l10.911,15.757
	l10.91-15.757h7.281l9.048,19H3.168L12.216,39.584z"
    />
  </svg>
);
