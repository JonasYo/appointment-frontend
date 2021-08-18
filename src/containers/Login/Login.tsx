import React, { useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { FiMail, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '@hooks/auth';

import { Title, Subtitle, Input, Button } from '@components/index';

import {
  Container,
  Content,
  AnimationWrapper,
  Background,
  Description,
  ButtonWrapper,
  FormWrapper,
  CreateAccount,
} from './Login.styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const handlerSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log('1');

        await signIn({
          email: data.email,
          password: data.password,
        });

        router.push('/');
      } catch (error) {
        console.error('Error', error);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationWrapper>
          <Title>Seja-bem vinda(o)!</Title>

          <Subtitle>Faça o login em sua conta</Subtitle>

          <FormWrapper ref={formRef} onSubmit={handlerSubmit}>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <Link href="/forgot-password">
              <Description>Esqueceu a senha?</Description>
            </Link>

            <ButtonWrapper>
              <Button primary type="submit">
                Entrar
              </Button>
            </ButtonWrapper>
          </FormWrapper>

          <Link href="/signup">
            <CreateAccount>Criar conta</CreateAccount>
          </Link>
        </AnimationWrapper>
      </Content>
    </Container>
  );
};

export default Login;
