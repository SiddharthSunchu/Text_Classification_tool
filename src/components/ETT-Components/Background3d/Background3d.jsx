/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-02 17:05:20
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 15:46:12
 */

// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Particles JS
import Particles from 'react-particles-js';

// Style Palette
import { COLORS } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 * @description 3js particle background for home page or landing page with
 * props color for circle and link and props onClick and onHover enable options
 */
const Background3d = ({
  linkColor, circleColor, color, onClickEnable, onHoverEnable,
}) => (
  <Particles
    params={{
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: circleColor,
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color,
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.465604457176227,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 47.948982282851034,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: linkColor,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: onHoverEnable,
            mode: 'repulse',
          },
          onclick: {
            enable: onClickEnable,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
    }}
    style={{
      zIndex: 1,
    }}
  />
);

// Exporting Component
export default Background3d;

// Default Props value
Background3d.defaultProps = {
  linkColor: COLORS.ICON_PROCESS,
  circleColor: COLORS.ICON_PROCESS,
  color: COLORS.ICON_PROCESS,
  onClickEnable: false,
  onHoverEnable: false,
};

// Props Validation Rules
Background3d.propTypes = {
  linkColor: PropTypes.string,
  circleColor: PropTypes.string,
  color: PropTypes.string,
  onClickEnable: PropTypes.bool,
  onHoverEnable: PropTypes.bool,
};
