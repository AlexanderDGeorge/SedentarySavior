import styled from "styled-components";
import { FiPlay, FiPause } from "react-icons/fi";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function Timer({ duration = 600000 }) {
  const [playing, setPlaying] = useState(false);
  const [spring, setSpring, stop] = useSpring(() => ({
    offset: 1533,
    config: {
      duration,
    },
  }));

  const togglePlay = () => {
    const temp = playing;
    setPlaying(!temp);
    if (temp) {
      console.log("here");
      stop();
    } else {
      setSpring({ offset: 3000 });
    }
  };

  return (
    <StyledTimer>
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
          {playing ? <FiPause /> : <FiPlay />}
        </StyledButton>
      </StyledDial>
    </StyledTimer>
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
  }
`;

const StyledSVG = styled(animated.svg)`
  position: absolute;
  stroke: ${(props) => props.theme.lime};
  stroke-dasharray: 1533;
  /* stroke-dashoffset: 1533; */
  transform: rotate(-90deg);
`;
