import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/custom/Login/login-container.sass';
import { signIn, clearAuthErrors } from '../../actions/index';
import logoImg from '../../../assets/login/logo.png';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClearAuthErrors = this.onClearAuthErrors.bind(this);

    this.state = {
      fields: {
        email: '',
        password: '',
      },
    };
  }

  onFormSubmit(evt) {
    evt.preventDefault();

    const { email, password } = this.state.fields;
    this.props.signIn(email, password);
  }

  onInputChange(evt) {
    const { fields } = this.state;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  }

  onClearAuthErrors() {
    this.props.clearAuthErrors();
  }

  render() {
    const { errors, token } = this.props;

    if (token) {
      return <Redirect to="/professores" />;
    }

    return (
      <section styleName="hero is-success is-fullheight">
        <div styleName="hero-body">
          <div styleName="container has-text-centered">
            <div styleName="column is-4 is-offset-4">
              {errors &&
                <div styleName="notification is-danger">
                  <button
                    styleName="delete"
                    onClick={this.onClearAuthErrors}
                  />
                  <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                  </ul>
                </div>
                }

              {!errors &&
                <div>
                  <h3 styleName="title has-text-grey">Login 789</h3>
                  <p id="subtitle-login" styleName="subtitle has-text-grey">
                    Easy Class - Área Administrativa
                  </p>
                </div>
              }
              <div styleName="box">
                <figure styleName="avatar">
                  <img alt="avatar" src={logoImg} />
                </figure>

                <form onSubmit={this.onFormSubmit}>
                  <div styleName="field">
                    <div styleName="control">
                      <input
                        styleName="input is-large"
                        placeholder="Email"
                        autoFocus=""
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                      />
                    </div>
                  </div>

                  <div styleName="field">
                    <div styleName="control">
                      <input
                        styleName="input is-large"
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={this.state.fields.password}
                        onChange={this.onInputChange}
                      />
                    </div>
                  </div>

                  <button styleName="button is-block is-info is-large is-fullwidth">
                    Login
                  </button>
                </form>
              </div>


            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginContainer.propTypes = {
  signIn: PropTypes.func.isRequired,
  clearAuthErrors: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  token: PropTypes.string,
};

LoginContainer.defaultProps = {
  errors: null,
  token: null,
};

const mapStateToProps = ({ authData }) => ({ errors: authData.authErrors, token: authData.token });
const mapDispatchToProps = dispatch => bindActionCreators({ signIn, clearAuthErrors }, dispatch);

export const styledComponent = CSSModules(LoginContainer, styles, {
  allowMultiple: true,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComponent);
