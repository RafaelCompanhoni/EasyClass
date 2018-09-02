/* HOC for checking if a component can be rendered based on the auth token existence */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  const Authentication = (props) => {
    if (!props.token) {
      return <Redirect to="/" />;
    }

    return <ChildComponent {...props} />;
  };

  Authentication.propTypes = {
    token: PropTypes.string,
  };

  Authentication.defaultProps = {
    token: null,
  };

  const mapStateToProps = ({ authData }) => ({ token: authData.token });
  return connect(mapStateToProps)(Authentication);
};
