import styled, { css } from "styled-components";

export const buttonStyling = css`
  height: 48px;
  width: 128px;
  border: 0;
  border-radius: 24px;
  font-weight: 600;
  outline: none;
  box-shadow: 0 4px 16px -8px transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 16px -8px ${(props) => props.theme.color};
  }
`;

export const PrimaryButton = styled.button`
  ${buttonStyling}
  background: ${(props) => props.theme.lime};
  color: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.lime};
  &:hover {
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.color};
  }
`;

export const SecondaryButton = styled.button`
  ${buttonStyling}
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.lime};
  &:hover {
    background: ${(props) => props.theme.lime};
    color: ${(props) => props.theme.bg};
  }
`;
