/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 17:41:18
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:20:26
 */

import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

import { COLORS, SIZE } from '../theme/ettStylePalette';

import './Paragraph.css';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Paragraph component to display sentences.
 *
 */
const Paragraph = ({
  children, color, size, className, style,
}) => (
  <p className={className} style={{ color, fontSize: size, ...style }}>
    {children}
  </p>
);

// Exporting Component
export default Paragraph;

// Default Props value
Paragraph.defaultProps = {
  children: null,
  color: COLORS.TEXT_GREY_COLOR,
  size: SIZE.TEXT_PRIMARY_SIZE,
  className: 'paragraph-container',
  style: {},
};
// Props Validation Rules
Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};
