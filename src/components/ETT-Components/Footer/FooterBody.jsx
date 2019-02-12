
// Base components
import React from 'react';

// ANT Design
import { Row, Col } from 'antd';

// Constants
import { CONTACT_INFO, IMAGES, TITLES } from '../constants';

// ETT Components
import ETTComponents from '..';

// Icons
import ICONS from '../../../assets/SVGIcons';

// Style Palette
import { SIZE, CLASSNAME, STYLE } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @since 2018-12-28 11:13:17
 * @description Home Footer Body Component to display Contact Info
 * @type StateLess Component
 */
const FooterContainer = () => (
  <div style={{ height: SIZE.SECTOR_HEIGHT, margin: STYLE.FOOTER_CONTAINER }}>
    <Col span={10}>
      <Row>
        <Col span={10}>
          <a href={CONTACT_INFO.UN_WEBSITE}>
            <img
              src={IMAGES.UNITE_LOGO_MAIN_COLOR}
              alt={TITLES.IMAGE_ALT}
              className={CLASSNAME.UNITE_ICON}
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ETTComponents.Paragraph>{CONTACT_INFO.DEPARTMENT_NAME}</ETTComponents.Paragraph>
        </Col>
      </Row>
    </Col>

    <Col span={14}>
      <Row>
        <ETTComponents.JustifyStartWrapper>
          <ETTComponents.HeaderText margin={SIZE.SECTOR_HEIGHT_ZER0}>
            {CONTACT_INFO.NAME}
          </ETTComponents.HeaderText>
        </ETTComponents.JustifyStartWrapper>
      </Row>
      <Row>
        <Col span={8}>
          <a href={CONTACT_INFO.GOOGLE_MAPS}>
            <ICONS.LOCATION width={30} style={{ marginRight: SIZE.MARGIN_SMALL }} />
          </a>
          <ETTComponents.Paragraph>
            {CONTACT_INFO.ADDRESS_STREET}
            <br />
            {CONTACT_INFO.ADDRESS_NAME_FLOOR}
            <br />
            {CONTACT_INFO.ADDRESS_ZIPCODE_STATE}
          </ETTComponents.Paragraph>
        </Col>
        <Col span={8}>
          <ICONS.PHONE width={30} style={{ marginRight: SIZE.MARGIN_SMALL }} />
          <ETTComponents.Paragraph>
            {CONTACT_INFO.UN_PHONE_MAIN}
            <br />
            {CONTACT_INFO.UN_PHONE_OFFICE}
          </ETTComponents.Paragraph>
        </Col>
        <Col span={8}>
          <a href={CONTACT_INFO.ETT_EMAIL}>
            <ICONS.EMAIL width={30} style={{ marginRight: SIZE.MARGIN_SMALL }} />
          </a>
          <ETTComponents.Paragraph>
            {`${CONTACT_INFO.ETT_EMAIL} | ${CONTACT_INFO.AI_EMAIL}`}
          </ETTComponents.Paragraph>
        </Col>
      </Row>
    </Col>
  </div>
);


// Exporting the Footer Container to global
export default FooterContainer;
