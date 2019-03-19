// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

//Ant deisgn
import { AutoComplete as InputBox } from 'antd';

// CSS Style
import './AutoComplete.css';

// Constants
import { AUTO_COMPLETE_CONSTANTS } from './AutoCompleteConstants';
import ETTCOMPONENTS from '../index';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @since 2019-03-10
 * @description AutoComplete Input box for UI.
 * @param {InputType} type - different type of input.
 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @param {String} name - Name of the input Box.
 * @param {String} list -name for the data list element.
 * @param {String} placeholder - the placeholder.
 * @param {Function} onChange - onChange functionality.
 * - It is required.
 * @param value - selected value for the input BOX.
 * - It is required.
 * @param style - the style object for the AutoComplete BOX.
 * @param {Array} dataSource - the data you want to show on the input box.
 * @param {ClassName} className - CSS ClassName of the component.
 * @type Stateless Components
 */
const AutoComplete = ({
  type,
  name,
  list,
  placeholder,
  onChange,
  value,
  style,
  data,
  className
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        list={list}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={style}
        className={className}
      />
      <datalist id={list}>
        {data.map((el, key) => {
          return <option value={el} key={key} />;
        })}
      </datalist>
    </div>
  );
};

// exporting the component
export default AutoComplete;

// Default props
AutoComplete.defaultProps = {
  type: AUTO_COMPLETE_CONSTANTS.TYPE,
  name: AUTO_COMPLETE_CONSTANTS.NAME,
  list: AUTO_COMPLETE_CONSTANTS.LIST,
  placeholder: AUTO_COMPLETE_CONSTANTS.PLACEHOLDER,
  style: {},
  className: AUTO_COMPLETE_CONSTANTS.CLASSNAME
};

// Props Validation Rules
AutoComplete.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  list: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string
};
