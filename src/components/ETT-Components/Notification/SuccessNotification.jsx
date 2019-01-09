/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-27 15:36:40
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 17:27:24
 */

// Ant design
import { notification } from 'antd';

/**
 *@description ErrorMessage Component to display Error message on UI with props
 */
const SuccessNotification = value => notification.success({
  message: value,
});

export default SuccessNotification;
