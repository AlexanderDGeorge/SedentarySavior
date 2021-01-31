import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../pages";
import TimerWrapper from "../Timer/TimerWrapper";
import Settings from "./Settings";

export default function DashBoard() {
  const user = useRecoilValue(userState);
  const [preset, setPreset] = useState();

  // console.log(user.presets[0]);

  return (
    <StyledDashBoard>
      {/* <Settings preset={preset} setPreset={setPreset} /> */}
      <TimerWrapper />
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bg};
`;
