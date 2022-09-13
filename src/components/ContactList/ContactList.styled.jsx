import styled from 'styled-components';

export const Item = styled.li`
  margin: 5px;
`;

export const DelButton = styled.button`
  outline: none;
  margin-left: 5px;
  border: 1px solid grey;
  background-color: white;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #dd3b00;
  }
`;
