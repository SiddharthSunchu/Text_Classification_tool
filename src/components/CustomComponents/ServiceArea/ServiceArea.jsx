/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-21 15:42:36
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-17 14:15:23
 */

// Base components
import React from 'react';

// Constants
import { SERVICE_AREA_TITLE, SERVICE_AREA, TITLES } from '../../../constants/index';

// ETT Components
import ETTCOMPONENTS from '../../ETT-Components/index';

// Style Palette
import { CLASSNAME, STYLE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT) ETT | siddharth.sunchu@un.org
 * @description Service Area Component displayed on Home page to show different methods
 * and application used in this project
 */

const ServiceArea = () => (
  <section>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.Paragraph>{SERVICE_AREA_TITLE.HEADING}</ETTCOMPONENTS.Paragraph>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.HeaderText style={{ margin: STYLE.TEXT_MARGIN_HEADING }}>
        {SERVICE_AREA_TITLE.DESCRIPTION}
      </ETTCOMPONENTS.HeaderText>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.Paragraph>{TITLES.PROJECT_FUTURE_INFO}</ETTCOMPONENTS.Paragraph>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyEvenlyWrapper>
      {SERVICE_AREA.map(el => (
        <ETTCOMPONENTS.ContainerArea key={el.TITLE}>
          <el.IMAGES className={CLASSNAME.PROFILE_ICON} />
          <ETTCOMPONENTS.SubHeaderText>{el.TITLE}</ETTCOMPONENTS.SubHeaderText>
          <ETTCOMPONENTS.Paragraph>{el.DESCRIPTION}</ETTCOMPONENTS.Paragraph>
        </ETTCOMPONENTS.ContainerArea>
      ))}
    </ETTCOMPONENTS.JustifyEvenlyWrapper>
  </section>
);

export default ServiceArea;
