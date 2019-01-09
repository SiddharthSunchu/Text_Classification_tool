/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 11:45:01
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 17:32:28
 */

// Base Components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Ant design
import { Radio } from 'antd';

// CSS Style
import './RadioButton.css';

/**
 * @description RadioButton Component to display radio button with toggle selection
 * with props onClick, title, style,
 */
const RadioButton = ({
  style, value, onChange, radioValue,
}) => (
  <Radio.Group onChange={onChange} value={value} style={style}>
    {radioValue.map(el => (
      <Radio.Button value={el} key={el}>
        {el}
      </Radio.Button>
    ))}
  </Radio.Group>
);

// Exporting Component
export default RadioButton;

// Default Props value
RadioButton.defaultProps = {
  value: null,
  onChange: null,
  radioValue: [],
  style: {},
};
// Props Validation Rules
RadioButton.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  radioValue: PropTypes.instanceOf(Array),
  style: PropTypes.instanceOf(Object),
};
