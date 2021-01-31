import { useEffect, useRef, useState } from "react";
import { FiSliders } from "react-icons/fi";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import useOnOutsideCLick from "../../util/useOnOutsideClick";
import Checkbox from "../Forms/Checkbox";
import Dropdown from "../Forms/Dropdown";
import Radio from "../Forms/Radio";
import Range from "../Forms/Range";
import TextInput from "../Forms/TextInput";

export default function Settings(props: {
  preset: object;
  setPreset: Function;
}) {
  const { preset, setPreset } = props;
  const [type, setType] = useState("Duration");
  const [duration, setDuration] = useState(30);
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [equipment, setEquipment] = useState([]);
  const settingsRef = useRef(null);

  const [spring, setSpring] = useSpring(() => ({ x: 0, config: config.stiff }));

  useOnOutsideCLick(settingsRef, () => setOpen(false));

  useEffect(() => {
    if (open) {
      setSpring({ x: 0 });
    } else {
      setSpring({ x: settingsRef.current.offsetWidth });
    }
  }, [open]);

  return (
    <StyledSettings
      ref={settingsRef}
      style={{
        transform: spring.x.interpolate((val) => `translateX(${val}px)`),
      }}
    >
      <ToggleButton onClick={() => setOpen((prev) => !prev)}>
        <FiSliders />
      </ToggleButton>
      <Dropdown
        label="Preset"
        value={preset}
        setValue={setPreset}
        options={[]}
      />
      <TextInput label="Title" value={title} setValue={setTitle} />
      <Radio
        label="Type"
        value={type}
        setValue={setType}
        options={["Duration", "Schedule"]}
      />
      <Range
        label="Duration"
        value={duration}
        setValue={setDuration}
        options={["Duration", "Schedule", "Other", "Another"]}
      />
      <Checkbox
        label="Equipment"
        value={equipment}
        setValue={setEquipment}
        options={[
          "Pull-Up Bar",
          "Foam Roller",
          "Tennis Ball",
          "Resistance Bands",
        ]}
      />
    </StyledSettings>
  );
}

const StyledSettings = styled(animated.div)`
  position: absolute;
  z-index: 2;
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

const ToggleButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: -84px;
  height: 64px;
  width: 64px;
  border: 0;
  border-radius: 16px;
  background: ${(props) => props.theme.bg};
  box-shadow: ${(props) => props.theme.boxShadow};
  outline: none;
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
  }
  > svg {
    stroke: ${(props) => props.theme.lime};
    height: 32px;
    width: auto;
  }
`;
