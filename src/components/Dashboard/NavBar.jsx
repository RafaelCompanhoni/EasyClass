import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/Dashboard/navbar.sass';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBarExpanded: false,
    };
  }

  render() {
    const { onLogout } = this.props;

    return (
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
            onClick={() => this.setState({ navBarExpanded: !this.state.navBarExpanded })}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navBarExpanded ? 'is-active' : ''}`}>
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
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default CSSModules(NavBar, styles, { allowMultiple: true });
