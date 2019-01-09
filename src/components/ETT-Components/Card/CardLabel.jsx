/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-26 11:52:01
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-08 16:36:23
 */

// Base Componnet
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Ett Component
import ETTCOMPONENTS from '../constants';

// Style Palette
import { COLORS, SIZE } from '../../../theme/ettStylePalette';

/**
 * @description CardLabel Component to display Card labels with props value to
 * define ethe color of label
 */
const CardLabel = ({ value, children, range }) => {
  if (value < range || value === 'No Probability') {
    return (
      <ETTCOMPONENTS.Paragraph
        style={{
          padding: SIZE.MARGIN_SMALL,
          background: COLORS.ERROR_COLOR,
          color: COLORS.TEXT_WHITE,
          margin: SIZE.MARGIN_SMALL,
        }}
      >
        {children}
      </ETTCOMPONENTS.Paragraph>
    );
  }
  return (
    <ETTCOMPONENTS.Paragraph
      style={{
        padding: SIZE.MARGIN_SMALL,
        background: COLORS.PRIMARY_COLOR,
        color: COLORS.TEXT_WHITE,
        margin: SIZE.MARGIN_SMALL,
      }}
    >
      {children}
    </ETTCOMPONENTS.Paragraph>
  );
};

// Exporting Component
export default CardLabel;

// Default Props value
CardLabel.defaultProps = {
  value: null,
  children: null,
  range: 70,
};
// Props Validation Rules
CardLabel.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  range: PropTypes.number,
};
