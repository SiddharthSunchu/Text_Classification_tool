/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:12:01
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-04 09:21:06
 */

// Base components
import React from 'react';

// Community components
import { withRouter } from 'react-router-dom';

// Custom Components
import CustomComponents from '../../components/CustomComponents/constants';

// ETT Components
import EttComponents from '../../components/ETT-Components/constants';

// Themes
import { COLORS, STYLE } from '../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Landing page or Home page component displays whenever the application is started
 */
const Home = () => (
  <div
    style={{
      height: window.innerHeight,
      width: window.innerWidth,
      backgroundColor: COLORS.SECONDARY_COLOR,
      margin: STYLE.MARGIN_SMALL,
    }}
  >
    <CustomComponents.LandingSection />
    <EttComponents.Divider />
    <EttComponents.SpaceSector />
    <CustomComponents.ServiceArea />
    <EttComponents.Divider />
    <EttComponents.SpaceSector />
    <CustomComponents.WorkingInfo />
    <EttComponents.SpaceSector />
    <CustomComponents.TeamDescription />
    <EttComponents.Divider />
    <CustomComponents.Footer />
  </div>
);

export default withRouter(Home);
