//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 * @author Siddharth Sunchu (OICT) ETT | siddharth.sunchu@un.org
 * @since 2019-02-25 11:49:00
 * @description Group svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
export const Group = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 487.3 487.3"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    enableBackground="new 0 0 487.3 487.3"
  >
<g>
		<g>
			<path fill={fill} d="M362.1,326.05c-32.6-26.8-67.7-44.5-74.9-48c-0.8-0.4-1.3-1.2-1.3-2.1v-50.7c6.4-4.3,10.6-11.5,10.6-19.7v-52.6
				c0-26.2-21.2-47.4-47.4-47.4h-5.6h-5.7c-26.2,0-47.4,21.2-47.4,47.4v52.6c0,8.2,4.2,15.5,10.6,19.7v50.7c0,0.9-0.5,1.7-1.3,2.1
				c-7.2,3.5-42.3,21.3-74.9,48c-5.9,4.8-9.3,12.1-9.3,19.7v36h128h127.9v-36C371.4,338.15,368,330.85,362.1,326.05z"/>
		</g>
		<g>
			<path fill={fill} d="M479.2,290.55c-27.3-22.5-56.8-37.4-62.8-40.3c-0.7-0.3-1.1-1-1.1-1.8v-42.5c5.3-3.6,8.9-9.6,8.9-16.6v-44.1
				c0-21.9-17.8-39.7-39.7-39.7h-4.7h-4.7c-21.9,0-39.7,17.8-39.7,39.7v44.1c0,6.9,3.5,13,8.9,16.6v42.5c0,0.8-0.4,1.4-1.1,1.8
				c-3.7,1.8-16.5,8.2-32.1,18.2c15.6,8.6,40.3,23.4,63.6,42.6c8.2,6.7,13.6,16,15.6,26.2h97v-30.2
				C487,300.65,484.2,294.55,479.2,290.55z"/>
		</g>
		<g>
			<path fill={fill} d="M144,250.25c-0.7-0.3-1.1-1-1.1-1.8v-42.5c5.3-3.6,8.9-9.6,8.9-16.6v-44.1c0-21.9-17.8-39.7-39.7-39.7h-4.7h-4.9
				c-21.9,0-39.7,17.8-39.7,39.7v44.1c0,6.9,3.5,13,8.9,16.6v42.5c0,0.8-0.4,1.4-1.1,1.8c-6,2.9-35.5,17.8-62.8,40.3
				c-4.9,4.1-7.8,10.1-7.8,16.5v30.2h97c1.9-10.2,7.4-19.5,15.6-26.2c23.3-19.2,48-34,63.6-42.6
				C160.5,258.45,147.7,252.05,144,250.25z"/>
		</g>
	</g>
  </svg>
);
