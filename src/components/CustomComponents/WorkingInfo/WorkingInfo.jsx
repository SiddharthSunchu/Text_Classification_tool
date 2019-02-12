/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-31 11:51:39
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-02 16:07:02
 */

// Base components
import React from 'react';

// Custom Components
import CustomComponents from '../constants';

// ETT Components
import ETTCOMPONENTS from '../../ETT-Components/index';

// Constants
import { CAROUSAL_TITLE } from '../../../constants/index';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Working info Component to display Working info of the project in detail
 */
const WorkingInfo = () => (
  <section>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.Paragraph>{CAROUSAL_TITLE.HEADING}</ETTCOMPONENTS.Paragraph>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.HeaderText>{CAROUSAL_TITLE.DESCRIPTION}</ETTCOMPONENTS.HeaderText>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <CustomComponents.CarousalInfo />
  </section>
);

export default WorkingInfo;
