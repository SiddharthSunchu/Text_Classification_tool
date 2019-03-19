/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @since 2019-02-28
 * @description Carousal Component to display Carousal in UI
 */

// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Import Ant design
import { Carousel as OwlCarousel } from 'antd';

// Import ETT components
import ETTCOMPONENTS from '../index';

// Style Palette
import { SIZE } from '../theme/ettStylePalette';

//Carousel constants
import { DEFAULT_PROPS } from './CarouselConstants';

// CSS Style
import './Carousel.css';

/**
 * @param {transition effect} effect - transistion effect for the carousal types of effects
 * - fade
 * - scrollx
 * @param {boolean} vertical - Whether to use to a vertical display
 * @param {boolean} autoplay - Whether to scroll automatically
 * @param {boolean} dots - Whether to show the dots at the bottom of the gallery
 * @param {function} afterChange - Callback function called after the current index changes
 * @param {function} beforeChange - Callback function called before the current index changes
 * @param {CSS Object} style - Style object of the componnet
 * @param {CSS ClassName} className - ClassName of the component
 * @param {Array} data - The data you want dispaly at the UI. Example Data should be array of Objects.
 * Do not the chnage the naming conventions KEY, TITLE and DESCRIPTION should be all caps.
 * - example: data = [{KEY: 1, TITLE: 'Test', DESCRIPTION:'TEST'},]
 * @type Stateless Components
 */
const Carousel = ({
  effect,
  vertical,
  autoplay,
  dots,
  afterChange,
  beforeChange,
  style,
  className,
  data
}) => {
  return (
    // <OwlCarousel
    //   effect={effect}
    //   vertical={vertical}
    //   autoplay={autoplay}
    //   afterChange={afterChange}
    //   beforeChange={beforeChange}
    //   style={style}
    //   className={className}
    // >
    //   {data.map(el => (
    //     <div key={data.key}>
    //       <ETTCOMPONENTS.SubHeaderText
    //         size={SIZE.TEXT_SECONDARY_SIZE}
    //         style={{ marginTop: SIZE.TEXT_HEADER_SIZE }}
    //       >
    //         {data.TITLE}
    //       </ETTCOMPONENTS.SubHeaderText>
    //       <ETTCOMPONENTS.Paragraph>{data.DESCRIPTION}</ETTCOMPONENTS.Paragraph>
    //     </div>
    //   ))}
    // </OwlCarousel>

<OwlCarousel autoplay>
{data.map(el1 => (
  <div key={el1.toString()}>
    <ETTCOMPONENTS.SubHeaderText
      size={SIZE.TEXT_SECONDARY_SIZE}
      style={{ marginTop: SIZE.TEXT_HEADER_SIZE }}
    >
      {el1.TITLE}
    </ETTCOMPONENTS.SubHeaderText>
    <ETTCOMPONENTS.Paragraph>{el1.DESCRIPTION}</ETTCOMPONENTS.Paragraph>
  </div>
))}
</OwlCarousel>
  );
};

// exporting the component
export default Carousel;

// Default props
Carousel.defaultProps = {
  effect: DEFAULT_PROPS.EFFECT,
  vertical: DEFAULT_PROPS.VERTICAL,
  autoplay: DEFAULT_PROPS.AUTOPLAY,
  dots: DEFAULT_PROPS.DOTS,
  afterChange: DEFAULT_PROPS.AFTER_CHANGE,
  beforeChange: DEFAULT_PROPS.BEFORE_CHANGE,
  style: {},
  className: '',
  data: DEFAULT_PROPS.DATA
};

// Props Validation Rules
Carousel.propTypes = {
  effect: PropTypes.string,
  vertical: PropTypes.bool,
  autoplay: PropTypes.bool,
  dots: PropTypes.bool,
  afterChange: PropTypes.func,
  beforeChange: PropTypes.func,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  data: PropTypes.instanceOf(Array).isRequired
};
