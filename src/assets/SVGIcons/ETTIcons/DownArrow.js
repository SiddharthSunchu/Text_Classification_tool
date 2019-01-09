/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 16:37:15
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 16:39:22
 */

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Down arrow svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */

//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 *@description Down arrow svg Icon with flexible size and color
 *@description Can also declare classname to have css style as well
 */
export const DownArrow = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.X_MEDIUM,
  className = "",
  viewBox = "0 0 129 129",
  onClick
}) => (
  <div onClick={onClick}>
    <svg
      width={width}
      style={{ position: "relative", ...style }}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 129 129"
    >
      {" "}
      <g transform="matrix(6.12323e-17, 1, -1, 6.12323e-17, 129, 0)">
        <g>
          <g>
            <path
              fill={fill}
              d="M64.5,122.6c32,0,58.1-26,58.1-58.1S96.5,6.4,64.5,6.4S6.4,32.5,6.4,64.5S32.5,122.6,64.5,122.6z M64.5,14.6    c27.5,0,49.9,22.4,49.9,49.9S92,114.4,64.5,114.4S14.6,92,14.6,64.5S37,14.6,64.5,14.6z"
            />
            <path
              fill={fill}
              d="m51.1,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l26.4-26.4c0.8-0.8 1.2-1.8 1.2-2.9 0-1.1-0.4-2.1-1.2-2.9l-26.4-26.4c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l23.5,23.5-23.5,23.5c-1.6,1.6-1.6,4.2 0,5.8z"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
);
