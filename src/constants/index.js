/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 15:31:53
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-08 16:16:05
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
});

const API_SERVER = 'http://10.244.113.172:33';

export const API_UI = `http://localhost:3000${ROUTES.TOOL}`;

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
  PROJECT_NAME: ' Classification',
  DEPARTMENT_NAME: 'UNISDR',
  TECHNOLOGY_NAME: 'Machine Learning',
  HOME: 'HOME',
  TOOL: 'TOOL',
  ML: 'ML',
  CLASSIFICATION_TOOL: ' Classification Tool',
  PROJECT: 'Project',
  PROJECT_DESCRIPTION:
    'This project is to apply Machine Learning techniques to improve the efficiency of classifying articles on UNISDR website for Office for Disaster Risk Reduction. Each article and document will be classified into one or more hazards and themes labels according to different features of the articles.',
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
    DESCRIPTION: 'Machine Learning',
    ICON_NAME: 'fa fa-cogs',
    IMAGES: ICONS.COGS,
  }),
  Object.freeze({
    TITLE: 'Application',
    DESCRIPTION: 'Microsoft Azure - Machine Learning Studio',
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
  DESCRIPTION: 'UNISDR Classification Tool',
});

export const CAROUSAL = [
  Object.freeze({
    TITLE: 'Data Collection',
    DESCRIPTION: 'Crawling the original text data from websites.',
  }),
  Object.freeze({
    TITLE: 'Data Preparation',
    DESCRIPTION:
      'Dealing with null values in datasets and extracting data for articles’ title, text, and categories.',
  }),
  Object.freeze({
    TITLE: 'Data Prerecession',
    DESCRIPTION:
      'Normalizing case to lowercase and lemmatizing  words, removing stop words, special characters, duplicate characters, URL, email addresses.',
  }),
  Object.freeze({
    TITLE: 'Data Balance',
    DESCRIPTION: 'Balancing the imbalanced data using SMOKE function.',
  }),
  Object.freeze({
    TITLE: 'Feature Selection',
    DESCRIPTION:
      'Using N-gram methods weighted by TF-IDF to generating text data’s feature vectors.',
  }),
  Object.freeze({
    TITLE: 'Model Selection and Evaluation',
    DESCRIPTION:
      'Splitting the data into two parts: training data and testing data. Comparing different models’ performance and selecting models with highest accuracy---Support Vector Machine.',
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
  UN_EMAIL: 'bradleyk@un.org',
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
});

export const SUCCESS_MESSAGE = Object.freeze({
  FILE_UPLOAD: ' file successfully uploaded.',
  FILE_REMOVED: ' file successfully removed.',
});
