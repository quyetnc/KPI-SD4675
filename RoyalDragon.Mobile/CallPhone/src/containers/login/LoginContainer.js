import React, { Component } from 'react';
import Login from '../../components/login/Login';

export class LoginContainer extends Component {
   render() {
      return <Login {...this.props} />;
   }
}

export default LoginContainer
