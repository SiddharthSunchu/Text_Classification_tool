// Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// CSS Style
import './TeamInfo.css';

import ETTCOMPONENTS from '../index';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @since 2019-03-05
 * @description Team Info Component
 * @param {} data -
 * @type Stateless Components
 */
const TeamInfo = ({ data }) => {
  if (data) {
      
    data.map(el => {
      return (
        <ETTCOMPONENTS.ContainerArea>
          <el.ICONS />
          <ETTCOMPONENTS.SubHeaderText>{el.NAME}</ETTCOMPONENTS.SubHeaderText>
          <ETTCOMPONENTS.Paragraph>{el.ROLE}</ETTCOMPONENTS.Paragraph>
        </ETTCOMPONENTS.ContainerArea>
      );
    });
  } else {
    return null;
  }
};

// exporting the component
export default TeamInfo;

// Default props
TeamInfo.defaultProps = {
 
};

// Props Validation Rules
TeamInfo.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired
};
