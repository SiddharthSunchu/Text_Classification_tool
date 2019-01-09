/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-02 17:24:28
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:36:00
 */

// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// ETT-COMPONENTS
import ETTCOMPONENTS from '../constants';

// CSS Style
import './Button.css';

// Style Palette
import { STYLE, COLORS, CLASSNAME } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Button Component with props disable
 */
const Button = ({
  title, onClick, style, disabled,
}) => {
  let cursorStyle = STYLE.CURSOR_PRIMARY;
  if (disabled) {
    cursorStyle = STYLE.CURSOR_DISABLED;
  }

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={CLASSNAME.BUTTON_CONTAINER}
      style={{ cursor: cursorStyle, ...style }}
    >
      <ETTCOMPONENTS.Paragraph color={COLORS.TEXT_WHITE}>{title}</ETTCOMPONENTS.Paragraph>
    </button>
  );
};

// Exporting Component
export default Button;

// Default Props value
Button.defaultProps = {
  title: 'Submit',
  style: {},
  disabled: false,
};

// Props Validation Rules
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
};
