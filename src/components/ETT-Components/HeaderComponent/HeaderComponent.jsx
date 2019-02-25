/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:53:36
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 11:35:11
 */
// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Ant Design
import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom';

// Contants
import { CONTACT_INFO, IMAGES } from '../constants';

// CSS Style
import './HeaderComponent.css';

const Heading = Layout.Header;

/**
 *@description Header Component to display Header in UI with props
 */
const Header = ({
  menuItems, children, mode, selectedKey,
}) => (
  <Heading className="ett-header">
    <div className="un-logo">
      <a href={CONTACT_INFO.UNISDR_HOME_LINK}>
        <img src={IMAGES.UNSYMBOL_UN_COLOR} alt="" id="un-logo-header" />
        <img src={IMAGES.UNITE_LOGO_BLACK} id="unite-logo-header" alt="Unite" />
      </a>
    </div>
    <div className="app-menu">
      <Menu mode={mode} defaultSelectedKeys={[selectedKey]}>
        {menuItems.map(el => (
          <Menu.Item key={el.key}>
            <Link to={el.route}>{el.title}</Link>
          </Menu.Item>
        ))}
        {children}
      </Menu>
    </div>
  </Heading>
);

// Exporting Component
export default Header;

// Default Props value
Header.defaultProps = {
  menuItems: [],
  children: null,
  mode: 'horizontal',
  selectedKey: '/',
};

// Props Validation Rules
Header.propTypes = {
  menuItems: PropTypes.instanceOf(Array),
  children: PropTypes.element,
  mode: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  selectedKey: PropTypes.string,
};
