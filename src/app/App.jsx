/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 15:03:47
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 15:09:26
 */
/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Main Application Component for Routing description and navigation
 */

// Base Components
import React from 'react';

// React Router Component
import { Route, withRouter } from 'react-router-dom';

// Style and Theme
import 'antd/dist/antd.css';
import './App.css';

// External UI library components for style (ANT design)
import { Layout } from 'antd';

// Screen Component
import Screens from '../screens/constants';

// Theme
import CustomComponents from '../components/CustomComponents/constants';

// Constants
import { ROUTES } from '../constants';

// Ant Design
const { Content } = Layout;

/**
 *@description Component to display Whole Application
 */
const App = () => (
  <Layout>
    <CustomComponents.Header />
    <Content>
      <div>
        <Route path={ROUTES.HOME} exact component={Screens.HOME} />
        <Route path={ROUTES.TOOL} component={Screens.TOOL} />
      </div>
    </Content>
  </Layout>
);

export default withRouter(App);
