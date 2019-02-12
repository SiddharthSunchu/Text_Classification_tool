/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-28 11:51:17
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 14:48:39
 */

// Base components
import React from 'react';

// ANT Design components
import { Col, Row } from 'antd';

// SVG Icons
import ICONS from '../../../assets/SVGIcons';

// Constants
import { TITLES, IMAGES } from '../../../constants/index';

// Style Palette
import { SIZE, STYLE } from '../../../theme/ettStylePalette';

// ETT Components
import ETTComponents from '../../ETT-Components/index';

/**
 * @author Siddharth Sunchu (OICT) ETT | siddharth.sunchu@un.org
 * @description Landing Section of Home page. whenever the user open the UI,
 * this component will be displayed
 */
const LandingSection = () => (
  <section style={{ height: window.innerHeight }}>
    <ETTComponents.Background3d />
    <div
      style={{
        zIndex: 1,
        position: STYLE.DIV_POSITION_SECONDARY,
        top: STYLE.LANDING_TOP,
        left: STYLE.LADING_LEFT,
        width: STYLE.LANDING_WIDTH,
      }}
    >
      <Row>
        <ETTComponents.JustifyCenterWrapper>
          <ICONS.ARTIFICAL_INTELLIGENCE width={SIZE.XXL} />
        </ETTComponents.JustifyCenterWrapper>
      </Row>
      <Row>
        <ETTComponents.JustifyCenterWrapper>
          <Col>
            <img
              src={IMAGES.UNITE_LOGO_BLACK}
              alt={TITLES.IMAGE_ALT}
              style={{
                width: SIZE.UNITE_WIDTH,
                marginRight: SIZE.ICON_MARGIN_MEDIUM,
                position: STYLE.IMAGE_POSITION,
                top: STYLE.TOP_POSITION,
              }}
            />
          </Col>
          <Col>
            <ETTComponents.MainHeaderText
              size={SIZE.MAIN_HEADER}
              style={{ marginBottom: SIZE.SECTOR_HEIGHT_ZER0 }}
            >
              {TITLES.TECHNOLOGY_NAME}
            </ETTComponents.MainHeaderText>
          </Col>
        </ETTComponents.JustifyCenterWrapper>
      </Row>
      <Row>
        <ETTComponents.JustifyCenterWrapper>
          <ETTComponents.HeaderText>
            {TITLES.DEPARTMENT_NAME}
            {TITLES.PROJECT_NAME}
          </ETTComponents.HeaderText>
        </ETTComponents.JustifyCenterWrapper>
      </Row>
    </div>
  </section>
);

export default LandingSection;
