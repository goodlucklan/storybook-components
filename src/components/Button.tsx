import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const WrapperDialogButtonA = styled.button`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #5b36f2;
  border-radius: 4px;
  color: #ffffff;
  background-color: #5b36f2;

  &:hover {
    background-color: #745ef6;
  }

  &:focus,
  &:active {
    background-color: #4318cd;
  }

  @media (min-width: 768px) {
    width: max-content;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <WrapperDialogButtonA data-testid="button-component" onClick={onClick}>
      {children}
    </WrapperDialogButtonA>
  );
};
