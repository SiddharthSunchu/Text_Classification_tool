/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-14 16:34:03
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:38:48
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Theme
import { STYLE } from '../theme/ettStylePalette';

/**
 *@description Form Component to wrap InputBox to make it a form with props children
 */
const Form = ({
  children, type, style, action,
}) => {
  const styleSheet = {
    display: STYLE.DISPLAY_FLEX,
    justifyContent: STYLE.JUSTIFY_CONTENT_CENTER,
    flexFlow: type,
    ...style,
  };

  return (
    <form action={action} style={styleSheet}>
      {children}
    </form>
  );
};

// Exporting Component
export default Form;

// Default Props value
Form.defaultProps = {
  children: null,
  style: {},
  action: null,
  type: STYLE.FLEX_FLOW_HORIZONTAL,
};
// Props Validation Rules
Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  style: PropTypes.instanceOf(Object),
  action: PropTypes.string,
  type: PropTypes.string,
};
