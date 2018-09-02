import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/Dashboard/navbar.sass';

const NavBar = ({ onLogout }) => (
  <nav
    styleName="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div styleName="navbar-brand">
      <a styleName="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo-white.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        styleName="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div styleName="navbar-end">
      <div styleName="navbar-item">
        <div styleName="field is-grouped">
          <p styleName="control">
            <a styleName="button is-primary" onClick={onLogout}>
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
);

NavBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default CSSModules(NavBar, styles, { allowMultiple: true });
