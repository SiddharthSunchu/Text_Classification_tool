/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-28 11:15:28
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-02 11:08:12
 */

// Base components
import React from 'react';

// Icons
import ICONS from '../../../assets/SVGIcons';

// Ett Components
import ETTComponents from '../../ETT-Components/constants';

// Constants
import { CONTACT_INFO } from '../../../constants/index';

// Style Palette
import { SIZE, CLASSNAME, STYLE } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Home Footer Bottom Component to display Social accounts
 */
const FooterBottom = () => (
  <ETTComponents.JustifyStartWrapper
    style={{
      alignItems: STYLE.ALIGN_ITEMS,
      paddingLeft: SIZE.SECTOR_HEIGHT_SECONDARY_HALF,
      height: SIZE.SECTOR_HEIGHT_SECONDARY_HALF,
    }}
  >
    <a href={CONTACT_INFO.UN_LINKEDIN}>
      <ICONS.LINKDIN width={SIZE.EXTRA_SMALL} className={CLASSNAME.SOCIAL_ICON} />
    </a>
    <a href={CONTACT_INFO.UN_FACEBOOK}>
      <ICONS.FACEBOOK width={SIZE.EXTRA_SMALL} className={CLASSNAME.SOCIAL_ICON} />
    </a>
    <a href={CONTACT_INFO.UN_TWITTER}>
      <ICONS.TWITTER width={SIZE.EXTRA_SMALL} className={CLASSNAME.SOCIAL_ICON} />
    </a>
  </ETTComponents.JustifyStartWrapper>
);

export default FooterBottom;
