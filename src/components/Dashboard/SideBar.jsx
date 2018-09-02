import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/Dashboard/sidebar.sass';

const SideBar = ({ onSectionSelection }) => (
  <aside styleName="column is-2 has-background-light">
    <div styleName="sidebar-nav-container">
      <nav styleName="menu">
        <p styleName="menu-label">Geral</p>
        <ul styleName="menu-list">
          <li>
            <a styleName="is-active" onClick={() => onSectionSelection('users')}>Usuários</a>
          </li>
        </ul>
        <p styleName="menu-label">Administração</p>
        <ul styleName="menu-list">
          <li>
            <a onClick={() => onSectionSelection('teacher-approval')}>Aprovação de Professores</a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

SideBar.propTypes = {
  onSectionSelection: PropTypes.func.isRequired,
};

export default CSSModules(SideBar, styles, { allowMultiple: true });
