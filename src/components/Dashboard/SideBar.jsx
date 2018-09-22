import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/Dashboard/sidebar.sass';

const SideBar = ({ onSectionSelection, selectedSection }) => (
  <aside styleName="column is-2 has-background-light">
    <div styleName="sidebar-nav-container">
      <nav styleName="menu">
        <p styleName="menu-label">Geral</p>
        <ul styleName="menu-list">
          <li>
            <a
              styleName={selectedSection === 'professores' ? 'is-active' : ''}
              onClick={() => onSectionSelection('professores')}
            >
              Professores
            </a>
          </li>
          <li>
            <a
              styleName={selectedSection === 'alunos' ? 'is-active' : ''}
              onClick={() => onSectionSelection('alunos')}
            >
              Alunos
            </a>
          </li>
        </ul>
        <p styleName="menu-label">Administração</p>
        <ul styleName="menu-list">
          <li>
            <a
              styleName={selectedSection === 'aprovacao-professor' ? 'is-active' : ''}
              onClick={() => onSectionSelection('aprovacao-professor')}
            >
              Aprovação de Professores
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

SideBar.propTypes = {
  onSectionSelection: PropTypes.func.isRequired,
  selectedSection: PropTypes.string,
};

SideBar.defaultProps = {
  selectedSection: 'users',
};

export default CSSModules(SideBar, styles, { allowMultiple: true });
