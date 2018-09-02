import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/custom/shared/dashboard.sass';

const Dashboard = ({ children }) => (
  <React.Fragment>
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
              <a styleName="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
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
          <nav styleName="menu">
            <p styleName="menu-label">Geral</p>
            <ul styleName="menu-list">
              <li><a styleName="is-active">Usuários</a></li>
            </ul>
            <p styleName="menu-label">Administração</p>
            <ul styleName="menu-list">
              <li><a>Aprovações de Professores</a></li>
            </ul>
          </nav>
        </aside>

        <main styleName="column">
          {children}
        </main>
      </div>
    </div>
  </React.Fragment>
);

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export const styledComponent = CSSModules(Dashboard, styles, { allowMultiple: true });
export default styledComponent;
