import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: background-color 250ms linear, color 250ms linear;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:hover,
  &:focus {
    background-color: orangered;
    color: white;
  }
  &.active {
    color: white;
    background-color: #dd3b00;
  }
`;
