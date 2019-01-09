/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 16:39:32
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 16:40:03
 */

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description UI svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */

//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 * @description UI svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
export const FrontEnd = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 480 480"
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
      <g>
        <path
          fill={fill}
          d="M392,0H88C65.92,0.026,48.026,17.92,48,40v216c0.026,22.08,17.92,39.974,40,40h109.392l-11.424,40H160v16h160v-16h-25.968
			l-11.424-40H392c22.08-0.026,39.974-17.92,40-40V40C431.974,17.92,414.08,0.026,392,0z M202.608,336l11.424-40h51.936l11.424,40
			H202.608z M416,256c0,13.255-10.745,24-24,24H88c-13.255,0-24-10.745-24-24v-16h352V256z M416,224H64V40c0-13.255,10.745-24,24-24
			h304c13.255,0,24,10.745,24,24V224z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          fill={fill}
          d="M304,368H80c-4.418,0-8,3.582-8,8v96c0,4.418,3.582,8,8,8h224c4.418,0,8-3.582,8-8v-96C312,371.582,308.418,368,304,368z
			 M296,464H88v-80h208V464z"
        />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="104" y="432" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="104" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="136" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="168" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="232" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="200" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="264" y="432" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="264" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="136" y="432" width="112" height="16" />
      </g>
    </g>
    <g>
      <g>
        <path
          fill={fill}
          d="M368,368c-22.091,0-40,17.909-40,40v32c0,22.091,17.909,40,40,40c22.091,0,40-17.909,40-40v-32
			C408,385.909,390.091,368,368,368z M392,440c0,13.255-10.745,24-24,24s-24-10.745-24-24v-32c0-13.255,10.745-24,24-24
			s24,10.745,24,24V440z"
        />
      </g>
    </g>
    <g>
      <g>
        <rect fill={fill} x="360" y="400" width="16" height="16" />
      </g>
    </g>
    <g>
      <g>
        <rect
          fill={fill}
          x="181.737"
          y="120.139"
          transform="matrix(0.2751 -0.9614 0.9614 0.2751 50.7457 323.5759)"
          width="116.43"
          height="15.993"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          fill={fill}
          d="M197.12,94.144l-10.24-12.288l-48,40c-3.393,2.83-3.85,7.874-1.02,11.268c0.309,0.37,0.65,0.712,1.02,1.02l48,40
			l10.24-12.288L156.496,128L197.12,94.144z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          fill={fill}
          d="M342.14,122.876c-0.309-0.37-0.65-0.712-1.02-1.02l-48-40l-10.24,12.288L323.504,128l-40.624,33.856l10.24,12.288l48-40
			C344.513,131.314,344.97,126.27,342.14,122.876z"
        />
      </g>
    </g>
  </svg>
);
