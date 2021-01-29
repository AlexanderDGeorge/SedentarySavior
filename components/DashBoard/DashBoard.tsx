import styled from "styled-components";
import TopBar from "../Nav/TopBar";
import TimerWrapper from "../Timer/TimerWrapper";

export default function DashBoard() {
  return (
    <StyledDashBoard>
      {/* <TopBar /> */}
      <TimerWrapper />
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bg};
`;
