import styled from "styled-components";

export default function TopBar() {
  return (
    <StyledTopBar>
      <h2>Sedentary Savior</h2>
      <button>Log In</button>
    </StyledTopBar>
  );
}

const StyledTopBar = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 6%;
  background: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
