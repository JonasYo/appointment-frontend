import styled, { keyframes, css } from 'styled-components';
import { Form } from '@unform/web';

import signUpBackgroundImg from '@assets/images/a.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  transition: all 1s;

  padding: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.colors.text};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const FormWrapper = styled(Form)`
  ${({ theme: { mediaQuery } }) => css`
    &&& {
      width: 100%;
    }

    ${mediaQuery.tabletMediaQuery} {
      &&& {
        width: 400px;
      }
    }
    ${mediaQuery.smallDesktopMediaQuery} {
      &&& {
        width: 400px;
      }
    }
    ${mediaQuery.desktopMediaQuery} {
      &&& {
        width: 400px;
      }
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      &&& {
        width: 400px;
      }
    }
  `}
`;

export const ButtonWrapper = styled.div`
  &&& {
    margin-top: 3rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Text = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.small};

  ${({ theme }) => theme.mediaQuery.tabletMediaQuery} {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
  ${({ theme }) => theme.mediaQuery.desktopMediaQuery} {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    margin-top: 24px;
  }
  ${({ theme }) => theme.mediaQuery.extraDesktopMediaQuery} {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }
`;
