/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-27 18:41:04
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-02 15:57:23
 */

// Base Components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Constants
import { LABEL_TYPE, TOOL_PAGE_DETAILS } from '../../../constants/index';

// Ett Components
import ETTComponents from '../../ETT-Components/index';

// Style Palette
import { SIZE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org (OICT)
 * @description Based on labels selected it will ask fro input types
 */
const Step1 = ({ onLableType, inputLabelType }) => (
  <div>
    <ETTComponents.JustifyCenterWrapper>
      <ETTComponents.SubHeaderText
        size={SIZE.TEXT_SECONDARY_SIZE}
        style={{ marginBottom: SIZE.SECTOR_HEIGHT_SECONDARY_HALF }}
      >
        {TOOL_PAGE_DETAILS.STEP_1}
      </ETTComponents.SubHeaderText>
    </ETTComponents.JustifyCenterWrapper>
    <ETTComponents.RadioButton
      onChange={onLableType}
      value={inputLabelType}
      radioValue={[LABEL_TYPE.HAZARD, LABEL_TYPE.THEME]}
    />
  </div>
);

// Export Component
export default Step1;

// Props Validation Rules
Step1.propTypes = {
  onLableType: PropTypes.func.isRequired,
  inputLabelType: PropTypes.string.isRequired,
};
