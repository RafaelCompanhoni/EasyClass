import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/custom/Dashboard/dashboard-container.sass';
import { signOut } from '../../actions';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.signOut();
  }

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <nav styleName="navbar is-light" role="navigation" aria-label="main navigation">
          <div styleName="navbar-brand">
            <a styleName="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>

            <a role="button" styleName="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div styleName="navbar-end">
            <div styleName="navbar-item">
              <div styleName="field is-grouped">
                <p styleName="control">
                  <a
                    styleName="button is-primary"
                    onClick={this.onLogout}
                  >
                    <span styleName="icon">
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </span>
                    <span>Logout</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <div styleName="section">
          <div styleName="columns">
            <aside styleName="column is-2">
              <nav styleName="menu has-background-light">
                <p styleName="menu-label">Geral</p>
                <ul styleName="menu-list">
                  <li><a styleName="is-active">Usuários</a></li>
                </ul>
                <p styleName="menu-label">Administração</p>
                <ul styleName="menu-list">
                  <li><a>Aprovação de Professores</a></li>
                </ul>
              </nav>
            </aside>

            <main styleName="column">
              {children}
            </main>
          </div>
        </div>
      </Fragment>
    );
  }
}

DashboardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ signOut }, dispatch);
export const styledComponent = CSSModules(DashboardContainer, styles, { allowMultiple: true });
export default connect(null, mapDispatchToProps)(styledComponent);
