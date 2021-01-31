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

const StyledDial = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background: ${(props) => props.theme.bg};
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    height: 80vw;
    width: 80vw;
  }
`;

const StyledButton = styled.button`
  z-index: 1;
  height: 150px;
  width: 150px;
  border: 0;
  border-radius: 48px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.bg};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
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
  box-shadow: 0 0 20px 0 inset;
`;
