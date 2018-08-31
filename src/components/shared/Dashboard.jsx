import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => (
  <div>
    <h1>Dashboard Base</h1>
    { children }
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
