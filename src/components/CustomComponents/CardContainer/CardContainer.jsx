/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-27 18:42:10
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-17 15:14:27
 */

// Base Component
import React from 'react';

// Proptype Validation
import PropTypes from 'prop-types';

// Ett Components
import ETTComponents from '../../ETT-Components/index';

// Constants
import {
  API, TOOL_PAGE_DETAILS, TITLES, LABEL_TYPE,
} from '../../../constants/index';

// Style Palette
import { SIZE, COLORS } from '../../../theme/ettStylePalette';

// Icons
import ICONS from '../../../assets/SVGIcons/index';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Component to display Card Component based on output
 */
const CardContainer = ({ output, inputLabelType }) => {
  let impInfo = (
    <div>
      <ETTComponents.Paragraph>
        {TITLES.HAZARD_RESULT_INFO_1}
        <a href={TITLES.MULTILABLE_CLASSIFICATION_LINK} style={{ color: COLORS.PRIMARY_COLOR }}>
          {TITLES.MULTILABEL_CLASSIFICATION}
        </a>
        {TITLES.HAZARD_RESULT_INFO_2}
      </ETTComponents.Paragraph>
    </div>
  );

  if (inputLabelType === LABEL_TYPE.THEME) {
    impInfo = (
      <div>
        <ETTComponents.Paragraph>
          {TITLES.THEME_RESULT_INFO_1}
          <a href={TITLES.MULTILABLE_CLASSIFICATION_LINK} style={{ color: COLORS.PRIMARY_COLOR }}>
            {TITLES.MULTILABEL_CLASSIFICATION}
          </a>
          {TITLES.THEME_RESULT_INFO_2}
        </ETTComponents.Paragraph>
      </div>
    );
  }

  return (
    <div>
      {impInfo}
      <ETTComponents.JustifyCenterWrapper />
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
};

export default CardContainer;

CardContainer.propTypes = {
  output: PropTypes.instanceOf(Array).isRequired,
  inputLabelType: PropTypes.string.isRequired,
};
