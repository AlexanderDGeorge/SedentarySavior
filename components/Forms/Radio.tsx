import { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { inputWrapper } from "./commonStyles";

export default function Radio(props: {
  label: string;
  value: string;
  setValue: Function;
  options: Array<string>;
}) {
  const { label, value, setValue, options } = props;

  const [spring, setSpring] = useSpring(() => ({
    x: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    const initialValue = document.getElementById(value);
    setSpring({ x: initialValue.offsetLeft - 8 });
  }, []);

  const handleSelect = (e) => {
    setValue(e.target.innerText);
    setSpring({ x: e.target.offsetLeft - 8 });
  };

  return (
    <StyledRadio>
      <label>{label}</label>
      <div>
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
      </div>
    </StyledRadio>
  );
}

const StyledRadio = styled.div`
  ${inputWrapper};
  .selected {
    background: ${(props) => props.theme.lime};
    color: ${(props) => props.theme.bg};
  }
  > div {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
