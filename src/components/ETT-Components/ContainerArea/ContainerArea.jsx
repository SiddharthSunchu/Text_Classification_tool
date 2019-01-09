/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-21 14:46:22
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 18:37:48
 */
// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Style Palette
import { STYLE, SIZE } from '../../../theme/ettStylePalette';

// CSS Style
import './ContainerArea.css';

/**
 *@description  Component to display box shadow around container with props
 */
const ContainerArea = ({
  children, height, style, className,
}) => {
  let boxShadow = null;
  const containerStyle = {
    display: STYLE.DISPLAY_FLEX,
    justifyContent: STYLE.JUSTIFY_CONTENT_CENTER,
    alignItems: STYLE.ALIGN_ITEMS,
    height,
    width: STYLE.CONTAINER_AREA_WIDTH,
    transitionDuration: STYLE.DIV_TRANSITION_DURATION,
    flexWrap: STYLE.FLEX_WRAP,
    flexDirection: STYLE.FLEX_DIRECTION_VERTICAL,
    boxShadow,
    ...style,
  };

  const hoverStyle = () => {
    boxShadow = STYLE.BOX_SHADOW;
  };

  return (
    <div style={containerStyle} className={className} onMouseOver={hoverStyle} onFocus={hoverStyle}>
      {children}
    </div>
  );
};

// Exporting Component
export default ContainerArea;

// Default Props value
ContainerArea.defaultProps = {
  children: null,
  height: SIZE.SECTOR_HEIGHT,
  style: {},
  className: 'container-area',
};
// Props Validation Rules
ContainerArea.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  height: PropTypes.number,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};
