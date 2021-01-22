import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../styled-components/Buttons";
import Link from "next/link";

export default function TopBar() {
  return (
    <StyledTopBar>
      <h2>SS</h2>
      <div>
        <PrimaryButton style={{ marginRight: 10 }}>Log In</PrimaryButton>
        <SecondaryButton>Sign Up</SecondaryButton>
      </div>
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
