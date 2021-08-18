import styled from 'styled-components';

export const Ul = styled.ul<{ open: Boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;

  li {
    padding: 28px 18px;
  }

  a {
    text-decoration: none;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    color: #000;

    &.active {
      text-decoration: none;
      color: #15cdfc;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
