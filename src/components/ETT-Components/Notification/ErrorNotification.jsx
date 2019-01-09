/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-27 15:36:40
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-04 10:46:32
 */

// Ant Design
import { notification } from 'antd';

/**
 *@description ErrorMessage Component to display Error message on UI with props
 */
const ErrorNotification = (value, duration) => notification.error({
  message: value,
  duration,
});

export default ErrorNotification;
