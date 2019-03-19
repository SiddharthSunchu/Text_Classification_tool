// Import Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Importing the ETT components
import ETTCOMPONENTS from '../index';

// CSS Style
import './SelectInput.css';

/**
 * @author Siddharth Sunchu - OICT-ETT
 * @since 2019-03-14
 * @description Select Input component to display select inout based on standards we have
 * @param {array} data - The data you want to input on select options. Data should have value to send and message you want to display.
 * - VALUE: example Thank you for the gift. ALL CAPS*
 * - MESSAGE: example for the gift. ALL CAPS*
 * @param {Classname} classname - CSS classname of the componenet.
 * @param {Object} style - Style Object of the componenet.
 * @param {Value} value - Current Selected value.
 * @param {Function} onChange - Function to handle onChnage functionality
 */

const SelectInput = ({
  data, className, style, value, onChange,
}) => (
  <select className={className} style={style} value={value} onChange={onChange}>
    {data.map((el, key) => (
      <option value={el.VALUE} key={key}>
        {el.MESSAGE}
      </option>
    ))}
  </select>
);

// exporting component
export default SelectInput;

// Default Props value
SelectInput.defaultProps = {
  data: [],
  className: 'select-input-container',
  style: {},
};

// Props Validation Rules
SelectInput.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  onChange: PropTypes.func.isRequired,
};
