/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 17:10:39
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2018-12-19 17:11:03
 */

//ETT Icons
import { ArtificalIntelligence } from '../SVGIcons/ETTIcons/ArtificalIntelligence';
import { MachineLearning } from '../SVGIcons/ETTIcons/MachineLearning';
import { FrontEnd } from '../SVGIcons/ETTIcons/FrontEnd';
import { Location } from '../SVGIcons/ETTIcons/Location';
import { Phone } from '../SVGIcons/ETTIcons/Phone';
import { Email } from '../SVGIcons/ETTIcons/Email';
import { RightArrow } from './ETTIcons/RightArrow';
import { DownArrow } from './ETTIcons/DownArrow';
import { Upload } from './ETTIcons/Upload';
//Social Icons
import { Facebook } from './SocialIcons/Facebook';
import { Linkdin } from './SocialIcons/Linkdin';
import { Twitter } from './SocialIcons/Twitter';
import { Outlook } from './SocialIcons/Outlook';

// Service area icons
import { Goal } from './ServiceAreaIcons/Goal';
import { Cogs } from './ServiceAreaIcons/Cogs';
import { Microsoft } from './ServiceAreaIcons/Microsoft';
import { Cloud } from './ServiceAreaIcons/Cloud';
import { Secure } from './ServiceAreaIcons/Secure';

//Team Area Icons
import { Manager } from './TeamIcons/Manager';
import { SoftwareEngineer } from './TeamIcons/SoftwareEngineer';
import { DataScience } from './TeamIcons/DataScience';

//Project Icons
import { BlockChain } from './ProjectIcons/Blockchain';
import { RewardBadge } from './ServiceAreaIcons/RewardBadge';
import { Group } from './ServiceAreaIcons/Group';

const ICONS = Object.freeze({
  //ETT - icons
  /**
   * @description Doesn't have default color,
   * Please assign classname and provide fill value or provide style and fill value
   */
  ARTIFICAL_INTELLIGENCE: ArtificalIntelligence,
  MACHINE_LEARNING: MachineLearning,
  FRONT_END: FrontEnd,
  LOCATION: Location,
  PHONE: Phone,
  EMAIL: Email,
  /**
   * @description Doesn't have default color,
   * Please assign classname and provide fill value
   */
  RIGHT_ARROW: RightArrow,
  DOWN_ARROW: DownArrow,
  UPLOAD: Upload,

  //Social Iocns
  /**
   * @description Doesn't have default color,
   * Please assign classname and provide fill value
   */
  FACEBOOK: Facebook,
  LINKDIN: Linkdin,
  TWITTER: Twitter,
  OUTLOOK: Outlook,

  //Service Area Icons
  GOAL: Goal,
  COGS: Cogs,
  MICROSOFT: Microsoft,
  CLOUD: Cloud,
  SECURE: Secure,
  REWARDS: RewardBadge,
  GROUP: Group,

  //Team Area Icons
  MANAGER: Manager,
  SOFTWARE_ENGINEER: SoftwareEngineer,
  DATA_SCIENCE: DataScience,

  //Project Icons
  BLOCKCHAIN: BlockChain
});

export default ICONS;
