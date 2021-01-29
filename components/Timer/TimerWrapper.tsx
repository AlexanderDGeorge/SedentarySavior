import { useEffect, useState } from "react";
import styled from "styled-components";
import SetTimer from "./SetTimer";
import Settings from "./Settings";
import Timer from "./Timer";

export default function TimerWrapper() {
  const [minutes, setMinutes] = useState(30);
  const [running, setRunning] = useState(false);
  const [runTime, setRunTime] = useState([]);
  const [remaining, setRemaining] = useState();

  useEffect(() => {
    setRunTime((prev) => [...prev, new Date().getTime()]);
  }, [running]);

  console.log(runTime);

  return (
    <StyledWrapper>
      {/* <SetTimer minutes={minutes} setMinutes={setMinutes} running={running} /> */}
      <Timer minutes={minutes} running={running} setRunning={setRunning} />
      <Settings />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2%;
  display: flex;
  align-items: center;
`;
