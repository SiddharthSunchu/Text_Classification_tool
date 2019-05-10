/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 15:31:53
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-23 16:30:58
 */

/**
 * @author Siddharth Sunchu (OICT) - ETT | siddharth.sunchu@un.org
 * @description Defined all the contants and values for all the pages
 */

import ICONS from '../assets/SVGIcons/index';

import { Images } from '../assets/Images/constants';

export const IMAGES = Images;

export const ROUTES = Object.freeze({
  HOME: '/',
  TOOL: '/tool',
  // TOOL: '/tool',
  LOGIN: '/login',
  PROFILE: '/profile',
  SETTING: '/setting',
});

export const HEADER_ROUTE_NAMES = Object.freeze({
  HOME: 'Home',
  LOGIN: 'Login',
  TOOL: 'Tool',
  ADMIN_TOOL: 'Tool',
  PROFILE: 'Profile',
  SETTING: 'Setting',
});

// API SErver ENDpoint
const API_SERVER = 'http://18.191.117.240:8000';
// const API_SERVER = 'http://0.0.0.0:8000';

// Check the UI URL to give Header Tab
export const API_UI = `http:3.16.107.64${ROUTES.TOOL}`;

export const API = Object.freeze({
  HAZARD_RESPONSE: `${API_SERVER}/getResults/hazard/response`,
  HAZARD_BATCH: `${API_SERVER}/getResults/hazard/batch`,
  THEME_RESPONSE: `${API_SERVER}/getResults/theme/response`,
  THEME_BATCH: `${API_SERVER}/getResults/theme/batch`,
  UPLOAD_FILE: `${API_SERVER}/upload/file`,
  DOWNLOAD_FILE: `${API_SERVER}/download/file`,
  DELETE_FILE: `${API_SERVER}/delete/file`,
  HOME: `${API_SERVER}/`,
  SERVER: `${API_SERVER}`,
});

export const INPUT_TYPE = Object.freeze({
  TYPE1: 'Request-Response',
  TYPE2: 'Batch',
});

export const LABEL_TYPE = Object.freeze({
  HAZARD: 'Hazard',
  THEME: 'Theme',
});

export const FILE_TYPE = Object.freeze({
  FILE: 'file',
  TEXT: 'Text',
});

export const TITLES = Object.freeze({
  PROJECT_NAME: ' Text Classification',
  DEPARTMENT_NAME: 'UNISDR',
  TECHNOLOGY_NAME: 'Machine Learning',
  HOME: 'HOME',
  TOOL: 'TOOL',
  ML: 'ML',
  CLASSIFICATION_TOOL: ' Tool',
  PROJECT: 'Project',
  PROJECT_DESCRIPTION:
    'This project applies Machine Learning techniques to attempt to improve the efficiency of classifying articles on the UNISDR Prevention Web website for the Office for Disaster Risk Reduction. Each article is analyzed and then classified into one or more Hazard (17) and Theme (34) labels, according to varying features of the articles text.',
  PROJECT_INFO:
    '* The overall scored accuracy of classification is 93% for Hazards, and 94% for Themes. We utilized because of the multi-label classification the <a href="https://en.wikipedia.org/wiki/Multi-label_classification" title="Multi-Label Classification - Hamming-Loss">"Hamming-Loss"</a> mathematical loss function to ascertain the overall scored accuracy for the combined models per type.',
  TITLE_DATA: 'title',
  TEXT_DATA: 'textData',
  TITLE_TEXTDATA: 'title and textdata',
  FILE: "File doesn't exit",
  FILE_TYPE: 'text/csv',
  DONE: 'done',
  ERROR: 'error',
  RESULTS: 'Results',
  IMAGE_ALT: 'Image',
  TEXT_AREA: 'textarea',
  TEXT_DATA_TITLE: 'Text Data',
  PROJECT_FUTURE_INFO:
    'Articles will be classified on customized granular Trained Models, which continually learn and improve over time',
  HAZARD_RESULT_INFO_1:
    '* The overall scored accuracy of classification is 93% for Hazards. We utilized because of the ',
  THEME_RESULT_INFO_1:
    '* The overall scored accuracy of classification is 94% for Themes. We utilized because of the ',
  HAZARD_RESULT_INFO_2:
    'the Hamming-Loss, mathematical loss function to ascertain the overall scored accuracy for the combined models per type.',
  THEME_RESULT_INFO_2:
    'the Hamming-Loss, mathematical loss function to ascertain the overall scored accuracy for the combined models per type.',
  MULTILABEL_CLASSIFICATION: 'multi-label classification ',
  MULTILABLE_CLASSIFICATION_LINK: 'https://en.wikipedia.org/wiki/Multi-label_classification',
});

