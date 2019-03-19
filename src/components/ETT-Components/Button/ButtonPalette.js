import { COLORS, STYLE, SIZE } from '../theme/ettStylePalette';

export const BUTTON_STYLE = Object.freeze({
  DEFAULT_TEXT_COLOR: COLORS.TEXT_WHITE,
  PRIMARY_TEXT_COLOR: COLORS.TEXT_WHITE,
  SECONDARY_TEXT_COLOR: COLORS.TEXT_GREY_COLOR,
  TEXT_TRANSFORM: STYLE.TEXT_TRANSFORM_UPPERCASE,
  TEXT_MARGIN_BOTTOM: '0px',
  LETTER_SPACING: SIZE.TEXT_LETTER_SPACING,
  PRIMARY_LETTER_SPACING: STYLE.BUTTON_TEXT_LETTER_SPACING_PRIMARY,
  SECONDARY_LETTER_SPACING: STYLE.BUTTON_TEXT_LETTER_SPACING_PRIMARY
});

export const BUTTON_CONSTANTS = Object.freeze({
  PRIMARY_TYPE: 'primary',
  SECONDARY_TYPE: 'secondary',
  DEFAULT_CLASSNAME: 'default-button-container',
  PRIMARY_CLASSNAME: 'primary-button-container',
  SECONDARY_CLASSNAME: 'secondary-button-container',
  DEFAULT_DISABLED: false,
  DEFAULT_LOADING: false,
  DEFAULT_TITLE: 'Submit'
});

export const DEFAULT_BUTTON_STYLE = Object.freeze({
  background: COLORS.BUTTON_DEFAULT_COLOR,
  border: STYLE.BUTTON_DEFAULT_BORDER,
  color: COLORS.TEXT_WHITE,
  width: STYLE.BUTTON_DEFAULT_WIDTH,
  height: STYLE.BUTTON_DEFAULT_HEIGHT,
  cursor: STYLE.BUTTON_CURSOR
});

export const PRIMARY_BUTTON_STYLE = Object.freeze({
  background: COLORS.BUTTON_DEFAULT_COLOR,
  border: STYLE.BUTTON_DEFAULT_BORDER,
  color: COLORS.TEXT_WHITE,
  width: STYLE.BUTTON_DEFAULT_WIDTH,
  height: STYLE.BUTTON_DEFAULT_HEIGHT,
  cursor: STYLE.BUTTON_CURSOR
});

export const SECONDARY_BUTTON_STYLE = Object.freeze({
  background: COLORS.BUTTON_DEFAULT_COLOR,
  border: STYLE.BUTTON_DEFAULT_BORDER,
  color: COLORS.TEXT_WHITE,
  width: STYLE.BUTTON_DEFAULT_WIDTH,
  height: STYLE.BUTTON_DEFAULT_HEIGHT,
  cursor: STYLE.BUTTON_CURSOR
});

// backgroundColor: '#ebebeb',
//               borderColor: '#ebebeb',
//               width: '100px',
//               height: '45px',
//               margin: '10px'
