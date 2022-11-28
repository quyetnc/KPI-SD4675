import React, {Component} from 'react';
import {connect} from 'react-redux';
import DrawerComponent from '../../components/drawer/DrawerComponent';
export class DrawerContainer extends Component {
  render() {
    return <DrawerComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    color: state.setColorReducer.color,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch(console.log("hi")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
