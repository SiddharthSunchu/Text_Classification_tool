
// Base components
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Custom Components
import FooterContainer from './FooterBody';
import FooterBottom from './FooterBottom';

// ETT Components
import ETTComponents from '../index';

/**
 * @author Siddharth Sunchu | siddharth.sunchu@un.org
 * @since 2018-12-28 11:11:45
 * @description Home Footer Component to display Contact info and Social accounts
 * @type StateLess Component
 */
const Footer = ({ secondEmail }) => (
  <section>
    <FooterContainer secondEmail={secondEmail}/>
    <ETTComponents.Divider />
    <FooterBottom />
  </section>
);

// Exporting the Footer to global
export default Footer;

Footer.defaultProps = {
  secondEmail: ''
}

// Props Validation Rules
Footer.propTypes = {
  secondEmail: PropTypes.string,
};
