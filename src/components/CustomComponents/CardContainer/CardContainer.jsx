/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-27 18:42:10
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-08 17:39:41
 */

// Base Component
import React from 'react';

// Proptype Validation
import PropTypes from 'prop-types';

// Ett Components
import ETTComponents from '../../ETT-Components/constants';

// Constants
import { API, TOOL_PAGE_DETAILS } from '../../../constants/index';

// Style Palette
import { SIZE } from '../../../theme/ettStylePalette';

// Icons
import ICONS from '../../../assets/SVGIcons/index';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Component to display Card Component based on output
 */
const CardContainer = ({ output }) => (
  <div>
    <ETTComponents.JustifyStartWrapper>
      <ETTComponents.SubHeaderText>{TOOL_PAGE_DETAILS.DOWNLOAD}</ETTComponents.SubHeaderText>
      <a href={API.DOWNLOAD_FILE}>
        <ICONS.DOWN_ARROW
          style={{
            bottom: SIZE.ICON_MARGIN_SIZE,
            left: SIZE.ICON_MARGIN_SIZE,
          }}
        />
      </a>
    </ETTComponents.JustifyStartWrapper>
    {output.map((el1) => {
      const string = el1.labels;
      const arrayLabels = string.split(', ');
      const prob = el1.probability;
      const probLabels = prob.split(', ');
      const newLabel = [];
      for (let i = 0; i < probLabels.length; i += 1) {
        newLabel[i] = `${arrayLabels[i]}(${probLabels[i]})`;
        probLabels[i] = parseFloat(probLabels[i]);
      }

      return (
        <ETTComponents.Card
          title={el1.title}
          key={el1.title.toString()}
          labels={newLabel}
          labelValue={probLabels}
        />
      );
    })}
  </div>
);

export default CardContainer;

CardContainer.propTypes = {
  output: PropTypes.instanceOf(Array).isRequired,
};
