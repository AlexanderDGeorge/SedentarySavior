import { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Forms/Dropdown";

export default function Settings() {
  const [preset, setPreset] = useState("Default");

  return (
    <StyledSettings>
      <Dropdown
        label="Preset"
        value={preset}
        setValue={setPreset}
        options={["Default", "Preset1"]}
      />
    </StyledSettings>
  );
}

const StyledSettings = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 400px;
  padding: 10px;
  background: #444;
  box-shadow: -4px 0 20px -8px black;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color};
  font-size: 24px;
`;
