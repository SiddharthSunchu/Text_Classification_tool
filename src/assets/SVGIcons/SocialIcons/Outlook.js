//Base Component
import React from 'react';

//Style Palette
import { SIZE, COLORS } from '../../../theme/ettStylePalette';

//CSS Style
import './SocialIcons.css';

/**
 * @author Siddharth Sunchu (OICT-ETT)
 * @since 2019-03-14
 * @description Outlook Icon to use hover properties on it
 * @param {Object} style - Style Object
 * @param {Color} fill - Color of the icon
 * @param {Size} width - Size of the Icon
 * @param {Classname} className - ClassName to define different hover options
 * @param viewBox - define the viewBox of the icon
 */
export const Outlook = ({
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
      <path
        fill={fill}
        d="M496,112.011H272c-8.832,0-16,7.168-16,16s7.168,16,16,16h177.376l-98.304,76.448l-70.496-44.832  l-17.152,27.008l80,50.88c2.592,1.664,5.6,2.496,8.576,2.496c3.456,0,6.944-1.12,9.824-3.36L480,160.715v207.296H272  c-8.832,0-16,7.168-16,16s7.168,16,16,16h224c8.832,0,16-7.168,16-16v-256C512,119.179,504.832,112.011,496,112.011z"
        data-original="#1976D2"
        class="active-path"
        data-old_color="#1976D2"
      />
      <path
        fill={fill}
        d="M282.208,19.691c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48C5.472,65.707,0,72.299,0,80.011v352  c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288c3.712,0,7.328-1.28,10.208-3.68  c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.243,285.888,22.731,282.208,19.691z"
        data-original="#2196F3"
        class=""
        data-old_color="#2196F3"
      />
      <path
        fill={COLORS.SECONDARY_COLOR}
        d="M144,368.011c-44.096,0-80-43.072-80-96s35.904-96,80-96s80,43.072,80,96  S188.096,368.011,144,368.011z M144,208.011c-26.464,0-48,28.704-48,64s21.536,64,48,64s48-28.704,48-64  S170.464,208.011,144,208.011z"
        data-original="#FAFAFA"
        class=""
      />
    </g>
  </svg>
);
