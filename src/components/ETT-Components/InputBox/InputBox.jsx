/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-14 15:55:09
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-09 10:08:51
 */

// Base Component
import React from 'react';

// Props Validation
import PropsTypes from 'prop-types';

// CSS Style
import './InputBox.css';

/**
 *@description Component to display Input and Text Area with props title, value,
 * onChange,type indicates which select
 */

export const InputBox = ({
  type, title, handleChange, data, placeholder = {title}
}) => {
  if (type === 'textarea') {
    return (
      <label htmlFor={1}>
        {title}
        <textarea type="text" value={data} onChange={handleChange} placeholder={placeholder}/>
      </label>
    );
  }
  return (
    <label htmlFor={1}>
      {title}
      <input type="text" value={data} onChange={handleChange} placeholder={placeholder}/>
    </label>
  );
};

export default InputBox;

InputBox.defaultProps = {
  title: 'Title',
  type: 'text',
  data: '',

};

InputBox.propTypes = {
  title: PropsTypes.string,
  type: PropsTypes.string,
  handleChange: PropsTypes.func.isRequired,
  data: PropsTypes.string,
  placeholder: PropsTypes.string,
};
