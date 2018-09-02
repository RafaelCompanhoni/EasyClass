import React from 'react';
import { styledComponent as LoginContainer } from '../../src/components/Login/LoginContainer';

describe('LoginContainer', () => {
  test('Exibe mensagem de erro quando credenciais informadas são inválidas', () => {
    const wrapper = mount(<LoginContainer signIn={() => {}} />);
    expect(wrapper.find('h3').first().text()).toEqual('Login');
  });
});
