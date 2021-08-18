import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  margin-top: 1.5rem;

  ${({ theme }) => theme.mediaQuery.tabletMediaQuery} {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
  ${({ theme }) => theme.mediaQuery.desktopMediaQuery} {
    font-size: ${({ theme }) => theme.font.sizes.small};
    margin-top: 24px;
    margin-bottom: 24px;
  }
  ${({ theme }) => theme.mediaQuery.extraDesktopMediaQuery} {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  overflow-y: hidden;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Li = styled.li<{ isSelected: Boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 24px;
  font-size: 1.1em;
  transform: ${({ isSelected }) => (isSelected ? 'scale(1.2)' : 'unset')};

  > p {
    font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'unset')};
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const CircleItem = styled.a`
  display: inline-block;
  width: 88px;
  height: 88px;
  background: url(https://www.facebook.com/images/fb_icon_325x325.png);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%;
`;
