import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  /* test */
  border: none;
  border-radius: var(--br);
  background-color: var(--blue);
  padding: calc(1.5 * var(--sm)) var(--md);
  color: var(--white);
  font-weight: 700;
  font-size: var(--lg);
`;

const Button = ({ text }: { text: string }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
