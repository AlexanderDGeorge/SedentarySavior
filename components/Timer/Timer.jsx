import styled, { keyframes } from "styled-components";
// import * as SVG from "./timer.svg";

export default function Timer() {
  return (
    <StyledTimer>
      <svg width="400" height="400">
        <circle className="path" cx="200" cy="200" r="57" fill="none" />
      </svg>
    </StyledTimer>
  );
}

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const StyledTimer = styled.div`
  > svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .path {
    stroke: ${(props) => props.theme.lime};
    stroke-width: 8;
    stroke-dasharray: 20000;
    stroke-dashoffset: 1000;
    /* animation: ${dash} 10s linear forwards; */
  }
`;
