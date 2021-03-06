/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-21 15:44:21
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-17 14:17:57
 */

// Base components
import React from 'react';

// SVG icons
// import ICONS from '../../../assets/SVGIcons/index';

// Constants
import { TEAM_INFO } from '../../../constants/index';

// ETT Component
import ETTComponents from '../../ETT-Components/index';

// Style Palette
import { SIZE, STYLE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Team description Component to display team description and
 * display about team members
 */
const TeamDescription = () => (
  <section>
    <ETTComponents.JustifyCenterWrapper>
      <ETTComponents.Paragraph>{TEAM_INFO.TITLE}</ETTComponents.Paragraph>
    </ETTComponents.JustifyCenterWrapper>

    <ETTComponents.JustifyCenterWrapper>
      <ETTComponents.HeaderText margin={SIZE.SECTOR_HEIGHT_ZER0}>
        {TEAM_INFO.NAME}
      </ETTComponents.HeaderText>
    </ETTComponents.JustifyCenterWrapper>
    <ETTComponents.Paragraph
      style={{
        textAlign: STYLE.TEXT_ALIGN_CENTER,
        letterSpacing: STYLE.TEXT_SPACING,
        margin: STYLE.TEXT_MARGIN_CONTAINER,
      }}
    >
      {TEAM_INFO.DESCRIPTION}
    </ETTComponents.Paragraph>
    <ETTComponents.SpaceSector height={SIZE.SECTOR_HEIGHT_SECONDARY} />
  </section>
);

export default TeamDescription;
