/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 16:24:16
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:39:35
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { COLORS, SIZE, FONT_FAMILY } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Header Text component to display heading for Different Sections and Sectors.
 *
 */
export const SectionHeader = ({
  children, color, size, margin, style, className, fontFamily,
}) => (
  <h4
    className={className}
    style={{
      color,
      fontSize: size,
      marginBottom: margin,
      fontFamily,
      letterSpacing: '10px',
      textTransform: 'uppercase',
      ...style,
    }}
  >
    {children}
  </h4>
);

// Exporting Component
export default SectionHeader;

// Default Props value
SectionHeader.defaultProps = {
  children: null,
  color: COLORS.TEXT_SECONDARY_COLOR,
  size: SIZE.TEXT_PRIMARY_SIZE,
  margin: '0px',
  style: {},
  className: null,
  fontFamily: FONT_FAMILY.PRIMARY_FONT_FAMILY,
};
// Props Validation Rules
SectionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  color: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.number,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  fontFamily: PropTypes.string,
};
