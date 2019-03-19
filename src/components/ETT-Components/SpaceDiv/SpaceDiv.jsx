// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { COLORS, STYLE } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @since 2018-03-14
 * @description Space Div Component to keep free space between Div or Span Component
 * @param {Object} style - Style object for the component
 * @param {Color} background - background color of the component
 * @param {Size} top - margin top space between the components * dont need to write px
 * @param {className} bottom - margin top space between the components * dont need to write px
 * @param {className} left - margin left space between the components * dont need to write px
 * @param {className} right - margin top space between the components * dont need to write px
 * @param {Children} children - Child elements inside the componenets
 */
const SpaceDiv = ({
  style,
  background,
  top,
  bottom,
  left,
  right,
  className,
  children
}) => (
  <div
    className={className}
    style={{
      background,
      marginTop: top + STYLE.PIXEL,
      marginBottom: bottom + STYLE.PIXEL,
      marginLeft: left + STYLE.PIXEL,
      marginRight: right + STYLE.PIXEL,
      ...style
    }}
  >
    {children}
  </div>
);

// Exporting Component
export default SpaceDiv;

// Default Props value
SpaceDiv.defaultProps = {
  style: {},
  background: COLORS.SECONDARY_COLOR,
  top: 0,
  bottom: 25,
  left: 0,
  right: 0,
  className: '',
  children: null
};
// Props Validation Rules
SpaceDiv.propTypes = {
  style: PropTypes.instanceOf(Object),
  background: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ])
};
