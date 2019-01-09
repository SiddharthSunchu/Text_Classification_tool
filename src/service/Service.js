/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-17 15:20:49
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-04 09:47:54
 */

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description API Selector based on the Input Type and Label
 */

// Community Components
import axios from 'axios';

// Constants
import { LABEL_TYPE, API } from '../constants/index';

/**
 * @description API Selector for batch response takes an arguemnt label type and return
 * API based on arguemnt
 */
const Batch = (inputLabelType) => {
  if (inputLabelType === LABEL_TYPE.HAZARD) {
    return axios.get(API.HAZARD_BATCH);
  } if (inputLabelType === LABEL_TYPE.THEME) {
    return axios.get(API.THEME_BATCH);
  }
  return null;
};

/**
 *@description API Selector for Request Response takes an arguemnt label type,
 * title and text data which return API based on arguemnt
 */
const RequestResponse = (inputLabelType, title, textData) => {
  if (inputLabelType === LABEL_TYPE.HAZARD) {
    return axios.post(API.HAZARD_RESPONSE, {
      title,
      textData,
    });
  } if (inputLabelType === LABEL_TYPE.THEME) {
    return axios.post(API.THEME_RESPONSE, {
      title,
      textData,
    });
  }
  return null;
};

/**
 *@description API Selector for download file from UI
 */
const DownloadFile = () => axios.get(API.DOWNLOAD_FILE);

/**
 *@description API Selector for refreshing the page and delete the file
 */
const Refresh = () => axios.get(API.DELETE_FILE);

const SERVICE = Object.freeze({
  Batch,
  RequestResponse,
  DownloadFile,
  Refresh,
});

export default SERVICE;
