
// Base components
import React from 'react';

// Icons
import ICONS from '../../../assets/SVGIcons';

// Ett Components
import ETTComponents from '..';

// Constants
import { CONTACT_INFO } from '../../../constants/index';

// Style Palette
import { SIZE, CLASSNAME, STYLE } from '../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @since 2018-12-28 11:15:28
 * @description Home Footer Bottom Component to display Social accounts
 * @type StateLess Component
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

// Exporting the Footer Bottom to global
export default FooterBottom;
