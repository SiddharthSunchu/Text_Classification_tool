// Importing Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

// Importing Throttle Debounce
import { debounce } from 'throttle-debounce';

// Importing Ant Design
import { Form, Icon, Input } from 'antd';

// React Router
import { withRouter } from 'react-router-dom';

// // CSS Style
// import './Login.css';
import FormItem from 'antd/lib/form/FormItem';
import ETTCOMPONENTS from '../../components/ETT-Components';
import { ERROR_MESSAGE, USER } from '../../constants';
import CustomComponents from '../../components/CustomComponents/constants';
import SERVICE from '../../service/Service';

/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @since 2019-03-19
 * @description Login Screen Component
 */
class Setting extends React.Component {
  /**
   * @param : props
   * @description : state includes -
   * isLoading: Boolean value; true = waiting for response from server
   * isMining: Boolean value; true = mining coins
   */
  //   constructor(props) {
  //     super(props);
  //     this.state = { isLoading: false, currentUser: '' };
  //     this.handleSubmit = this.handleSubmit.bind(this);

  //     // debounce methods that cause API calls or start coin mining
  //     this.submitLogin = debounce(500, this.submitLogin);
  //     this.mineCoins = debounce(500, this.mineCoins);
  //   }

  render() {
    return (
      <div>
        <ETTCOMPONENTS.SpaceSector height={200} />
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.MainHeaderText>Settings</ETTCOMPONENTS.MainHeaderText>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.Button title="Retrain" />
        </ETTCOMPONENTS.JustifyCenterWrapper>
      </div>
    );
  }
}

// exporting the component
export default withRouter(Setting);

// // Default props
// Login.defaultProps = {
//  : ,
// };

// // Props Validation Rules
// Login.propTypes = {
//  : PropTypes,
// }
