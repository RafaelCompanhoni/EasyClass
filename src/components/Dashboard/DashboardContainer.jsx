import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/Dashboard/dashboard-container.sass';
import { signOut, setSelectedSection } from '../../actions';

import NavBar from './NavBar';
import SideBar from './SideBar';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
    this.onSectionSelection = this.onSectionSelection.bind(this);
  }

  onLogout() {
    this.props.signOut();
  }

  onSectionSelection(selectedSection) {
    this.props.setSelectedSection(selectedSection);
  }

  render() {
    const { children, selectedSection } = this.props;

    return (
      <Fragment>
        <NavBar onLogout={this.onLogout} />

        <div styleName="columns">
          <SideBar onSectionSelection={this.onSectionSelection} selectedSection={selectedSection} />

          <main styleName="column">
            <div styleName="section">
              {children}
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

DashboardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  signOut: PropTypes.func.isRequired,
  setSelectedSection: PropTypes.func.isRequired,
  selectedSection: PropTypes.string,
};

DashboardContainer.defaultProps = {
  selectedSection: 'users',
};

const mapStateToProps = ({ uiData }) => ({ selectedSection: uiData.selectedSection });
const mapDispatchToProps = dispatch => bindActionCreators({ signOut, setSelectedSection }, dispatch);

export const styledComponent = CSSModules(DashboardContainer, styles, { allowMultiple: true });
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
