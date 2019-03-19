/*
 * @Author: Siddharth Sunchu (OICT-ETT)
 * @Date: 2018-12-19 15:03:47
 * @Last Modified by: siddharth.sunchu@un.org
 * @Last Modified time: 2019-01-07 15:09:26
 */
/**
 * @author Siddharth Sunchu (OICT)-ETT | siddharth.sunchu@un.org
 * @description Main Application Component for Routing description and navigation
 * @since 2018-12-19 15:03:47
 * @extends ReactComponent
 */

// Base Components
import React from 'react';

// React Router Component
import { Route, withRouter, Switch } from 'react-router-dom';

// Import Prop Types Validation
import { PropTypes } from 'prop-types';

// Style and Theme
import 'antd/dist/antd.css';
import './App.css';

// External UI library components for style (ANT design)
import { Layout } from 'antd';

// Screen Component
import Screens from '../screens/constants';

// Theme
import CustomComponents from '../components/CustomComponents/constants';

// Constants
import { ROUTES } from '../constants';
import SERVICE from '../service/Service';

// Ant Design
const { Content } = Layout;

/**
 *@description Component to display Whole Application
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLaoding: true, currentUser: null };
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    this.loadCurrentUser();

    if (this.state.currentUser === 'user') {
      this.props.history.push('/tool');
    }

    if (this.state.currentUser === 'admin') {
      this.props.history.push('/tool');
    }

    if (this.state.currentUser === null) {
      this.props.history.push('/');
    }
  }

  /**
   * @description Called before the page mounts; loads the current user's data and determine whether user is an admin
   * @return None
   */
  loadCurrentUser() {
    const output = SERVICE.CurrentUser();
    output.then((res) => {
      if (res) {
        this.setState({
          currentUser: res.data,
        });
      }
      console.log(res.data);
    });
  }

  handleLogin(values) {
    if (values) {
      this.setState({
        currentUser: values,
      });
    }

    if (values === 'user') {
      this.props.history.push('/tool');
    }

    if (values === 'admin') {
      this.props.history.push('/tool');
    }
    console.log(this.state.currentUser);
  }

  handleLogout(values) {
    this.setState({
      currentUser: values,
    });
    this.props.history.push('/login');
  }

  render() {
    return (
      <Layout>
        <CustomComponents.Header
          location={this.props.location}
          currentUser={this.state.currentUser}
        />
        <Content>
          <div>
            <Switch>
              <Route path={ROUTES.HOME} exact component={Screens.HOME} />
              <Route path={ROUTES.TOOL} component={Screens.TOOL} />
              <Route path={ROUTES.SETTING} component={Screens.SETTING} />
              <Route
                path={ROUTES.LOGIN}
                render={props => <Screens.LOGIN {...props} handleCurrentUser={this.handleLogin} />}
              />
              <Route
                path={ROUTES.PROFILE}
                render={props => (
                  <Screens.PROFILE
                    {...props}
                    handleLogout={this.handleLogout}
                    currentUser={this.state.currentUser}
                  />
                )}
              />
            </Switch>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(App);

// // Default Props value
// App.defaultProps = {
//   history: SIZE.SECTOR_HEIGHT,
// };
// Props Validation Rules

// Props Validation Rules
App.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};
