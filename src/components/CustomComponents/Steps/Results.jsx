/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-28 15:26:08
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-02 15:52:16
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Ett Component
import ETTCOMPONENTS from '../../ETT-Components/constants';

// Custom Components
import CustomComponents from '../constants';

// Style Palette
import { SIZE, COLORS } from '../../../theme/ettStylePalette';

// Constants
import { TITLES } from '../../../constants';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Result Component to display Result and card components
 */
const Results = ({ result, output }) => {
  if (result) {
    return (
      <div style={{ backgroundColor: COLORS.SECONDARY_COLOR }}>
        <ETTCOMPONENTS.JustifyStartWrapper>
          <ETTCOMPONENTS.SubHeaderText
            size={SIZE.TEXT_SECONDARY_SIZE}
            style={{ marginBottom: SIZE.SECTOR_HEIGHT_SECONDARY_HALF }}
          >
            {TITLES.RESULTS}
          </ETTCOMPONENTS.SubHeaderText>
        </ETTCOMPONENTS.JustifyStartWrapper>
        <CustomComponents.CardContainer output={output} />
      </div>
    );
  }
  return null;
};

// Exporting Component
export default Results;

// Default props declartion
Results.defaultProps = {
  result: false,
};

// Props Validation Rules
Results.propTypes = {
  result: PropTypes.bool,
  output: PropTypes.instanceOf(Array).isRequired,
};
