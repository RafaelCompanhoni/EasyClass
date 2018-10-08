import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import Authentication from '../shared/Authentication';
import styles from '../../../styles/custom/User/user-container.sass';
import { fetchProfessorList } from '../../actions';

class ProfessoresContainer extends Component {
  componentWillMount() {
    this.props.fetchProfessorList();
  }

  render() {
    const { professorList } = this.props;
    return (
      <div styleName="container">
        <div styleName="title">Professores</div>
        <table styleName="table">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
            {professorList.map(professor => <tr key={professor._id}><td>{professor.nome}</td><td>{professor.email}</td></tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

ProfessoresContainer.propTypes = {
  fetchProfessorList: PropTypes.func.isRequired,
  professorList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchProfessorList }, dispatch);
const mapStateToProps = ({ professoresData }) => ({ professorList: professoresData.professores });

export const styledComponent = CSSModules(ProfessoresContainer, styles, { allowMultiple: true });
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);
export default Authentication(connectedComponent);

