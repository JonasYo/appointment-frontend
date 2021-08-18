import React, { useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { SingUp } from '@services/auth';

import { Title, Button, Input } from '@components/index';

import {
  Container,
  Content,
  AnimationWrapper,
  Background,
  FormWrapper,
  ButtonWrapper,
  Text,
} from './SignUp.styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (payload: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(payload, {
        abortEarly: false,
      });

      await SingUp(payload);

      router.push('/');
    } catch (error) {
      console.error('Error', error);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <AnimationWrapper>
          <Title>Faça seu cadastro</Title>

          <FormWrapper ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <ButtonWrapper>
              <Button primary type="submit">
                Cadastrar
              </Button>
            </ButtonWrapper>
          </FormWrapper>

          <Link href="/login">
            <Text>Voltar para login</Text>
          </Link>
        </AnimationWrapper>
      </Content>
    </Container>
  );
};

export default SignUp;
