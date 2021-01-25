import styled from "styled-components";
import TopBar from "../Nav/TopBar";
import Timer from "../Timer/Timer";
import Day from "./Day";

export default function DashBoard() {
  const date = new Date().getDate();

  return (
    <StyledDashBoard>
      <TopBar />
      {/* <Day hours={12} date={1} /> */}
      <Timer />
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px 6%;
  background: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
