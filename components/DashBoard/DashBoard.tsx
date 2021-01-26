import styled from "styled-components";
import TopBar from "../Nav/TopBar";
import Timer from "../Timer/Timer";

export default function DashBoard() {
  return (
    <StyledDashBoard>
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
  flex-direction: column;
`;
