import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import Authentication from '../shared/Authentication';
import styles from '../../../styles/custom/User/user-container.sass';
import { fetchProfessor } from '../../actions';

class ProfessorContainer extends Component {
  componentWillMount() {
    this.props.fetchProfessor();
  }


  render() {
    const checkboxStyle = {
      marginLeft: 20,
      marginRight: 10,
    };

    function CheckboxRevisado(name) {
      return (
        <span>
          <input type="checkbox" style={checkboxStyle} name={name} />
          <label id={name} className="checkbox" htmlFor={name}>Revisado</label>
        </span>
      );
    }

    return (
      <div styleName="container">
        <div styleName="title">Professor</div>
        <h5>Nome</h5>
        <input type="text" /> {CheckboxRevisado('nome')}
        <h5>Email</h5>
        <input type="text" /> {CheckboxRevisado('email')}
        <h5>Endereço</h5>
        <input type="text" /> {CheckboxRevisado('endereco')}
        <h5>Lattes</h5>
        <input type="text" /> {CheckboxRevisado('lattes')}
        <h5>Diploma</h5>
        <input type="text" /> {CheckboxRevisado('diploma')}
        <h5>Biografia</h5>
        <input type="text" /> {CheckboxRevisado('biografia')}
        <h5>Data Nascimento</h5>
        <input type="text" /> {CheckboxRevisado('dataNascimento')}
      </div>
    );
  }
}

ProfessorContainer.propTypes = {
  fetchProfessor: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchProfessor }, dispatch);
const mapStateToProps = ({ professorData }) => ({ professor: professorData });

export const styledComponent = CSSModules(ProfessorContainer, styles, { allowMultiple: true });
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);
export default Authentication(connectedComponent);
