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
    return (
      <div styleName="container">
        <div styleName="title">Professor</div>
        <h5>Nome</h5>
        <h5>Email</h5>
        <h5>Endereço</h5>
        <h5>Lattes</h5>
        <h5>Diploma</h5>
        <h5>Biografia</h5>
        <h5>Nota Média</h5>
        <h5>Data Nascimento</h5>
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
