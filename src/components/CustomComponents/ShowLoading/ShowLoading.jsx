// Import base Component
import React from 'react';

// ETT Components
import ETTCOMPONENTS from '../../ETT-Components/index';

// Style and Theme
import { COLORS } from '../../../theme/ettStylePalette';

/**
 * @author Siddharth Sunchu (OICT-ETT)
 * @since 2019-03-15
 * @description Show Laoding component to display loading indiicator
 * @param {Boolean} loading - show loading icon depending on the status
 * @param {Boolean} loading - show message icon depending on the status
 */
const ShowLoading = ({ loading, sent }) => {
  if (loading) {
    return (
      <ETTCOMPONENTS.JustifyCenterWrapper style={{ margin: '2%' }}>
        <ETTCOMPONENTS.ActivityIndicator color={COLORS.ICON_PRIMARY_COLOR} />
      </ETTCOMPONENTS.JustifyCenterWrapper>
    );
  }
  if (sent) {
    // show message if received successful response from server
    return (
      <ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.SpaceSector height={50} />
        <ETTCOMPONENTS.Paragraph>Password reset instructions are sent.</ETTCOMPONENTS.Paragraph>
        <ETTCOMPONENTS.Paragraph>Please check your email inbox.</ETTCOMPONENTS.Paragraph>
      </ETTCOMPONENTS.JustifyCenterWrapper>
    );
  }
  return null;
};

export default ShowLoading;

// Default Props value
ShowLoading.defaultProps = {
  loading: false,
  send: false,
};
