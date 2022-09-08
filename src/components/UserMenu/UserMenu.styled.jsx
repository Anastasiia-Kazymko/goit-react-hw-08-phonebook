import styled from 'styled-components';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin-right: 5px;
    font-weight: 500;
  }
  & img {
    display: block;
    margin-right: 5px;
  }
  & button {
    font-weight: 600;
    background-color: transparent;
    border: none;
    transition: color 250ms linear;
    &:hover,
    &:focus {
      color: orangered;
    }
  }
  & svg {
    width: 24px;
    height: 24px;
  }
`;
