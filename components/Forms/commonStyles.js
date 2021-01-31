import { css } from "styled-components";

export const inputWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  > label {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  > div {
    min-height: 48px;
    position: relative;
    padding: 8px;
    border: 2px dashed ${(props) => props.theme.bg};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    transition: all 0.25s ease-out;
    &:hover {
      transition: all 0.25s ease-out;
      border: 2px dashed ${(props) => props.theme.lime};
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
`;
