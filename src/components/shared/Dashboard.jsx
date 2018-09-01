/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/shared/dashboard.sass';

const Dashboard = ({ children }) => (
  <React.Fragment>
    <nav styleName="navbar is-light" role="navigation" aria-label="main navigation">
      <div styleName="navbar-brand">
        <a styleName="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>

        <a role="button" styleName="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
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
