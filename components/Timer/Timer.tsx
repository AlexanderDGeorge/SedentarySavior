import styled from "styled-components";
import { FiPlay, FiPause } from "react-icons/fi";
import { animated, useSpring } from "react-spring";
import { useEffect } from "react";

export default function Timer(props: {
  minutes: number;
  running: boolean;
  setRunning: Function;
}) {
  const { minutes, running, setRunning } = props;
  const initialSpring = {
    offset: 1533,
    config: {
      duration: minutes * 60000,
    },
    // onFrame: (val) => console.log(val),
  };
  const [spring, setSpring] = useSpring(() => initialSpring);

  useEffect(() => {
    setSpring(initialSpring);
  }, [minutes]);

  const togglePlay = () => {
    if (running) {
      setSpring({ offset: spring.offset.getValue() });
    } else {
      setSpring({ offset: 3066 });
    }
    setRunning((prev) => !prev);
  };

  return (
    <StyledDial>
      <StyledSVG
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="circle"
        strokeDashoffset={spring.offset}
      >
        <circle cx="250" cy="250" r="244" strokeWidth="10" />
      </StyledSVG>
      <StyledButton onClick={togglePlay}>
        {running ? <FiPause /> : <FiPlay />}
      </StyledButton>
    </StyledDial>
  );
}

const StyledTimer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDial = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background: ${(props) => props.theme.bg};
  box-shadow: 0px 4px 12px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  z-index: 1;
  height: 150px;
  width: 150px;
  border: 0;
  border-radius: 48px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.bg};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0px 4px 20px 6px rgba(0, 0, 0, 0.2);
  }
  > svg {
    height: 60%;
    width: 60%;
    stroke: ${(props) => props.theme.lime};
    stroke-width: 1;
  }
`;

const StyledSVG = styled(animated.svg)`
  position: absolute;
  stroke: ${(props) => props.theme.lime};
  stroke-dasharray: 1533;
  transform: rotate(-90deg);
  border-radius: 50%;
  box-shadow: 0 0 20px 4px inset;
`;
