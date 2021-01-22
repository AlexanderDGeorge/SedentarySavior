import { useRef } from "react";
import { useSpring, animated, useChain, config } from "react-spring";
import styled from "styled-components";

export default function CallToAction() {
  const getRef = useRef();
  const workingRef = useRef();

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
  const workingSpring = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: {
      opacity: 0,
      transform: "translateX(-40%)",
    },
    config: config.stiff,
    ref: workingRef,
  });

  useChain([getRef, workingRef]);

  return (
    <StyledCallToAction>
      <animated.h1 style={getSpring}>GET</animated.h1>
      <animated.h1 style={workingSpring}>WORKING</animated.h1>
      <h2>Desk Workout Illustration Here</h2>
    </StyledCallToAction>
  );
}

const StyledCallToAction = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 120px 6% 10% 6%;
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 5em;
    color: ${(props) => props.theme.lime};
  }
`;
