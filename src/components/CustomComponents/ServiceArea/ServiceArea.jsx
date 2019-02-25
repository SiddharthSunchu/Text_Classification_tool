// Base components
import React from 'react';

// Constants
import { SERVICE_AREA_TITLE, SERVICE_AREA, TITLES } from '../../../constants/index';

// ETT Components
import ETTCOMPONENTS from '../../ETT-Components/index';

/**
 * @author Siddharth Sunchu (OICT) ETT | siddharth.sunchu@un.org
 * @since 2018-12-21 15:42:36
 * @description Service Area Component displayed on Home page to show different methods
 * and application used in this project
 */

const ServiceArea = () => (
  <ETTCOMPONENTS.ServiceArea
    title={SERVICE_AREA_TITLE.HEADING}
    projectName={SERVICE_AREA_TITLE.DESCRIPTION}
    description={TITLES.PROJECT_FUTURE_INFO}
    data={SERVICE_AREA}
  />
);

export default ServiceArea;
