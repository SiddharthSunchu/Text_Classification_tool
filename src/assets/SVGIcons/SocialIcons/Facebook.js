/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:06:52
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 17:07:55
 */
/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Facebook Icon have props width fill and style
 * @description Can also declare classname to have css style as well
 */

//Base Component
import React from 'react';

//Style Palette
import { COLORS, SIZE } from '../../../theme/ettStylePalette';

//CSS Style
import './SocialIcons.css';

/**
 * @description Facebook Icon have props width fill and style
 * @description Can also declare classname to have css style as well
 */
export const Facebook = ({
  style = {},
  fill = '',
  width = SIZE.MEDIUM,
  className = 'social-icons',
  viewBox = '0 0 512 512'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          fill={fill}
          d="M476.69,512H35.31C15.89,512,0,496.11,0,476.69V35.31C0,15.89,15.89,0,35.31,0H476.69
	C496.11,0,512,15.89,512,35.31V476.69C512,496.11,496.11,512,476.69,512"
        />
        <path
          fill={COLORS.SECONDARY_COLOR}
          d="M432.552,88.276v88.276h-79.448c-9.71,0-17.655,7.945-17.655,17.655v52.966h88.276v88.276h-88.276
	V512h-88.276V335.448h-70.621v-88.276h70.621v-52.966c0-55.614,42.372-101.517,97.103-105.931H432.552z"
        />
      </g>
    </g>
  </svg>
);
