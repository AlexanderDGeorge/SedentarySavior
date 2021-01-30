import { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

export default function RadioSelect(props: {
  locked: boolean;
  label: string;
  value: string;
  setValue: Function;
  options: Array<string>;
  children?: JSX.Element;
}) {
  const { locked, label, value, setValue, options, children } = props;

  const [spring, setSpring] = useSpring(() => ({
    x: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    const initialValue = document.getElementById(value);
    setSpring({ x: initialValue.offsetLeft - 8 });
  }, []);

  const handleSelect = (e) => {
    if (locked) return;
    setValue(e.target.innerText);
    setSpring({ x: e.target.offsetLeft - 8 });
  };

  return (
    <StyledRadioSelect>
      <label>{label}</label>
      <Options>
        {options.map((option, i) => (
          <StyledOption key={i} onClick={handleSelect} id={option}>
            {option}
          </StyledOption>
        ))}
        <StyledSlider
          style={{
            transform: spring.x.interpolate((val) => `translateX(${val}px)`),
          }}
        />
      </Options>
    </StyledRadioSelect>
  );
}

const StyledRadioSelect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  > label {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .selected {
    background: ${(props) => props.theme.lime};
    color: ${(props) => props.theme.bg};
  }
`;

const Options = styled.div`
  position: relative;
  padding: 8px;
  border: 2px dashed ${(props) => props.theme.bg};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border: 2px dashed ${(props) => props.theme.lime};
  }
`;

const StyledSlider = styled(animated.div)`
  position: absolute;
  height: 32px;
  width: 100px;
  opacity: 0.4;
  border-radius: 8px;
  background: ${(props) => props.theme.lime};
`;

const StyledOption = styled.p`
  z-index: 1;
  width: 100px;
  border-radius: 8px;
  padding: 4px;
  font-size: 18px;
  text-align: center;
`;
