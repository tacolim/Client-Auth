import React, { Component } from 'react';
import { connect } from 'react-redux';

function ComposedComponent(WrappedComponent) {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      if (!this.props.authenticated) return <div>'No Auth'</div>;
      return <WrappedComponent />;
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};

export default ComposedComponent;