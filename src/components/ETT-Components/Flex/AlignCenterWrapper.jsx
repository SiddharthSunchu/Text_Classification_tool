/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 15:59:59
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:38:01
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { STYLE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Div Align center wrapper to flex center for align items the component
 */

const AlignCenterWrapper = ({ style, children, className }) => {
  const StyleDiv = {
    display: STYLE.DISPLAY_FLEX,
    alignItems: STYLE.ALIGN_ITEMS,
    ...style,
  };
  return (
    <div className={className} style={StyleDiv}>
      {children}
    </div>
  );
};

// Exporting Component
export default AlignCenterWrapper;

// Default Props value
AlignCenterWrapper.defaultProps = {
  style: {},
  children: null,
  className: null,
};
// Props Validation Rules
AlignCenterWrapper.propTypes = {
  style: PropTypes.instanceOf(Object),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
};
