import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
  padding: 15px 10px;
  width: 210px;
  height: 190px;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  width: 200px;
`;
export const AddButton = styled.button`
  margin-top: 10px;
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
