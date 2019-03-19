/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-07 15:05:52
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 15:07:45
 */

// Home Component
import Home from './Home/Home';

// Tool Component
import Tool from './Tool/Tool';

import Login from './Login/Login';

import Setting from './Setting/Setting';

import Profile from './Profile/Profile';

export const SCREENS = Object.freeze({
  HOME: Home,
  TOOL: Tool,
  LOGIN: Login,
  SETTING: Setting,
  PROFILE: Profile,
});

export default SCREENS;