export const SERVICE_AREA = [
  Object.freeze({
    TITLE: 'GOAL',
    DESCRIPTION: 'Categorize the articles',
    ICON_NAME: 'fa fa-check-circle',
    IMAGES: ICONS.GOAL,
  }),
  Object.freeze({
    TITLE: 'Method',
    DESCRIPTION: 'Machine Learning Classification',
    ICON_NAME: 'fa fa-cogs',
    IMAGES: ICONS.COGS,
  }),
  Object.freeze({
    TITLE: 'Application',
    DESCRIPTION: 'Custom Data Analysis using Python Libraries',
    ICON_NAME: 'fa fa-windows',
    IMAGES: ICONS.MICROSOFT,
  }),
  Object.freeze({
    TITLE: 'Uplaod and Get Results',
    DESCRIPTION: 'Lables will be classified on Trained Models',
    ICON_NAME: 'fa fa-cloud-upload',
    IMAGES: ICONS.CLOUD,
  }),
];

export const SERVICE_AREA_TITLE = Object.freeze({
  HEADING: 'Objectives and Details',
  DESCRIPTION: 'UNISDR Prevention Web Classification Tool',
});

export const CAROUSAL = [
  Object.freeze({
    TITLE: 'Data Collection',
    DESCRIPTION: 'Consuming the original text data from the Prevention Web API endpoint.',
  }),
  Object.freeze({
    TITLE: 'Data Preparation',
    DESCRIPTION: 'Cleansing, pre-processing and normalizing data.',
  }),
  Object.freeze({
    TITLE: 'Data Prerecession',
    DESCRIPTION:
      'Normalizing case to lowercase and lemmatizing  words, removing stop words, special characters, duplicate characters, URL, email addresses.',
  }),
  Object.freeze({
    TITLE: 'Data Balance',
    DESCRIPTION: 'Data heavily unbalanced. Custom balancing of data using SMOKE function.',
  }),
  Object.freeze({
    TITLE: 'Feature Selection',
    DESCRIPTION:
      'Using N-gram methods weighted by TF-IDF to generating text data’s feature vectors.',
  }),
  Object.freeze({
    TITLE: 'Model Selection and Evaluation',
    DESCRIPTION:
      'Splitting the data into two parts: training data (80%) and testing data (20%). Comparing and optimizing different models’ performance and to obtain the highest accuracy. Hyper tuning of parameters.',
  }),
  Object.freeze({
    TITLE: 'Prediction',
    DESCRIPTION:
      'Applying the test data to trained models and getting the predicted labels for articles.',
  }),
];

export const CAROUSAL_TITLE = Object.freeze({
  HEADING: 'Procedures',
  DESCRIPTION: 'How does it Work ?',
});

export const CONTACT_INFO = Object.freeze({
  NAME: 'Contact Info',
  DEPARTMENT_NAME: 'Office of Information and Communications Technology',
  ADDRESS_NAME_FLOOR: 'United Nations, 13th Floor',
  ADDRESS_STREET: '405 East 42nd Street',
  ADDRESS_ZIPCODE_STATE: 'New York, Ny 10017',
  UN_WEBSITE: 'https://unite.un.org/',
  UN_FACEBOOK: 'https://www.facebook.com/UnitedNationsUnite/',
  UN_TWITTER: 'https://twitter.com/UN',
  UN_LINKEDIN: 'https://www.linkedin.com/company/united-nations/',
  ETT_EMAIL: 'ett@un.org',
  AI_EMAIL: 'ai@un.org',
  UN_PHONE_MAIN: 'Main: 212-963-4475',
  UN_PHONE_OFFICE: 'Office: 212-963-3333',
  UNISDR_HOME_LINK: 'https://www.unisdr.org/',
  GOOGLE_MAPS: 'https://goo.gl/maps/7bBeNBddhHG2',
  UNISDR_WEBSITE: 'https://www.unisdr.org/',
});

