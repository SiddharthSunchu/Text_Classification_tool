/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-24 11:07:26
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-03 17:24:20
 */

// Ant Design
import { message } from 'antd';

/**
 *@description ErrorMessage Component to display Error message on UI with props
 */
const ErrorMessage = value => message.error(value, 10);

export default ErrorMessage;
