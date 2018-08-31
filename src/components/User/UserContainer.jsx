import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/staff-list.sass';
import { fetchStaffList } from '../../actions';

class UserContainer extends Component {
  componentWillMount() {
    this.props.fetchStaffList();
  }

  render() {
    const { staffList } = this.props;

    return (
      <section styleName="section">
        <div styleName="container">
          <h1 styleName="title testing">
            Users
          </h1>
          <ul>
            {staffList ? staffList.map(staffMember => <li key={staffMember._id}>{staffMember.name}</li>) : 'CARREGANDO...'}
          </ul>
        </div>
      </section>
    );
  }
}

UserContainer.propTypes = {
  fetchStaffList: PropTypes.func.isRequired,
  staffList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchStaffList }, dispatch);
const mapStateToProps = ({ staffData }) => ({ staffList: staffData.staff });

export const styledComponent = CSSModules(UserContainer, styles, { allowMultiple: true });
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
