import { useState } from "react";
import styled from "styled-components";
import TimerWrapper from "../Timer/TimerWrapper";
import Settings from "./Settings";

const PRESETS = {
  Default: {
    title: "Default",
    type: "Duration",
    repeat: true,
    equipment: [],
  },
};

export default function DashBoard() {
  const [preset, setPreset] = useState();

  return (
    <StyledDashBoard>
      <Settings preset={preset} setPreset={setPreset} />
      <TimerWrapper />
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bg};
`;
