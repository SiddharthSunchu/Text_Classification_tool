/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-21 14:46:22
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:37:48
 */
// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { STYLE, SIZE } from '../theme/ettStylePalette';

// CSS Style
import './ContainerArea.css';

/**
 *@description  Component to display box shadow around container with props
 */
const ContainerArea = ({
  children, height, style, className,
}) => (
  <div className={className} style={{ height, ...style }}>
    {children}
  </div>
);
// Exporting Component
export default ContainerArea;

// Default Props value
ContainerArea.defaultProps = {
  children: null,
  height: SIZE.SECTOR_HEIGHT,
  style: {},
  className: 'container-area',
};
// Props Validation Rules
ContainerArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  height: PropTypes.number,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};
