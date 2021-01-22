import styled, { keyframes } from "styled-components";

export default function TopBar() {
  return <StyledTopBar></StyledTopBar>;
}

const underglow = keyframes`
  from {
    box-shadow: 0 4px 16px -8px ${(props) => props.theme.lime}
  };
  to {
    box-shadow: 0 4px 8px -8px ${(props) => props.theme.lime}
  }
`;

const StyledTopBar = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.bg};
  box-shadow: 0 4px 16px -8px ${(props) => props.theme.lime};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* animation: ${underglow} 4s linear infinite; */
  @media screen and (max-width: 500px) {
    top: calc(100% - 80px);
    box-shadow: 0 -4px 16px -8px ${(props) => props.theme.lime};
  }
`;
