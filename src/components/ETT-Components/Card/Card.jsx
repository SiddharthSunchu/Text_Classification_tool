/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-26 11:12:40
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:36:37
 */

// Base Component
import React from 'react';

// Proptype Validation
import PropTypes from 'prop-types';

// CSS Style
import './Card.css';

// Ant design
import { Card as AntCard } from 'antd';

// Custom Components
import CardLabel from './CardLabel';

// Ett Components
import ETTCOMPONENTS from '..';

// Style Palette
import { COLORS } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Card component is used to display card with title and labels
 */
const Card = ({ title, labels, labelValue }) => (
  <div>
    <AntCard
      title={(
        <ETTCOMPONENTS.JustifyStartWrapper>
          <ETTCOMPONENTS.SubHeaderText color={COLORS.TEXT_PRIMARY_COLOR}>
            {title}
          </ETTCOMPONENTS.SubHeaderText>
        </ETTCOMPONENTS.JustifyStartWrapper>
)}
    >
      {labels.map((el4, key4) => (
        <CardLabel key={el4} value={labelValue[key4]}>
          {el4}
        </CardLabel>
      ))}
    </AntCard>
  </div>
);

export default Card;

Card.defaultProps = {
  labelValue: [],
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.instanceOf(Array).isRequired,
  labelValue: PropTypes.instanceOf(Array),
};
