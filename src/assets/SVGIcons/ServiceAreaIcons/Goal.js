/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:06:01
 * @Last Modified by:   siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 17:06:01
 */
/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Goal svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */

//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 * @description Goal svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
export const Goal = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 512 512"
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
      d="M512,65.826l-76.797,10.969L446.175,0l-58.415,58.413c-39.762-27.068-87.789-42.898-139.518-42.898
                C111.141,15.515,0,126.656,0,263.758S111.141,512,248.242,512c137.1,0,248.242-111.141,248.242-248.242
                c0-51.729-15.83-99.758-42.898-139.52L512,65.826z M248.242,449.939c-102.825,0-186.182-83.357-186.182-186.182
                S145.417,77.576,248.242,77.576c43.024,0,82.634,14.601,114.16,39.108l-44.406,44.406c-19.88-13.534-43.891-21.453-69.755-21.453
                c-68.551,0-124.121,55.571-124.121,124.121s55.571,124.121,124.121,124.121s124.121-55.571,124.121-124.121
                c0-25.864-7.919-49.875-21.453-69.755l44.406-44.406c24.508,31.527,39.107,71.137,39.107,114.16
                C434.424,366.583,351.066,449.939,248.242,449.939z M237.728,274.271c9.087,9.089,23.824,9.089,32.914,0l34.749-34.749
                c3.16,7.447,4.912,15.638,4.912,24.236c0,34.276-27.786,62.061-62.061,62.061s-62.061-27.785-62.061-62.061
                s27.786-62.061,62.061-62.061c8.599,0,16.789,1.75,24.235,4.912l-34.749,34.749C228.641,250.446,228.641,265.182,237.728,274.271z
                "
    />
  </svg>
);
