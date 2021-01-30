import { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Forms/Dropdown";
import RadioSelect from "../Forms/RadioSelect";

export default function Settings() {
  const [preset, setPreset] = useState("Default");
  const [type, setType] = useState("Duration");

  return (
    <StyledSettings>
      <Dropdown
        label="Preset"
        value={preset}
        setValue={setPreset}
        options={["Default"]}
      />
      <RadioSelect
        label="Type"
        value={type}
        setValue={setType}
        options={["Duration", "Schedule", "Other", "Another"]}
        locked={preset === "Default"}
      />
    </StyledSettings>
  );
}

const StyledSettings = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  min-width: 300px;
  width: 60%;
  max-width: 700px;
  padding: 10px;
  background: #444;
  box-shadow: -4px 0 20px -8px black;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color};
  font-size: 24px;
  @media screen and (max-width: 600px) {
    min-width: 300px;
  }
`;
