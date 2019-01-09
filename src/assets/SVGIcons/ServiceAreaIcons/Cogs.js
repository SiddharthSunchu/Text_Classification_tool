/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:05:21
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 17:05:45
 */
/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Cogs svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */

//Base Component
import React from "react";

//Style Palette
import { COLORS, SIZE } from "../../../theme/ettStylePalette";

/**
 * @description Cogs svg Icon with flexible size and color
 * @description Can also declare classname to have css style as well
 */
export const Cogs = ({
  style = {},
  fill = COLORS.ICON_PRIMARY_COLOR,
  width = SIZE.MEDIUM,
  className = "",
  viewBox = "0 0 363.715 363.715"
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
      d="M236.25,222.275c0.865-3.233,0.421-6.608-1.252-9.506l-26.079-45.174c-2.232-3.864-6.393-6.267-10.862-6.267
		c-2.186,0-4.347,0.582-6.249,1.681l-13.595,7.85c-5.525-4.053-11.5-7.526-17.834-10.332v-15.662
		c0-6.908-5.621-12.526-12.527-12.526H95.688c-6.906,0-12.525,5.618-12.525,12.526v15.661c-6.335,2.806-12.309,6.28-17.835,10.333
		l-13.595-7.849c-1.902-1.099-4.064-1.68-6.25-1.68c-4.468,0-8.629,2.401-10.861,6.266L8.542,212.768
		c-1.673,2.899-2.118,6.274-1.253,9.507c0.867,3.232,2.939,5.934,5.836,7.605l13.557,7.826c-0.365,3.391-0.559,6.832-0.559,10.318
		c0,3.486,0.193,6.928,0.559,10.319l-13.557,7.827c-2.898,1.672-4.969,4.373-5.836,7.606c-0.865,3.231-0.42,6.608,1.253,9.505
		l26.079,45.174c2.232,3.865,6.394,6.266,10.861,6.266c2.186,0,4.348-0.58,6.25-1.68l13.596-7.849
		c5.525,4.052,11.5,7.526,17.834,10.332v15.661c0,3.346,1.303,6.491,3.67,8.857c2.366,2.365,5.512,3.67,8.855,3.67h52.164
		c6.906,0,12.527-5.62,12.527-12.527v-15.662c6.334-2.806,12.308-6.279,17.833-10.332l13.596,7.849c1.902,1.1,4.064,1.68,6.249,1.68
		c4.47,0,8.63-2.4,10.862-6.266l26.079-45.174c1.673-2.897,2.117-6.273,1.252-9.505c-0.865-3.233-2.938-5.935-5.834-7.606
		l-13.557-7.828c0.365-3.391,0.558-6.833,0.558-10.319c0-3.486-0.192-6.928-0.558-10.318l13.557-7.827
		C233.313,228.209,235.385,225.508,236.25,222.275z M121.77,302.423c-30.043,0-54.396-24.354-54.396-54.397
		c0-30.041,24.354-54.396,54.396-54.396s54.397,24.355,54.397,54.396C176.167,278.068,151.813,302.423,121.77,302.423z"
    />
    <path
      fill={fill}
      d="M167.512,93.593c-0.572,2.14-0.277,4.374,0.83,6.29l17.256,29.892c1.479,2.559,4.231,4.146,7.188,4.146
		c1.447,0,2.876-0.384,4.137-1.111l9.002-5.197c3.654,2.68,7.606,4.972,11.795,6.827v10.377c0,2.214,0.861,4.295,2.428,5.861
		c1.566,1.566,3.647,2.427,5.86,2.427h34.517c4.57,0,8.29-3.718,8.29-8.288v-10.377c4.188-1.856,8.14-4.148,11.794-6.828
		l9.004,5.198c1.258,0.728,2.688,1.111,4.135,1.111c2.957,0,5.711-1.588,7.188-4.146l17.256-29.892
		c1.108-1.916,1.402-4.15,0.83-6.29c-0.574-2.139-1.944-3.926-3.861-5.033l-8.975-5.182c0.241-2.243,0.373-4.519,0.373-6.825
		c0-2.306-0.132-4.581-0.373-6.825l8.975-5.181c1.917-1.107,3.287-2.895,3.861-5.034c0.572-2.139,0.277-4.372-0.83-6.29
		l-17.256-29.892c-1.477-2.558-4.23-4.147-7.188-4.147c-1.447,0-2.877,0.385-4.135,1.113l-9.004,5.198
		c-3.654-2.68-7.605-4.972-11.794-6.827V8.289c0-4.57-3.72-8.289-8.29-8.289h-34.517c-4.57,0-8.288,3.719-8.288,8.289v10.378
		c-4.188,1.856-8.141,4.148-11.794,6.827l-9.003-5.198c-1.261-0.729-2.689-1.113-4.137-1.113c-2.956,0-5.709,1.59-7.188,4.147
		l-17.256,29.892c-1.107,1.918-1.402,4.151-0.83,6.29c0.574,2.14,1.945,3.927,3.861,5.034l8.975,5.181
		c-0.241,2.243-0.373,4.519-0.373,6.825c0,2.307,0.132,4.582,0.373,6.825l-8.975,5.182
		C169.457,89.667,168.086,91.454,167.512,93.593z M243.266,40.558c19.881,0,35.996,16.116,35.996,35.995
		s-16.115,35.995-35.996,35.995c-19.88,0-35.995-16.116-35.995-35.995S223.386,40.558,243.266,40.558z"
    />
    <path
      fill={fill}
      d="M354.003,209.477l-6.179-3.567c0.167-1.544,0.258-3.111,0.258-4.699c0-1.588-0.091-3.154-0.258-4.699l6.179-3.567
		c1.319-0.762,2.263-1.992,2.657-3.465c0.395-1.473,0.191-3.01-0.57-4.33l-11.88-20.576c-1.017-1.762-2.911-2.855-4.946-2.855
		c-0.996,0-1.98,0.265-2.848,0.766l-6.197,3.578c-2.516-1.845-5.236-3.423-8.119-4.7v-7.144c0-3.145-2.56-5.706-5.705-5.706h-23.76
		c-3.147,0-5.706,2.561-5.706,5.706v7.144c-2.884,1.277-5.603,2.855-8.119,4.7l-6.198-3.578c-0.866-0.501-1.851-0.766-2.847-0.766
		c-2.035,0-3.931,1.093-4.946,2.855L252.94,185.15c-0.764,1.32-0.967,2.857-0.572,4.33c0.396,1.473,1.339,2.703,2.658,3.465
		l6.18,3.567c-0.167,1.544-0.258,3.11-0.258,4.698c0,1.588,0.091,3.154,0.258,4.698l-6.18,3.567
		c-1.319,0.761-2.263,1.99-2.658,3.464c-0.395,1.473-0.191,3.011,0.572,4.33l11.879,20.576c1.016,1.762,2.911,2.855,4.946,2.855
		c0.996,0,1.98-0.266,2.847-0.766l6.198-3.578c2.516,1.845,5.235,3.422,8.119,4.7v7.144c0,1.523,0.593,2.957,1.671,4.034
		c1.078,1.079,2.512,1.672,4.035,1.672h23.76c3.145,0,5.705-2.56,5.705-5.706v-7.144c2.883-1.277,5.604-2.855,8.119-4.7l6.197,3.578
		c0.867,0.5,1.852,0.766,2.848,0.766c2.035,0,3.93-1.093,4.946-2.855l11.88-20.576c0.762-1.319,0.965-2.857,0.57-4.33
		C356.266,211.467,355.322,210.237,354.003,209.477z M304.515,225.989c-13.686,0-24.778-11.095-24.778-24.778
		c0-13.685,11.092-24.779,24.778-24.779c13.685,0,24.777,11.095,24.777,24.779C329.292,214.895,318.199,225.989,304.515,225.989z"
    />
  </svg>
);