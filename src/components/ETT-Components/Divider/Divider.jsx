/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-03 15:50:21
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:27:16
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// CSS Style
import './Divider.css';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Divider Component to create a divider line in between sector or pages
 */
const Divider = ({ style, className }) => <div className={className} style={style} />;

// Exporting Component
export default Divider;

// Default Props value
Divider.defaultProps = {
  style: {},
  className: 'divider-container',
};
// Props Validation Rules
Divider.propTypes = {
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};
