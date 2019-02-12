/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-20 12:01:02
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:56:25
 */

// Base Component
import React from 'react';

// Ett Components
import ETTComponents from '../../ETT-Components/index';

// Constants
import { HEADER_MENU, API_UI, ROUTES } from '../../../constants/index';

// Default Selector Nav Bar in Header
let currentPage = ROUTES.HOME;
if (window.location.href === API_UI) {
  currentPage = ROUTES.TOOL;
}

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description HeaderComponent Component to display Header
 */
const Header = () => <ETTComponents.Header menuItems={HEADER_MENU} selectedKey={currentPage} />;

export default Header;
