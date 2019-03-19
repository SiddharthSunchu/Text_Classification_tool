// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Import Table Component from Ant design
import { Table as Organizer } from 'antd';

// CSS Style
import './Table.css';

// Import Constants
import { DEFAULT_COLUMNS, DEFAULT_DATA } from '../constants';

// let currentCol = 50;

// const rowSelection = [];

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @since 2019-02-26
 * @description Table Component to display Table in Ett Standard way
 * @param {Array} columns - No of Coloums you want in a table. It should be in a Array format.
 * - ex: const coloumns = [{ title: 'Name', dataIndex: 'name',key: 'name'},]
 * @param {Array} [data = DEFAULT_DATA] - data you want to input in each coloum. It should be in a array format.
 * - It depends upon how many coloumns you have.
 * - key should be uinque value.
 * - ex: const data = [{ key: '1', name: 'Mike',age: 32},].
 * @param {String, Number, Array, Object, Element} children - Children to place between the Table.
 * @param {CSS Style Object} style - Style of the overall table component.
 * @param {CSS Classname} className - CSS Class of the table componnet.
 * @param {String} size - Diffrent size of the table
 * @type Stateless Components
 */
const Table = ({
  columns, data, children, style, className, size,
}) => {
  if (data.length !== 0) {
    return (
      <Organizer
        dataSource={data}
        columns={columns}
        style={style}
        className={className}
        size={size}
      >
        {children}
      </Organizer>
    );
  }
  return null;
};

// exporting the component
export default Table;

// Default props
Table.defaultProps = {
  columns: DEFAULT_COLUMNS,
  data: DEFAULT_DATA,
  children: '',
  style: {},
  className: '',
  size: 'default',
};

// Props Validation Rules
Table.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  size: PropTypes.string,
};
