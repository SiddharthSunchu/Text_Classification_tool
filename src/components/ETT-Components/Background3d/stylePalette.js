export const SHAPE_TYPE = Object.freeze({
  CIRCLE: 'circle',
  EDGE: 'edge',
  TRIANGLE: 'triangle',
  POLYGON: 'ploygon',
  STAR: 'star'
});

export const INTERACTIVITY = Object.freeze({
  DETECT_ON_TYPE: Object.freeze({
    CANVAS: 'canvas',
    WINDOW: 'window'
  }),
  ON_HOVER_MODE: Object.freeze({
    GRAB: 'grab',
    BUBBLE: 'bubble',
    REPULSE: 'repulse'
  }),
  ON_CLICK_MODE: Object.freeze({
    PUSH: 'push',
    GRAB: 'grab',
    BUBBLE: 'bubble',
    REPULSE: 'repulse'
  })
});

export const PARTICLES = Object.freeze({
  NUMBER: Object.freeze({
    VALUE: 80,
    DENSITY_VALUE_AREA: 800
  }),
  COLOR: '#666666',
  SHAPE: Object.freeze({
    STROKE_WIDTH: 0,
    STROKE_COLOR: '#666666',
    POLYGON_SIDES: 5
  }),
  OPACITY: Object.freeze({
    VALUE: 0.465604457176227,
    ANIM_SPEED: 1,
    OPACITY_MIN: 0.1
  }),

  SIZE: Object.freeze({
    VALUE: 3,
    ANIM_SPEED: 47.948982282851034,
    SIZE_MIN: 0.1
  }),

  LINE_LINKED: Object.freeze({
    DISTANCE: 150,
    OPACITY: 0.4,
    WIDTH: 1
  }),

  MOVE: Object.freeze({
    SPEED: 3,
    DIRECTION: 'none',
    OUT_MODE: 'out',
    ATTRACT_ROTATE_X: 600,
    ATTRACT_ROTATE_Y: 1200
  }),

  MODES: Object.freeze({
    GRAB_DISTANCE: 400,
    LINE_LINKED_OPACITY: 1,
    BUBBLE_DISTANCE: 400,
    BUBBLE_SIZE: 40,
    BUBBLE_DURATION: 2,
    BUBBLE_OPACITY: 8,
    BUBBLE_SPEED: 3,
    REPULSE_DISTANCE: 200,
    REPULSE_DURATION: 0.4,
    PUSH_PARTICLES_NB: 4,
    REMOVE_PARTICLES_NB: 2
  }),

  STYLE: Object.freeze({
    ZINDEX: 1
  })
});
