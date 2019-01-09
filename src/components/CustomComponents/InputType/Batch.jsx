/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 14:31:30
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 14:57:44
 */

// Base Components
import React from 'react';

// Prop Validation
import PropsTypes from 'prop-types';

// ANT design
import { Upload } from 'antd';

// ETT Components
import ETTComponents from '../../ETT-Components/constants';

// Constants
import {
  API,
  TOOL_PAGE_DETAILS,
  ERROR_MESSAGE,
  FILE_TYPE,
  TITLES,
  SUCCESS_MESSAGE,
} from '../../../constants/index';

// API
import SERVICE from '../../../service/Service';

// STyle Palette
import { SIZE, COLORS } from '../../../theme/ettStylePalette';

// SVG Icons
import ICONS from '../../../assets/SVGIcons';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description Batch Component to upload and drag file for classification
 */
const Batch = ({ handleSubmit }) => {
  let apiSelector = true;
  let disabled = false;

  const extras = {
    name: FILE_TYPE.FILE,
    action: API.UPLOAD_FILE,
    multiple: false,
    accept: TITLES.FILE_TYPE,
    onChange(info) {
      if (info.fileList.length > 1) {
        info.fileList.splice(1, info.fileList.length - 1);
      }
      if (info.file.status === TITLES.DONE) {
        ETTComponents.SuccessNotification(info.file.name + SUCCESS_MESSAGE.FILE_UPLOAD, 0);
        disabled = false;
        apiSelector = false;
      } else if (info.file.status === TITLES.ERROR) {
        ETTComponents.ErrorNotification(info.file.name + ERROR_MESSAGE.FILE);
      }
    },

    onRemove(file) {
      const refresh = SERVICE.Refresh();
      refresh.then().catch(() => {
        ETTComponents.ErrorNotification(ERROR_MESSAGE.REFRESH_PAGE);
      });
      ETTComponents.SuccessNotification(`${file.name}${SUCCESS_MESSAGE.FILE_REMOVED}`);
      apiSelector = true;
      disabled = true;
    },

    beforeUpload(file) {
      const isCSV = file.type === TITLES.FILE_TYPE;
      if (!isCSV && apiSelector) {
        ETTComponents.ErrorNotification(ERROR_MESSAGE.ONLY_CSV);
        disabled = true;
      } else if (isCSV && apiSelector) {
        apiSelector = true;
        disabled = false;
      } else if (!apiSelector) {
        ETTComponents.ErrorNotification(ERROR_MESSAGE.ONE_FILE);
      }
      return apiSelector;
    },
  };

  return (
    <div>
      <ETTComponents.JustifyCenterWrapper>
        <ETTComponents.SubHeaderText
          size={SIZE.TEXT_SECONDARY_SIZE}
          style={{ marginBottom: SIZE.SECTOR_HEIGHT_SECONDARY_HALF }}
        >
          {TOOL_PAGE_DETAILS.STEP_3_BAT}
        </ETTComponents.SubHeaderText>
      </ETTComponents.JustifyCenterWrapper>
      <Upload.Dragger {...extras}>
        <ICONS.UPLOAD fill={COLORS.ICON_PROCESS} />
        <ETTComponents.Paragraph>{TOOL_PAGE_DETAILS.DRAG_DROP_MESSAGE}</ETTComponents.Paragraph>
      </Upload.Dragger>
      <ETTComponents.JustifyCenterWrapper>
        <ETTComponents.Button disabled={disabled} onClick={handleSubmit} />
      </ETTComponents.JustifyCenterWrapper>
    </div>
  );
};

export default Batch;

Batch.propTypes = {
  handleSubmit: PropsTypes.func.isRequired,
};
