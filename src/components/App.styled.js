import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
export const ErrorInfo = styled.p`
  color: red;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const Info = styled.p`
  color: green;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
