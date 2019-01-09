/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 17:48:27
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:59:12
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// CSS Palette
import './SnakeText.css';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Customize Animated Heading text for Machine learning project
 */
const SnakeText = ({
  style, width, className, viewBox, children,
}) => (
  <div>
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="80%">
          {children}
          {' '}
        </text>
      </symbol>

      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
      </g>
    </svg>
  </div>
);

// Exporting Component
export default SnakeText;

// Default Props value
SnakeText.defaultProps = {
  style: {},
  width: '600px',
  className: 'snake-text',
  children: null,
  viewBox: '0 0 960 300',
};
// Props Validation Rules
SnakeText.propTypes = {
  style: PropTypes.instanceOf(Object),
  width: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
  viewBox: PropTypes.string,
};
