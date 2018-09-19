import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import Authentication from '../shared/Authentication';
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
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
            {userList.map(user => <tr key={user._id}><td>{user.nome}</td><td>{user.email}</td></tr>)}
          </tbody>
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
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);
export default Authentication(connectedComponent);
