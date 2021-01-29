import Link from "next/link";
import { FiBarChart, FiLogOut, FiSliders } from "react-icons/fi";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { userState } from "../../pages";

export default function TopBar() {
  const [_, setUser] = useRecoilState(userState);

  return (
    <StyledTopBar>
      <Link href="/">
        <FiBarChart />
      </Link>
      <Link href="/settings">
        <FiSliders />
      </Link>
      <FiLogOut onClick={() => setUser(undefined)} />
    </StyledTopBar>
  );
}

const StyledTopBar = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #444;
  padding: 20px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0 4px 16px -8px;
  svg {
    width: 36px;
    height: 36px;
    margin: 0 10px;
    color: ${(props) => props.theme.lime};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color};
    }
  }
`;