export const TEAM_INFO = Object.freeze({
  TITLE: 'About Our Team',
  NAME: 'EMERGING TECHNOLOGIES TEAM',
  DESCRIPTION:
    'Technology continues to develop at light speed. OICT as the technology provider for the UN Secretariat has to attempt to keep up with this pace. The Emerging Technology Team is a small, nimble and adaptable team that focuses on trying to correctly apply these frontier technologies for the benefit of the organizations objectives.',
});

export const TEAM = [
  Object.freeze({
    NAME: 'Kevin Bradley',
    ROLE: 'Emerging Team Manager',
    IMAGES: IMAGES.MANAGER,
    ICONS: ICONS.MANAGER,
    TWITTER: CONTACT_INFO.UN_TWITTER,
    FACEBOOK: CONTACT_INFO.UN_FACEBOOK,
    LINKDIN: CONTACT_INFO.UN_LINKEDIN,
  }),
  Object.freeze({
    NAME: 'Yihan Bao',
    ROLE: 'Machine Learning Engineer',
    IMAGES: IMAGES.MACHINE,
    ICONS: ICONS.MACHINE_LEARNING,
    TWITTER: 'https://twitter.com/Yihan117',
    FACEBOOK: 'https://www.facebook.com/yihan.bao.9085',
    LINKDIN: CONTACT_INFO.UN_LINKEDIN,
  }),
  Object.freeze({
    NAME: 'Siddharth Sunchu',
    ROLE: 'Software(UI/UX) Developer',
    IMAGES: IMAGES.DEVELOPER,
    ICONS: ICONS.FRONT_END,
    TWITTER: 'https://twitter.com/Ssunchu28',
    FACEBOOK: 'https://www.facebook.com/siddharth.sunchu',
    LINKDIN: 'https://www.linkedin.com/in/siddharth-sunchu/',
  }),
  Object.freeze({
    NAME: 'Sravanthi Varanasi',
    ROLE: 'Software Engineer',
    IMAGES: IMAGES.SOFTWARE_DEVELOPER,
    ICONS: ICONS.SOFTWARE_ENGINEER,
    TWITTER: 'https://twitter.com/SravanthiV21',
    FACEBOOK: 'https://www.facebook.com/sravanthi.varanasi',
    LINKDIN: 'https://www.linkedin.com/in/sravanthi-varanasi-a8431a76/',
  }),
  Object.freeze({
    NAME: 'Praneeth Nooli',
    ROLE: 'Data Science',
    IMAGES: IMAGES.DATA_SCIENCE,
    ICONS: ICONS.DATA_SCIENCE,
    TWITTER: CONTACT_INFO.UN_TWITTER,
    FACEBOOK: CONTACT_INFO.UN_FACEBOOK,
    LINKDIN: 'https://www.linkedin.com/in/praneethnooli/',
  }),
  Object.freeze({
    NAME: 'Aishwarya Umachandran',
    ROLE: 'Software Engineer',
    IMAGES: IMAGES.DATA_SCIENCE,
    ICONS: ICONS.DATA_SCIENCE,
    TWITTER: CONTACT_INFO.UN_TWITTER,
    FACEBOOK: CONTACT_INFO.UN_FACEBOOK,
    LINKDIN: CONTACT_INFO.UN_LINKEDIN,
  }),
];

export const TOOL_PAGE_DETAILS = Object.freeze({
  STEP_1: 'Step 1: Select the Label type',
  STEP_2: 'Step 2: Select Input type',
  STEP_3_BAT: 'Step 3: Upload Data',
  STEP_3_REQ: 'Step 3: Input data for classification',
  RESULTS: 'Results',
  DOWNLOAD: 'You can also download the file',
  DRAG_DROP_MESSAGE: 'Click or drag file to this area to upload',
});

