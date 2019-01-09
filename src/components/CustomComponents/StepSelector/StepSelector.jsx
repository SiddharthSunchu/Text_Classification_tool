/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-31 11:32:38
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-08 17:58:06
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Custom Component
import CustomComponents from '../constants';

// ETT Component
import ETTComponents from '../../ETT-Components/constants';

// Style Palette
import { STYLE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Step Selector to select based on the currnt step
 */
const StepSelector = ({
  currentStep,
  onLableType,
  inputLabelType,
  onInputType,
  inputType,
  showStep2,
  handleSubmit,
  showStep3,
  titleData,
  textData,
  result,
  output,
  onChangeTitle,
  onChangeTextData,
}) => {
  if (currentStep === 0) {
    return <CustomComponents.Step1 onLableType={onLableType} inputLabelType={inputLabelType} />;
  }
  if (currentStep === 1) {
    return (
      <CustomComponents.Step2
        inputLabelType={inputLabelType}
        onInputType={onInputType}
        inputType={inputType}
        showStep2={showStep2}
      />
    );
  }
  if (currentStep === 2) {
    return (
      <CustomComponents.Step3
        inputType={inputType}
        inputLabelType={inputLabelType}
        handleSubmit={handleSubmit}
        showStep3={showStep3}
        titleData={titleData}
        textData={textData}
        onChangeTitle={onChangeTitle}
        onChangeTextData={onChangeTextData}
      />
    );
  }
  if (currentStep === 3) {
    return (
      <div style={{ margin: STYLE.ICON_POSITION_MARGIN }}>
        <ETTComponents.LoadingIndicator />
      </div>
    );
  }
  if (currentStep === 4) {
    return <CustomComponents.Results result={result} output={output} />;
  }
  return null;
};

// Exporting Component
export default StepSelector;

// Default Props
StepSelector.defaultProps = {
  currentStep: 0,
  inputType: '',
};

// Props Validation Rules
StepSelector.propTypes = {
  currentStep: PropTypes.number,
  onLableType: PropTypes.func.isRequired,
  inputLabelType: PropTypes.string.isRequired,
  onInputType: PropTypes.func.isRequired,
  inputType: PropTypes.string,
  showStep2: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  showStep3: PropTypes.bool.isRequired,
  titleData: PropTypes.string.isRequired,
  textData: PropTypes.string.isRequired,
  result: PropTypes.bool.isRequired,
  output: PropTypes.instanceOf(Array).isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeTextData: PropTypes.func.isRequired,
};
