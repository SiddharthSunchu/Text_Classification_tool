// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { COLORS, SIZE } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @since 2018-03-14
 * @description Space Span Component to keep free space between two div or components example between buttons
 * @param {Object} style - Style object for the component
 * @param {Color} background - background color of the component
 * @param {Size} margin - margin space between the components
 * @param {className} className - CSS Classname of the component
 */
const SpaceSpan = ({ style, background, margin, className }) => (
  <span className={className} style={{ background, margin, ...style }} />
);

// Exporting Component
export default SpaceSpan;

// Default Props value
SpaceSpan.defaultProps = {
  style: {},
  background: COLORS.SECONDARY_COLOR,
  margin: SIZE.SPAN_MARGIN,
  className: null
};
// Props Validation Rules
SpaceSpan.propTypes = {
  style: PropTypes.instanceOf(Object),
  background: PropTypes.string,
  height: PropTypes.number,
  className: PropTypes.string
};
