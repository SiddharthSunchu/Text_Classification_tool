/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-20 12:01:02
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:56:25
 */

// Base Component
import React from 'react';

// React Router
import { Link, withRouter } from 'react-router-dom';

// ant design
import { Menu } from 'antd';

// Import Prop Types Validation
import { PropTypes } from 'prop-types';

// Ett Components
import ETTComponents from '../../ETT-Components/index';

// Constants
import { HEADER_ROUTE_NAMES } from '../../../constants/index';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description HeaderComponent Component to display Header
 */
const Header = ({ location, currentUser }) => {
  let menuItem = [];

  if (currentUser === '') {
    menuItem = [
      <Menu.Item key="/">
        <Link to="/">{HEADER_ROUTE_NAMES.HOME}</Link>
      </Menu.Item>,
      <Menu.Item key="/login">
        <Link to="/login">{HEADER_ROUTE_NAMES.LOGIN}</Link>
      </Menu.Item>,
    ];
  } else if (currentUser === 'admin') {
    menuItem = [
      <Menu.Item key="/">
        <Link to="/">{HEADER_ROUTE_NAMES.HOME}</Link>
      </Menu.Item>,
      <Menu.Item key="/tool">
        <Link to="/tool">{HEADER_ROUTE_NAMES.ADMIN_TOOL}</Link>
      </Menu.Item>,
      <Menu.Item key="/setting">
        <Link to="/setting">{HEADER_ROUTE_NAMES.SETTING}</Link>
      </Menu.Item>,
      <Menu.Item key="/profile">
        <Link to="/profile">{HEADER_ROUTE_NAMES.PROFILE}</Link>
      </Menu.Item>,
    ];
  } else if (currentUser === 'user') {
    menuItem = [
      <Menu.Item key="/">
        <Link to="/">{HEADER_ROUTE_NAMES.HOME}</Link>
      </Menu.Item>,
      <Menu.Item key="/tool">
        <Link to="/tool">{HEADER_ROUTE_NAMES.TOOL}</Link>
      </Menu.Item>,
      // <Menu.Item key="/profile">
      //   <Link to="/profile">{HEADER_ROUTE_NAMES.PROFILE}</Link>
      // </Menu.Item>,
    ];
  } else {
    menuItem = [
      <Menu.Item key="/">
        <Link to="/">{HEADER_ROUTE_NAMES.HOME}</Link>
      </Menu.Item>,
      <Menu.Item key="/login">
        <Link to="/login">{HEADER_ROUTE_NAMES.LOGIN}</Link>
      </Menu.Item>,
    ];
  }
  return <ETTComponents.Header selectedKey={location.pathname}>{menuItem}</ETTComponents.Header>;
};

export default withRouter(Header);

// // Default Props value
// Header.defaultProps = {
//   location: null,
//   history: SIZE.SECTOR_HEIGHT,
// };
// Props Validation Rules
Header.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  currentUser: PropTypes.string.isRequired,
};
