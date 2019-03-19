/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @since 2019-02-26
 * @description The Modal Component to display any message in the UI like a alert or confirm component
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Ant Design
import { Modal as Popup, Button } from 'antd';

// CSS Style
import './Modal.css';

import ETTCOMPONENTS from '../index';
// import MODAL_STYLE from './constants';

const MODAL_FOOTER = [];

/**
 * @param {boolean} open - To open the Modal component
 * @param {function} onClose - function determining on close
 * @param {element} children - to customize the modal component according to user's needs.
 * @type Stateless Components
 */
const Modal = ({
  title, open, onCancel, onOk, center, footer, children, style,
}) => (
  <Popup
    visible={open}
    onCancel={onCancel}
    onOk={onOk}
    centered={center}
    footer={footer}
    style={style}
  >
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.HeaderText
        margin={40}
        style={{ letterSpacing: '10px', textTransform: 'uppercase' }}
      >
        {title}
      </ETTCOMPONENTS.HeaderText>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    {children}
  </Popup>
)
;
// exporting the component
export default Modal;

// Default props
Modal.defaultProps = {
  open: false,
  title: 'Test',
  children: '',
  center: true,
  footer: MODAL_FOOTER,
  style: {},
};

// Props Validation Rules
Modal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  title: PropTypes.string,
  center: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  style: PropTypes.instanceOf(Object),
};
