import { useRef } from "react";
import { useSpring, animated, useChain, config } from "react-spring";
import styled from "styled-components";
import { buttonStyling } from "../../styled-components/Buttons";

export default function CallToAction() {
  const getRef = useRef();
  const movingRef = useRef();
  const buttonRef = useRef();

  const getSpring = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: {
      opacity: 0,
      transform: "translateX(-40%)",
    },
    config: config.stiff,
    ref: getRef,
  });
  const movingSpring = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: {
      opacity: 0,
      transform: "translateX(-40%)",
    },
    config: config.stiff,
    ref: movingRef,
  });
  const buttonSpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: {
      friction: 60,
    },
    ref: buttonRef,
  });

  useChain([getRef, movingRef, buttonRef]);

  return (
    <StyledCallToAction>
      <animated.h1 style={getSpring}>GET</animated.h1>
      <animated.h1 style={movingSpring}>MOVING</animated.h1>
      <animated.h2 style={buttonSpring}>Not Moving = Not Human,</animated.h2>
      <animated.h2 style={buttonSpring}>
        Fight the dangers of a sedentary lifestyle.
      </animated.h2>
      <StyledButton style={buttonSpring}>GET MOVING</StyledButton>
    </StyledCallToAction>
  );
}

const StyledCallToAction = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 120px 6% 10% 6%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 5em;
    color: ${(props) => props.theme.lime};
  }
  h2 {
    margin: 10px 0;
  }
`;

const StyledButton = styled(animated.button)`
  ${buttonStyling}
  margin: 10px 0;
  height: 64px;
  width: 248px;
  box-shadow: 4px 4px 20px -8px black !important;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.lime};
  &:hover {
    background: ${(props) => props.theme.lime};
    color: ${(props) => props.theme.bg};
  }
`;
