/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 17:37:05
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 17:40:07
 */

// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { COLORS, SIZE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Space Sector Component to keep free space between sectors
 * and props types background and height
 */
const SpaceSector = ({
  style, background, height, className,
}) => (
  <section className={className} style={{ background, height, ...style }} />
);

// Exporting Component
export default SpaceSector;

// Default Props value
SpaceSector.defaultProps = {
  style: {},
  background: COLORS.SECONDARY_COLOR,
  height: SIZE.SECTOR_HEIGHT,
  className: null,
};
// Props Validation Rules
SpaceSector.propTypes = {
  style: PropTypes.instanceOf(Object),
  background: PropTypes.string,
  height: PropTypes.number,
  className: PropTypes.string,
};
