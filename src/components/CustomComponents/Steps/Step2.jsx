/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 13:59:15
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:35:00
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Constnats
import { INPUT_TYPE, TOOL_PAGE_DETAILS } from '../../../constants/index';

// ETT Component
import ETTCOMPONENTS from '../../ETT-Components/index';

// STyle Palette
import { SIZE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Step two to select Input type based on Lable type to give better classification
 */
const Step2 = ({ showStep2, onInputType, inputType }) => {
  if (showStep2) {
    return (
      <div>
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.SubHeaderText
            size={SIZE.TEXT_SECONDARY_SIZE}
            style={{ marginBottom: SIZE.SECTOR_HEIGHT_SECONDARY_HALF }}
          >
            {TOOL_PAGE_DETAILS.STEP_2}
          </ETTCOMPONENTS.SubHeaderText>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.RadioButton
          onChange={onInputType}
          value={inputType}
          radioValue={[INPUT_TYPE.TYPE1, INPUT_TYPE.TYPE2]}
        />
      </div>
    );
  }
  return null;
};

// Exporting Component
export default Step2;

// Default Props
Step2.defaultProps = {
  showStep2: false,
  inputType: '',
};

// Props Validation Rules
Step2.propTypes = {
  showStep2: PropTypes.bool,
  onInputType: PropTypes.func.isRequired,
  inputType: PropTypes.string,
};
