import styled from "styled-components";
import TopBar from "../Nav/TopBar";
import Day from "./Day";

export default function DashBoard() {
  return (
    <StyledDashBoard>
      <TopBar />
      <Day hours={12} date={1} />
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px 6%;
  background: ${(props) => props.theme.bg};
`;
