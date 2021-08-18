import React, { useRef, useCallback } from 'react';

import { FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import logoImage from '@assets/images/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './ForgotPassword.styles';

interface ResetPasswordFormData {
  password: string;
  passwordConfirmation: string;
}

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ResetPasswordFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Confirmação incorreta',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // const { password, passwordConfirmation } = data;

      // const token = location.search.replace('?token=', '');

      // if (!token) {
      //   throw new Error();
      // }

      // await api.post('/password/reset', {
      //   password,
      //   passwordConfirmation,
      //   token,
      // });

      // history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // const errors = getValidationErrors(err);
        // formRef.current?.setErrors(errors);
      }

      // addToast({
      //   type: 'error',
      //   title: 'Erro ao resetar senha ',
      //   description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
      // });
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImage} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input name="password" icon={FiLock} type="password" placeholder="Nova senha" />
            <Input
              name="passwordConfirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
