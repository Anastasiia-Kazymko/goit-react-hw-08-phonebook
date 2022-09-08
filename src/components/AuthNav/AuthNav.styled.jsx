import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AutorizLink = styled(NavLink)`
  margin-left: auto;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 250ms linear;
  &.active {
    color: #dd3b00;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  & button {
    cursor: pointer;
  }
`;
