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
class Login extends React.Component {
  /**
   * @param : props
   * @description : state includes -
   * isLoading: Boolean value; true = waiting for response from server
   * isMining: Boolean value; true = mining coins
   */
  constructor(props) {
    super(props);
    this.state = { isLoading: false, currentUser: '' };
    this.handleSubmit = this.handleSubmit.bind(this);

    // debounce methods that cause API calls or start coin mining
    // this.submitLogin = debounce(500, this.submitLogin);
    // this.mineCoins = debounce(500, this.mineCoins);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.submitLogin(values);
      }
    });
  }

  submitLogin(values) {
    // const flag = false;
    const output = SERVICE.Login(values.username, values.password);
    output.then((res) => {
      // if (res.data === 'user') {
      //   this.props.history.push('/user/tool');
      // }

      // if (res.data === 'admin') {
      //   this.props.history.push('/admin/tool');
      // }

      this.props.handleCurrentUser(res.data);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.state;
    return (
      <div>
        <ETTCOMPONENTS.SpaceSector height={200} />
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.MainHeaderText>login</ETTCOMPONENTS.MainHeaderText>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.SpaceSector height={50} />
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: ERROR_MESSAGE.LOGIN_EMAIL }],
            })(
              <Input
                prefix={<Icon type="user" />}
                size="large"
                name="usernameOrEmail"
                placeholder="Username or Email"
              />,
            )}
          </FormItem>
          <ETTCOMPONENTS.SpaceDiv bottom={30} />
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: ERROR_MESSAGE.LOGIN_PASSWORD }],
            })(
              <Input
                prefix={<Icon type="lock" />}
                size="large"
                name="password"
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <CustomComponents.ShowLaoding loading={isLoading} />
          <Form.Item>
            <ETTCOMPONENTS.Button title="Login" onClick={this.handleSubmit} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedLoginFrom = Form.create({ name: 'normal_login' })(Login);

// exporting the component
export default withRouter(WrappedLoginFrom);

// // Default props
// Login.defaultProps = {
//  : ,
// };

// // Props Validation Rules
// Login.propTypes = {
//  : PropTypes,
// }
