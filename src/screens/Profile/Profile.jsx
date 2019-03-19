// Importing Base Component
import React from 'react';

// Props Validation
import PropTypes from 'prop-types';

import ETTCOMPONENTS from '../../components/ETT-Components';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currentUser: 'Test',
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const currentUser = null;
    this.props.handleLogout(currentUser);
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser,
    });
  }

  render() {
    return (
      <div>
        <ETTCOMPONENTS.SpaceSector />
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.MainHeaderText>{this.state.currentUser}</ETTCOMPONENTS.MainHeaderText>
        </ETTCOMPONENTS.JustifyCenterWrapper>
        <ETTCOMPONENTS.SpaceSector />
        <ETTCOMPONENTS.JustifyCenterWrapper>
          <ETTCOMPONENTS.Button onClick={this.handleLogout} />
        </ETTCOMPONENTS.JustifyCenterWrapper>
      </div>
    );
  }
}

// exporting the component
export default Profile;
