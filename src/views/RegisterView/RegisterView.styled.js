import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-top: 50px;
  color: black;
`;

export const FormStyled = styled.form`
  margin-top: 20px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & p {
    margin: 0;
    font-size: 20px;
  }
  & input {
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 2%;
    border: 2px solid black;
    outline: none;
    font-size: 24px;
    transition: border-color 250ms linear;
    &:focus-visible {
      border-color: orangered;
    }
  }
`;

export const Button = styled.button`
  background-color: #ff4500;
  width: 94px;
  height: 37px;

  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #dd3b00;
    color: white;
  }
`;
