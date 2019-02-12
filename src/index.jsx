/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2019-01-04 09:42:48
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-08 15:59:34
 */

// Base Component
import React from 'react';

// React Dom Component
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Import APP Component
import App from './app/App';

// API
import SERVICE from './service/Service';

// ETT Component
import ETTCOMPONENTS from './components/ETT-Components/index';

// Constants
import { ERROR_MESSAGE } from './constants';
import { SIZE, STYLE } from './theme/ettStylePalette';

/**
 * @author Siddharth Sunchu OICT-ETT | Siddharth.sunchu@un.org
 */
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: false };
    this.refreshPage = this.refreshPage.bind(this);
  }

  componentWillMount() {
    this.refreshPage();
  }

  refreshPage() {
    const refresh = SERVICE.Refresh();
    let flag = null;
    refresh
      .then(() => {
        flag = true;
        this.setState({
          flag,
        });
      })
      .catch((error) => {
        if (error) {
          flag = false;
        }
        this.setState({
          flag,
        });
        ETTCOMPONENTS.ErrorNotification(ERROR_MESSAGE.CONNECTION_FAILED, 0);
      });
  }

  render() {
    const { flag } = this.state;
    let app = (
      <ETTCOMPONENTS.JustifyCenterWrapper style={{ marginTop: STYLE.LANDING_TOP }}>
        <ETTCOMPONENTS.ActivityIndicator size={SIZE.LARGE_ICON} />
      </ETTCOMPONENTS.JustifyCenterWrapper>
    );
    if (flag) {
      app = (
        <Router>
          <App />
        </Router>
      );
    } else if (!flag) {
      app = (
        <ETTCOMPONENTS.JustifyCenterWrapper style={{ marginTop: STYLE.LANDING_TOP }}>
          <ETTCOMPONENTS.ActivityIndicator size={SIZE.LARGE_ICON} />
        </ETTCOMPONENTS.JustifyCenterWrapper>
      );
    }

    return app;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
