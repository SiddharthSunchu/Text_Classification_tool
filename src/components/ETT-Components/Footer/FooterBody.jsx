// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

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

//CSS Style
import './Footer.css';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @since 2018-12-28 11:13:17
 * @description Home Footer Body Component to display Contact Info
 * @type StateLess Component
 */
const FooterContainer = ({ secondEmail }) => {
  let emailSection;
  if (secondEmail) {
    emailSection = (
      <div>
        <a href={secondEmail}>
          <ICONS.EMAIL width={30} style={{ marginRight: SIZE.MARGIN_SMALL }} />
        </a>
        <ETTComponents.Paragraph>
          {`${CONTACT_INFO.ETT_EMAIL} | ${secondEmail}`}
        </ETTComponents.Paragraph>
      </div>
    );
  } else {
    emailSection = (
      <div>
        <a href={CONTACT_INFO.ETT_EMAIL}>
          <ICONS.EMAIL width={30} style={{ marginRight: SIZE.MARGIN_SMALL }} />
        </a>
        <ETTComponents.Paragraph>
          {`${CONTACT_INFO.ETT_EMAIL}`}
        </ETTComponents.Paragraph>
      </div>
    );
  }
  return (
    <div style={{ height: SIZE.SECTOR_HEIGHT, margin: STYLE.FOOTER_CONTAINER }}>
      <Col span={10}>
        <Row>
          <Col span={10}>
            <a href={CONTACT_INFO.UN_WEBSITE}>
              <img
                src={IMAGES.UNITE_NEW_LOGO_PRIMARY_COLOR}
                alt={TITLES.IMAGE_ALT}
                className={CLASSNAME.UNITE_ICON}
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ETTComponents.Paragraph style={{marginBottom:STYLE.TEXT_PARAGRAPH_MARGIN_BOTTOM_SECONDARY}}>
              {CONTACT_INFO.TEAM_NAME}
            </ETTComponents.Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ETTComponents.Paragraph style={{marginBottom:STYLE.TEXT_PARAGRAPH_MARGIN_BOTTOM_SECONDARY}}>
              {CONTACT_INFO.DIVISION_NAME}
            </ETTComponents.Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ETTComponents.Paragraph style={{marginBottom:STYLE.TEXT_PARAGRAPH_MARGIN_BOTTOM_SECONDARY}}>
              {CONTACT_INFO.DEPARTMENT_NAME}
            </ETTComponents.Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ETTComponents.Paragraph style={{marginBottom:STYLE.TEXT_PARAGRAPH_MARGIN_BOTTOM_SECONDARY}}>
              {CONTACT_INFO.COMPANY_NAME}
            </ETTComponents.Paragraph>
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
              <ICONS.LOCATION
                width={30}
                style={{ marginRight: SIZE.MARGIN_SMALL }}
              />
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
            <ICONS.PHONE
              width={30}
              style={{ marginRight: SIZE.MARGIN_SMALL }}
            />
            <ETTComponents.Paragraph>
              {CONTACT_INFO.UN_PHONE_MAIN}
              <br />
              {CONTACT_INFO.UN_PHONE_OFFICE}
            </ETTComponents.Paragraph>
          </Col>
          <Col span={8}>{emailSection}</Col>
        </Row>
      </Col>
    </div>
  );
};

// Exporting the Footer Container to global
export default FooterContainer;

FooterContainer.defaultProps = {
  secondEmail: ''
};

// Props Validation Rules
FooterContainer.propTypes = {
  secondEmail: PropTypes.string
};