export const MODAL_INFO = [
  Object.freeze({
    title: 'Are you sure want to go back to Step 1?',
    content: 'Going back to the previous step will delete the current data.',
  }),
  Object.freeze({
    title: 'Are you sure want to go back to Step 2?',
    content: 'Going back to the previous step will delete the current data.',
  }),
  Object.freeze({
    title: 'Are you sure want to go back to Step 3?',
    content: 'Going back to the previous step will delete the current data.',
  }),
  Object.freeze({
    title: 'You are already on Results Page',
  }),
];

export const HEADER_MENU = [
  Object.freeze({ key: '/', route: '/', title: 'HOME' }),
  Object.freeze({ key: '/tool', route: '/tool', title: 'TOOL' }),
];

export const ERROR_MESSAGE = Object.freeze({
  REFRESH_PAGE: 'PLease Refresh The page',
  TITLE_DATA: 'Please Input the Title',
  TEXT_DATA: 'Please Input the TextData',
  TITLE_TEXTDATA: 'Please Input the Title and Text data',
  FILE: 'Please Upload the File',
  CONNECTION_FAILED: 'Please Refresh the page. Connection failed',
  ONLY_CSV: 'You can only upload CSV file!',
  ONE_FILE: 'You can only upload one CSV file at a time!',
  LOGIN_EMAIL: 'Please input a valid email address',
  LOGIN_PASSWORD: 'Please input a valid password',
});

export const USER = Object.freeze({
  USERNAME_OR_EMAIL: 'yihan@un.org',
  PASSWORD: '0123456789',
});

export const SUCCESS_MESSAGE = Object.freeze({
  FILE_UPLOAD: ' file successfully uploaded.',
  FILE_REMOVED: ' file successfully removed.',
});

export const RESULT_RESULT = [
  {
    TITLE:
      'The impact of climate change policy on the risk of water stress in southern and eastern Asia',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Drought',
    PROB: '100%',
  },

  {
    TITLE:
      'Impact of California fires on local and regional air quality: the role of a low?cost sensor network and satellite observations',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Wild Fire',
    PROB: '100%',
  },

  {
    TITLE: 'Early warning for flash floods',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Flood',
    PROB: '99%',
  },

  {
    TITLE: 'Facing natural hazards with Maori environmental knowledge',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Drought, Earthquake, Flood, Land Slide, Tsunami, Volcano',
    PROB: '93.1, 45.2, 93.18, 97.89, 97.48, 98.95',
  },

  {
    TITLE: 'Promoting and protecting rights in recovery',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Earthquake, Flood',
    PROB: '95.77, 88.79',
  },

  {
    TITLE:
      'Joint WMO/IOC technical commission for oceanography and marine meteorology, third session',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Cyclone, Storm Surge, Tsunami',
    PROB: '54.12, 100.0, 97.48',
  },

  {
    TITLE: 'Drought contingency plans and planning in the Greater Horn of Africa',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Drought',
    PROB: '100%',
  },

  {
    TITLE: 'No time for doubt: tackling urban risk',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Cyclone, Drought, Earthquake, Flood, Heat Wave, Wild Fire',
    PROB: '95.82, 81.91, 61.24, 93.78, 56.84, 97.06',
  },

  {
    TITLE: 'Earthquake prediction',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'EarthQuake, Tsunami',
    PROB: '100%, 99%',
  },

  {
    TITLE: 'Natural hazards and disasters',
    TEXTDATA:
      "'Earthquake prediction' is the ultimate goal for geoscientists. This volume presents the latest ideas of the ever fascinating and challenging research of earthquake prediction. Sunspot activity and Coronal mass ejection are considered to be influential phenomena in affecting both the electric as well as the magnetic characteristics of sun-earth environment. All these changes have been observed before the occurrence of earthquakes and tsunami in various parts of the earth.",
    LABELS: 'Cyclone, Earthquake, Flood, Land Slide, Volcano',
    PROB: '59.95, 95.77, 78.19, 44.14, 100.0',
  },
];
