/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 14:03:49
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-08 17:59:13
 */

// Base Commoponent
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Custom Component
import CustomComponent from '../constants';

// Constants
import { INPUT_TYPE } from '../../../constants';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Step Three to select Input type based on label type to give better classification
 */
const Step3 = ({
  showStep3,
  inputType,
  handleSubmit,
  titleData,
  textData,
  onChangeTitle,
  onChangeTextData,
}) => {
  if (showStep3) {
    if (inputType === INPUT_TYPE.TYPE2) {
      return <CustomComponent.Batch handleSubmit={handleSubmit} />;
    }
    if (inputType === INPUT_TYPE.TYPE1) {
      return (
        <CustomComponent.RequestResponse
          onSubmit={handleSubmit}
          titleData={titleData}
          textData={textData}
          onChangeTitle={onChangeTitle}
          onChangeTextData={onChangeTextData}
        />
      );
    }
    return null;
  }
  return null;
};

// Exporting Component
export default Step3;

// Default Props
Step3.defaultProps = {
  showStep3: false,
};

// Props Validation Rules
Step3.propTypes = {
  showStep3: PropTypes.bool,
  inputType: PropTypes.oneOf([INPUT_TYPE.TYPE2, INPUT_TYPE.TYPE1]).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  titleData: PropTypes.string.isRequired,
  textData: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeTextData: PropTypes.func.isRequired,
};
