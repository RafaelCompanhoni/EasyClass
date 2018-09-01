import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/User/user-container.sass';
import { fetchUserList } from '../../actions';

class UserContainer extends Component {
  componentWillMount() {
    this.props.fetchUserList();
  }

  render() {
    const { userList } = this.props;

    return (
      <div styleName="container">
        <div styleName="title">Usuários</div>

        <table styleName="table">
          {userList.map(user => <tr key={user._id}><td>{user.name}</td></tr>)}
        </table>
      </div>
    );
  }
}

UserContainer.propTypes = {
  fetchUserList: PropTypes.func.isRequired,
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUserList }, dispatch);
const mapStateToProps = ({ usersData }) => ({ userList: usersData.users });

export const styledComponent = CSSModules(UserContainer, styles, { allowMultiple: true });
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
