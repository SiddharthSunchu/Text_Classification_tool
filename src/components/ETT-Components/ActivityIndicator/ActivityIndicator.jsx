/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-02 16:59:29
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-02 17:00:50
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// CSS Style
import './ActivityIndicator.css';

// STyle Palette
import { COLORS, SIZE, CLASSNAME } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Spinner Component with props value of size and color
 */
const ActivityIndicator = ({ color, size }) => {
  let currentID = CLASSNAME.MEDIUM_ICON;
  if (size === SIZE.LARGE_ICON) {
    currentID = CLASSNAME.LARGE_ICON;
  } else if (size === SIZE.MEDIUM_ICON) {
    currentID = CLASSNAME.MEDIUM_ICON;
  } else if (size === SIZE.SMALL_ICON) {
    currentID = CLASSNAME.SMALL_ICON;
  } else {
    return null;
  }

  return <i className={CLASSNAME.SPINNER_ICON} id={currentID} style={{ color }} />;
};

// Exporting Component
export default ActivityIndicator;

// Default Props
ActivityIndicator.defaultProps = {
  size: SIZE.MEDIUM_ICON,
  color: COLORS.ICON_PROCESS,
};

// Props Validation Rules
ActivityIndicator.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
