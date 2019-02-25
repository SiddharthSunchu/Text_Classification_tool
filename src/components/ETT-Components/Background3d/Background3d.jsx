// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Particles JS
import Particles from 'react-particles-js';

// ETT Style Palette
import { COLORS } from '../theme/ettStylePalette';

// Style and Constants
import { PARTICLES, SHAPE_TYPE, INTERACTIVITY } from './stylePalette';

import './Background3d.css';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Activity Indicator Component which uses font awesome library
 * @since 2019-01-02 16:59:29
 * @param  {string} [linkColor = #666666 or ICON_PROCESS] - Line color which is between two object.
 * @param {string} [shapeType = circle] - Type of the Particles with options
 * - circle
 * - edge
 * - triangle
 * - polygon
 * - star
 * @param {color} [typeColor = #666666] - Color of the shape type.
 * @param {string} [strokeColor= #666666] - Color of the stroke.
 * @param {string} [detectType = canvas] - Type of the interactivity detect.
 * - canvas
 * - window
 * @param {boolean} [onHoverEnable = false] - OnHover enable function.
 * @param {string} [hoverMode = repulse] - Hover mode with options like
 * - grab
 * - bubble
 * - repulse
 * @param {boolean} [onClickEnable = false] - onClick enable function.
 * @param {color} [backgroundColor = #FFFFFF] - Background color of the particles JS background.
 * @param {CSS Class} [className] - You can define your classname using this props.
 * @type StateLess Component
 */
const Background3d = ({
  linkColor,
  shapeType,
  typeColor,
  strokeColor,
  detectType,
  onHoverEnable,
  hoverMode,
  onClickEnable,
  clickMode,
  backgroundColor,
  className,
}) => (
  <Particles
    params={{
      particles: {
        number: {
          value: PARTICLES.NUMBER.VALUE,
          density: {
            enable: true,
            value_area: PARTICLES.NUMBER.DENSITY_VALUE_AREA,
          },
        },
        color: {
          value: typeColor,
        },
        shape: {
          type: shapeType,
          stroke: {
            width: PARTICLES.SHAPE.STROKE_WIDTH,
            color: strokeColor,
          },
          polygon: {
            nb_sides: PARTICLES.SHAPE.POLYGON_SIDES,
          },
        },
        opacity: {
          value: PARTICLES.OPACITY.VALUE,
          random: false,
          anim: {
            enable: false,
            speed: PARTICLES.OPACITY.ANIM_SPEED,
            opacity_min: PARTICLES.OPACITY.OPACITY_MIN,
            sync: false,
          },
        },
        size: {
          value: PARTICLES.SIZE.VALUE,
          random: true,
          anim: {
            enable: false,
            speed: PARTICLES.SIZE.ANIM_SPEED,
            size_min: PARTICLES.SIZE.SIZE_MIN,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: PARTICLES.LINE_LINKED.DISTANCE,
          color: linkColor,
          opacity: PARTICLES.LINE_LINKED.OPACITY,
          width: PARTICLES.LINE_LINKED.WIDTH,
        },
        move: {
          enable: true,
          speed: PARTICLES.MOVE.SPEED,
          direction: PARTICLES.MOVE.DIRECTION,
          random: false,
          straight: false,
          out_mode: PARTICLES.MOVE.OUT_MODE,
          bounce: false,
          attract: {
            enable: false,
            rotateX: PARTICLES.MOVE.ATTRACT_ROTATE_X,
            rotateY: PARTICLES.MOVE.ATTRACT_ROTATE_Y,
          },
        },
      },
      interactivity: {
        detect_on: detectType,
        events: {
          onhover: {
            enable: onHoverEnable,
            mode: hoverMode,
          },
          onclick: {
            enable: onClickEnable,
            mode: clickMode,
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: PARTICLES.MODES.GRAB_DISTANCE,
            line_linked: {
              opacity: PARTICLES.MODES.OPACITY,
            },
          },
          bubble: {
            distance: PARTICLES.MODES.BUBBLE_DISTANCE,
            size: PARTICLES.MODES.BUBBLE_SIZE,
            duration: PARTICLES.MODES.BUBBLE_DURATION,
            opacity: PARTICLES.MODES.BUBBLE_OPACITY,
            speed: PARTICLES.MODES.BUBBLE_SPEED,
          },
          repulse: {
            distance: PARTICLES.MODES.REPULSE_DISTANCE,
            duration: PARTICLES.MODES.REPULSE_DURATION,
          },
          push: {
            particles_nb: PARTICLES.MODES.PUSH_PARTICLES_NB,
          },
          remove: {
            particles_nb: PARTICLES.MODES.REMOVE_PARTICLES_NB,
          },
        },
      },
    }}
    style={{
      zIndex: PARTICLES.STYLE.ZINDEX,
      backgroundColor,
    }}
    className={className}
  />
);

// Exporting Component
export default Background3d;

// Default Props value
Background3d.defaultProps = {
  linkColor: COLORS.ICON_PROCESS,
  shapeType: SHAPE_TYPE.CIRCLE,
  typeColor: COLORS.ICON_PROCESS,
  strokeColor: COLORS.ICON_PROCESS,
  detectType: INTERACTIVITY.DETECT_ON_TYPE.CANVAS,
  onHoverEnable: false,
  hoverMode: INTERACTIVITY.ON_HOVER_MODE.REPULSE,
  onClickEnable: false,
  clickMode: INTERACTIVITY.ON_CLICK_MODE.REPULSE,
  backgroundColor: COLORS.SECONDARY_COLOR,
  className: '',
};

// Props Validation Rules
Background3d.propTypes = {
  linkColor: PropTypes.string,
  shapeType: PropTypes.string,
  typeColor: PropTypes.string,
  strokeColor: PropTypes.string,
  detectType: PropTypes.string,
  onHoverEnable: PropTypes.bool,
  hoverMode: PropTypes.string,
  onClickEnable: PropTypes.bool,
  clickMode: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
};
