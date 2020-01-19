import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import InputLine from 'components/common/InputLine';
import Button from 'components/common/Button';
import ROUTENAMES from 'navigation/routeName';

// Redux
import { loginAction, loginReset } from 'redux/actions/login';
import { toastOpen } from 'redux/actions/toast';

// // Form
// import { Formik } from 'formik';
import * as yup from 'yup';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Senha é obrigatório'),
});

const Login = () => {
  const { register, handleSubmit, setValue, errors, triggerValidation } = useForm({
    validationSchema,
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = values => {
    console.log(values); // email & password input's values in an object.
  };

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const dispatch = useDispatch();
  const login = useSelector(state => state.login);

  const { navigate } = useNavigation();

  const handleLoginError = () => {
    dispatch(loginAction({ email: 'teste@teste.com' }));
  };

  const handleLogin = () => {
    dispatch(
      loginAction({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
    );
  };

  // LOGIN SUCCESS
  useEffect(() => {
    if (login.success) {
      navigate(ROUTENAMES.HOME);
    }
  }, [login.success]);

  // LOGIN ERROR
  useEffect(() => {
    if (login.error) {
      dispatch(
        toastOpen({
          title: 'Erro',
          description: login.errorMessage,
          type: 'error',
        })
      );
      dispatch(loginReset());
    }
  }, [login.error]);

  return (
    <Container>
      <Logo source={{ uri: 'https://i.ibb.co/YLtK0hf/Adicionar-um-ti-tulo.png' }} />
      <InputLine
        maxLength={14}
        value={register.email}
        placeholder="E-mail"
        onChange={text => {
          setValue('email', text);
          triggerValidation();
        }}
        errorMessage={errors.email && errors.email.message}
        inputRef={inputEmail}
        returnKeyType="next"
        onSubmitEditing={() => inputPassword.current.focus()}
        textContentType="none"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <InputLine
        secureTextEntry
        value={register.password}
        placeholder="Senha"
        onChange={text => {
          setValue('password', text);
          triggerValidation();
        }}
        errorMessage={errors.password && errors.password.message}
        returnKeyType="done"
        inputRef={inputPassword}
        onSubmitEditing={handleSubmit(onSubmit)}
        textContentType="none"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        marginTop="32px"
        onPress={handleSubmit(handleLogin)}
        text="Entrar - success"
        isLoading={login.isLoading}
      />
      <Button
        marginTop="32px"
        onPress={() => handleSubmit(handleLoginError())}
        text="Entrar - error"
        isLoading={login.isLoading}
      />
    </Container>
  );
};

export default Login;
