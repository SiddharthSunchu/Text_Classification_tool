/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 15:17:56
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 11:45:55
 */

// Base Component
import React from 'react';

// Community Component
import { Carousel } from 'antd';

// Contants
import { CAROUSAL } from '../../../constants/index';

// Ett Components
import ETTComponents from '../../ETT-Components/index';

// Style Palette
import { SIZE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT) ETT | siddharth.sunchu@un.org
 * @description CarousalInfo Component to display Working information on Home page in
 * Carousal Component
 */
const CarousalInfo = () => (
  <Carousel autoplay>
    {CAROUSAL.map(el1 => (
      <div key={el1.toString()}>
        <ETTComponents.SubHeaderText
          size={SIZE.TEXT_SECONDARY_SIZE}
          style={{ marginTop: SIZE.TEXT_HEADER_SIZE }}
        >
          {el1.TITLE}
        </ETTComponents.SubHeaderText>
        <ETTComponents.Paragraph>{el1.DESCRIPTION}</ETTComponents.Paragraph>
      </div>
    ))}
  </Carousel>
);

export default CarousalInfo;
