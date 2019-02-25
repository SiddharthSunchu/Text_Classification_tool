// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// ETT Components
import ETTCOMPONENTS from '../index';

// Style Palette
import { CLASSNAME, STYLE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT) ETT | siddharth.sunchu@un.org
 * @since 2018-02-25 11:42:36
 * @description Service Area Component displayed on Home page to show different methods
 * and application used in this project
 */
const ServiceArea = ({
  title, projectName, description, data,
}) => (
  <section>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.Paragraph>{title}</ETTCOMPONENTS.Paragraph>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.HeaderText style={{ margin: STYLE.TEXT_MARGIN_HEADING }}>
        {projectName}
      </ETTCOMPONENTS.HeaderText>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyCenterWrapper>
      <ETTCOMPONENTS.Paragraph>{description}</ETTCOMPONENTS.Paragraph>
    </ETTCOMPONENTS.JustifyCenterWrapper>
    <ETTCOMPONENTS.JustifyEvenlyWrapper>
      {data.map(el => (
        <ETTCOMPONENTS.ContainerArea key={el.TITLE}>
          <el.IMAGES className={CLASSNAME.PROFILE_ICON} />
          <ETTCOMPONENTS.SubHeaderText>{el.TITLE}</ETTCOMPONENTS.SubHeaderText>
          <ETTCOMPONENTS.Paragraph>{el.DESCRIPTION}</ETTCOMPONENTS.Paragraph>
        </ETTCOMPONENTS.ContainerArea>
      ))}
    </ETTCOMPONENTS.JustifyEvenlyWrapper>
  </section>
);

// Exporting Component
export default ServiceArea;

// Default Props value
ServiceArea.defaultProps = {
  title: '',
  projectName: '',
  description: '',
  data: [],
};
// Props Validation Rules
ServiceArea.propTypes = {
  title: PropTypes.string,
  projectName: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.instanceOf(Array),
};
