import { useState } from "react";
import styled from "styled-components";
import TimePicker from "react-time-picker/dist/entry.nostyle";

export default function SetTimer() {
  const [time, setTime] = useState({ 0: 3, 1: 0, 2: 0, 3: 0 });

  console.log(time);

  return (
    <StyledSetTimer>
      <TimePicker disableClock />
    </StyledSetTimer>
  );
}

const StyledSetTimer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color};
`;

const StyledNumber = styled.input`
  font-size: 3em;
  height: 64px;
  width: 64px;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.lime};
  border-radius: 8px;
  margin: 4px;
  outline: none;
  text-align: center;
`;
