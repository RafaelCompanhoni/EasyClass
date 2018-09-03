import React from 'react';
import CSSModules from 'react-css-modules';
import Authentication from '../shared/Authentication';
import styles from '../../../styles/custom/TeacherApproval/teacher-approval-container.sass';

const TeacherApprovalContainer = () => (
  <div styleName="container">
    <div styleName="title">Aprovação de Professores</div>
  </div>
);

export const styledComponent = CSSModules(TeacherApprovalContainer, styles, { allowMultiple: true });
export default Authentication(styledComponent);

