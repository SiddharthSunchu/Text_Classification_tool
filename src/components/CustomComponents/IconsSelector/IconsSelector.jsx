/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 13:48:04
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-04 09:51:44
 */

// Base Component
import React from 'react';

// Proptype Validation
import PropTypes from 'prop-types';

// Ant Design
import { Modal } from 'antd';

// ETT Components
import ETTComponents from '../../ETT-Components/index';

// SVG Icons
import ICONS from '../../../assets/SVGIcons/index';

// Style Palette
import { COLORS, SIZE } from '../../../theme/ettStylePalette';

// Constants
import { MODAL_INFO } from '../../../constants';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Component to display step icons in Tool page with props onclick handles for diffrent
 icons based on selection
 */
const IconsSelector = ({
  currentStep, onClick1, onClick2, onClick3,
}) => {
  const moveToStep1 = () => {
    Modal.confirm({
      title: MODAL_INFO[0].title,
      content: MODAL_INFO[0].content,
      onOk() {
        onClick1();
      },
      onCancel() {},
    });
  };

  const moveToStep2 = () => {
    Modal.confirm({
      title: MODAL_INFO[1].title,
      content: MODAL_INFO[1].content,
      onOk() {
        onClick2();
      },
      onCancel() {},
    });
  };

  const moveToStep3 = () => {
    Modal.confirm({
      title: MODAL_INFO[2].title,
      content: MODAL_INFO[2].content,
      onOk() {
        onClick3();
      },
      onCancel() {},
    });
  };

  const moveToStep4 = () => {
    Modal.confirm({
      title: MODAL_INFO[3].title,
      onOk() {},
      onCancel() {},
    });
  };

  const Icon1Enabled = (
    <ICONS.RIGHT_ARROW
      fill={COLORS.ICON_PRIMARY_COLOR}
      onClick={moveToStep1}
      style={{ margin: SIZE.ICON_MARGIN_SIZE }}
    />
  );
  const Icon2Enabled = (
    <ICONS.RIGHT_ARROW
      fill={COLORS.ICON_PRIMARY_COLOR}
      onClick={moveToStep2}
      style={{ margin: SIZE.ICON_MARGIN_SIZE }}
    />
  );
  const Icon3Enabled = (
    <ICONS.RIGHT_ARROW
      fill={COLORS.ICON_PRIMARY_COLOR}
      onClick={moveToStep3}
      style={{ margin: SIZE.ICON_MARGIN_SIZE }}
    />
  );
  const Icon4Enabled = (
    <ICONS.RIGHT_ARROW
      fill={COLORS.ICON_PRIMARY_COLOR}
      onClick={moveToStep4}
      style={{ margin: SIZE.ICON_MARGIN_SIZE }}
    />
  );
  const process = (
    <ICONS.RIGHT_ARROW fill={COLORS.ICON_PROCESS} style={{ margin: SIZE.ICON_MARGIN_SIZE }} />
  );
  const disabled = (
    <ICONS.RIGHT_ARROW fill={COLORS.ICON_DISABLE} style={{ margin: SIZE.ICON_MARGIN_SIZE }} />
  );
  let Icon1 = Icon1Enabled;
  let Icon2 = Icon2Enabled;
  let Icon3 = Icon3Enabled;
  let Icon4 = Icon4Enabled;
  if (currentStep === 0) {
    Icon1 = process;
    Icon2 = disabled;
    Icon3 = disabled;
    Icon4 = disabled;
  } else if (currentStep === 1) {
    Icon1 = Icon1Enabled;
    Icon2 = process;
    Icon3 = disabled;
    Icon4 = disabled;
  } else if (currentStep === 2) {
    Icon2 = Icon2Enabled;
    Icon3 = process;
    Icon4 = disabled;
  } else if (currentStep === 3) {
    Icon3 = Icon3Enabled;
    Icon4 = process;
  } else if (currentStep === 4) {
    Icon4 = Icon4Enabled;
  } else {
    return null;
  }

  return (
    <ETTComponents.AlignCenterWrapper>
      {Icon1}
      <ETTComponents.Divider />
      {Icon2}
      <ETTComponents.Divider />
      {Icon3}
      <ETTComponents.Divider />
      {Icon4}
    </ETTComponents.AlignCenterWrapper>
  );
};

export default IconsSelector;

IconsSelector.defaultProps = {
  currentStep: 0,
};

IconsSelector.propTypes = {
  currentStep: PropTypes.number,
  onClick1: PropTypes.func.isRequired,
  onClick2: PropTypes.func.isRequired,
  onClick3: PropTypes.func.isRequired,
};
