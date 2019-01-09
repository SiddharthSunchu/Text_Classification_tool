/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-14 16:39:26
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-09 09:58:00
 */

// Base Components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// ETT Components
import ETTComponents from '../../ETT-Components/constants';

// Style Palette
import { SIZE } from '../../../theme/ettStylePalette';

// Constnats
import { TOOL_PAGE_DETAILS, TITLES } from '../../../constants';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Component to display Form for Request Response Selection with
 * props handleTitleChnage and handleText Change
 */
const RequestResponse = ({
  textData, titleData, onSubmit, onChangeTitle, onChangeTextData,
}) => {
  let disabled = false;
  if (textData === null || titleData === null) {
    disabled = true;
  } else {
    disabled = false;
  }
  return (
    <div>
      <ETTComponents.JustifyCenterWrapper>
        <ETTComponents.SubHeaderText
          size={SIZE.TEXT_SECONDARY_SIZE}
          style={{ marginBottom: SIZE.SECTOR_HEIGHT_SECONDARY_HALF }}
        >
          {TOOL_PAGE_DETAILS.STEP_3_REQ}
        </ETTComponents.SubHeaderText>
      </ETTComponents.JustifyCenterWrapper>
      <ETTComponents.Form>
        <ETTComponents.InputBox data={titleData} handleChange={onChangeTitle} />
        <ETTComponents.InputBox
          title={TITLES.TEXT_DATA_TITLE}
          type={TITLES.TEXT_AREA}
          data={textData}
          handleChange={onChangeTextData}
        />
        <ETTComponents.Button disabled={disabled} onClick={onSubmit} />
      </ETTComponents.Form>
    </div>
  );
};

export default RequestResponse;

RequestResponse.propTypes = {
  textData: PropTypes.string.isRequired,
  titleData: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeTextData: PropTypes.func.isRequired,
};
