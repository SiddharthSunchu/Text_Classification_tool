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

// Ant Design
import { Button as Push } from 'antd';

// ETT-COMPONENTS
import ETTCOMPONENTS from '..';

// CSS Style
import './Button.css';

import {
  BUTTON_STYLE,
  BUTTON_CONSTANTS,
  DEFAULT_BUTTON_STYLE
} from './ButtonPalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Button Component with default style, primary and secondary style
 * @param {string} type - type of the button you need.
 * - Default type with default Standard colors and style
 * - Primary type with primary UN color and smaller size compare to default size
 * - Secondary type with secondary color and style with smaller size
 * @param {boolean} disabled - will be disabled and cannot be clicked.
 * @param {element or icon} icon - Icon you want to display in the button.
 * @param {boolean} loading - this indicates you want to display a spinner in button.
 * @param {string} title - the title of the button component
 * @param {function} onClick - onClick handler to handle the event.
 *
 */
const Button = ({ type, disabled, icon, loading, title, onClick }) => {
  if (type === BUTTON_CONSTANTS.SECONDARY_TYPE) {
    return (
      <Push
        disabled={disabled}
        icon={icon}
        loading={loading}
        onClick={onClick}
        className={BUTTON_CONSTANTS.SECONDARY_CLASSNAME}
      >
        <ETTCOMPONENTS.Paragraph
          color={BUTTON_STYLE.SECONDARY_TEXT_COLOR}
          style={{
            letterSpacing: BUTTON_STYLE.SECONDARY_LETTER_SPACING,
            textTransform: BUTTON_STYLE.TEXT_TRANSFORM,
            marginBottom: BUTTON_STYLE.TEXT_MARGIN_BOTTOM
          }}
        >
          {title}
        </ETTCOMPONENTS.Paragraph>
      </Push>
    );
  } else if (type === BUTTON_CONSTANTS.PRIMARY_TYPE) {
    return (
      <Push
        disabled={disabled}
        onClick={onClick}
        className={BUTTON_CONSTANTS.PRIMARY_CLASSNAME}
      >
        <ETTCOMPONENTS.Paragraph
          color={BUTTON_STYLE.PRIMARY_TEXT_COLOR}
          style={{
            letterSpacing: BUTTON_STYLE.PRIMARY_LETTER_SPACING,
            textTransform: BUTTON_STYLE.TEXT_TRANSFORM,
            marginBottom: BUTTON_STYLE.TEXT_MARGIN_BOTTOM
          }}
        >
          {title}
        </ETTCOMPONENTS.Paragraph>
      </Push>
    );
  } else {
    return (
      <Push
        disabled={disabled}
        onClick={onClick}
        className={BUTTON_CONSTANTS.DEFAULT_CLASSNAME}
      >
        <ETTCOMPONENTS.Paragraph
          color={BUTTON_STYLE.DEFAULT_TEXT_COLOR}
          style={{
            letterSpacing: BUTTON_STYLE.LETTER_SPACING,
            textTransform: BUTTON_STYLE.TEXT_TRANSFORM,
            marginBottom: BUTTON_STYLE.TEXT_MARGIN_BOTTOM
          }}
        >
          {title}
        </ETTCOMPONENTS.Paragraph>
      </Push>
    );
  }
};

// Exporting Component
export default Button;

// Default Props value
Button.defaultProps = {
  type: '',
  disabled: BUTTON_CONSTANTS.DEFAULT_DISABLED,
  icon: '',
  loading: BUTTON_CONSTANTS.DEFAULT_LOADING,
  title: BUTTON_CONSTANTS.DEFAULT_TITLE
};

// Props Validation Rules
Button.propTypes = {
  type: PropTypes.oneOf([
    BUTTON_CONSTANTS.PRIMARY_TYPE,
    BUTTON_CONSTANTS.SECONDARY_TYPE
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  loading: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
