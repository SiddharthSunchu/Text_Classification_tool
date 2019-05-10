// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// CSS Style
import './ActivityIndicator.css';

// STyle Palette
import { COLORS, SIZE, CLASSNAME } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Activity Indicator Component which uses font awesome library
 * @since 2019-01-02 16:59:29
 * @param {color} color - defines the backgroundcolor of the Spinner
 * @param {string} size - defines the size of the spinner and user has three option
 * - small
 * - medium
 * - large
 * @type StateLess Component
 */
const ActivityIndicator = ({ color, size, style }) => {
  // By Default it takes size equals to medium
  let currentID = CLASSNAME.MEDIUM_ICON;
  // Putting the size condition to change the default size.
  if (size === SIZE.LARGE_ICON) {
    currentID = CLASSNAME.LARGE_ICON;
  } else if (size === SIZE.MEDIUM_ICON) {
    currentID = CLASSNAME.MEDIUM_ICON;
  } else if (size === SIZE.SMALL_ICON) {
    currentID = CLASSNAME.SMALL_ICON;
  } else {
    currentID = CLASSNAME.MEDIUM_ICON;
  }
  // JSX implementation of Activity Indicator
  return <i className={CLASSNAME.SPINNER_ICON} id={currentID} style={{ color, ...style }} />;
};

// Exporting Component
export default ActivityIndicator;

// Default Props
ActivityIndicator.defaultProps = {
  size: SIZE.MEDIUM_ICON,
  color: COLORS.ICON_PROCESS,
  style: {},
};

// Props Validation Rules
ActivityIndicator.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};
