import styled from 'styled-components';

export const StyledBurger = styled.div`
  width: 3rem;
  height: 2.5rem;
  position: fixed;
  right: 20px;
  z-index: 20;
  display: none;

  div {
    width: 2.5rem;
    height: 0.22rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    background-color: #000;
    border-width: 1px;
    border-style: solid;
    border-color: #000;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      border-style: ${({ open }) => (open ? 'none' : 'solid')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      border-style: ${({ open }) => (open ? 'none' : 'solid')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
