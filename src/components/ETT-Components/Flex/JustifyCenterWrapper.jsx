/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 16:08:45
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:38:11
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { STYLE } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Div Flex justify Center wrapper to flex center the component
 */
const JustifyCenterWrapper = ({ style, children, className }) => {
  const StyleDiv = {
    display: STYLE.DISPLAY_FLEX,
    justifyContent: STYLE.JUSTIFY_CONTENT_CENTER,
    ...style,
  };
  return (
    <div className={className} style={StyleDiv}>
      {children}
    </div>
  );
};

// Exporting Component
export default JustifyCenterWrapper;

// Default Props value
JustifyCenterWrapper.defaultProps = {
  style: {},
  className: null,
  children: null,
};
// Props Validation Rules
JustifyCenterWrapper.propTypes = {
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
};
