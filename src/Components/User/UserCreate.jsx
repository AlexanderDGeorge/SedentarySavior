import { useRef, useState } from "react";
import { animated, config, useChain, useSpring } from "react-spring";
import styled from "styled-components";
import useUser from "../../util/useUser";

export default function UserCreate() {
  const opacityRef = useRef();
  const sedentaryRef = useRef();
  const saviorRef = useRef();
  const pRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef();

  const opacitySpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: config.gentle,
    ref: opacityRef,
  });

  const sedentarySpring = useSpring({
    fontSize: "2.5em",
    from: {
      fontSize: "0em",
    },
    ref: sedentaryRef,
  });

  const saviorSpring = useSpring({
    fontSize: "3em",
    from: {
      fontSize: "0em",
    },
    ref: saviorRef,
  });

  const pSpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    ref: pRef,
  });

  const inputSpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    ref: inputRef,
  });

  const buttonSpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    ref: buttonRef,
  });

  useChain([opacityRef, sedentaryRef, saviorRef, pRef, inputRef, buttonRef]);

  const [name, setName] = useState("");

  const { createUser } = useUser();

  return (
    <StyledUserCreate>
      <animated.h1 style={opacitySpring}>
        WELCOME <br /> TO
      </animated.h1>
      <animated.h1 style={sedentarySpring}>SEDENTARY</animated.h1>
      <animated.h1 style={saviorSpring}>SAVIOR</animated.h1>
      <animated.p style={pSpring}>What should we call you?</animated.p>
      <animated.input
        style={inputSpring}
        type="text"
        autoFocus
        placeholder="your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <animated.button
        style={buttonSpring}
        disabled={!name.length}
        onClick={() => createUser(name)}
      >
        LET'S GET UNSEDENTARY 💪
      </animated.button>
    </StyledUserCreate>
  );
}

const StyledUserCreate = styled.div`
  height: 100%;
  width: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > h1:nth-child(n + 2) {
    font-weight: 800;
    color: #d00000;
  }
  > p {
    margin: 10px 0;
  }
  > input {
    height: 48px;
    width: 100%;
    margin: 10px 0;
    border: 0;
    padding: 10px;
    background: #444;
    color: white;
    font-size: 1em;
    outline: none;
    text-align: center;
  }
`;
