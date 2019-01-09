/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-28 11:11:45
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-02 11:13:11
 */

// Base components
import React from 'react';

// Custom Components
import FooterContainer from './FooterBody';
import FooterBottom from './FooterBottom';

// ETT Components
import ETTComponents from '../../ETT-Components/constants';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @description Home Footer Component to display Contact info and Social accounts
 */
const Footer = () => (
  <section>
    <FooterContainer />
    <ETTComponents.Divider />
    <FooterBottom />
  </section>
);

export default Footer;
