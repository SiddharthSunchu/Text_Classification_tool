/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:06:21
 * @Last Modified by:   siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 17:06:21
 */
/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Windows(Microsoft) svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */

//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 * @description Windows(Microsoft) svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
export const Microsoft = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 305 305"
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
      id="XMLID_109_"
      fill={fill}
      d="M139.999,25.775v116.724c0,1.381,1.119,2.5,2.5,2.5H302.46c1.381,0,2.5-1.119,2.5-2.5V2.5
		c0-0.726-0.315-1.416-0.864-1.891c-0.548-0.475-1.275-0.687-1.996-0.583L142.139,23.301
		C140.91,23.48,139.999,24.534,139.999,25.775z"
    />
    <path
      id="XMLID_110_"
      fill={fill}
      d="M122.501,279.948c0.601,0,1.186-0.216,1.644-0.616c0.544-0.475,0.856-1.162,0.856-1.884V162.5
		c0-1.381-1.119-2.5-2.5-2.5H2.592c-0.663,0-1.299,0.263-1.768,0.732c-0.469,0.469-0.732,1.105-0.732,1.768l0.006,98.515
		c0,1.25,0.923,2.307,2.16,2.477l119.903,16.434C122.274,279.94,122.388,279.948,122.501,279.948z"
    />
    <path
      id="XMLID_138_"
      fill={fill}
      d="M2.609,144.999h119.892c1.381,0,2.5-1.119,2.5-2.5V28.681c0-0.722-0.312-1.408-0.855-1.883
		c-0.543-0.475-1.261-0.693-1.981-0.594L2.164,42.5C0.923,42.669-0.001,43.728,0,44.98l0.109,97.521
		C0.111,143.881,1.23,144.999,2.609,144.999z"
    />
    <path
      id="XMLID_169_"
      fill={fill}
      d="M302.46,305c0.599,0,1.182-0.215,1.64-0.613c0.546-0.475,0.86-1.163,0.86-1.887l0.04-140
		c0-0.663-0.263-1.299-0.732-1.768c-0.469-0.469-1.105-0.732-1.768-0.732H142.499c-1.381,0-2.5,1.119-2.5,2.5v117.496
		c0,1.246,0.918,2.302,2.151,2.476l159.961,22.504C302.228,304.992,302.344,305,302.46,305z"
    />
  </svg>
);