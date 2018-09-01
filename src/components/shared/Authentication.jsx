import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../history';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.token) {
        history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.token) {
        history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    token: PropTypes.string,
  };

  Authentication.defaultProps = {
    token: null,
  };

  const mapStateToProps = ({ authData }) => ({ token: authData.token });
  return connect(mapStateToProps)(Authentication);
}
