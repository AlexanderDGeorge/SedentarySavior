import styled from "styled-components";
import { AiOutlineApple, AiOutlineGoogle } from "react-icons/ai";
import { StyledLink } from "../styled-components/Links";
import Image from "next/image";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

export default function Signup() {
  const [open, setOpen] = useState(false);

  const [emailSpring, setEmailSpring] = useSpring(() => ({
    height: 68,
  }));

  useEffect(() => {
    if (open) {
      setEmailSpring({ height: 160 });
    }
  }, [open]);

  return (
    <StyledSignup>
      <button style={{ background: "#4285F4", color: "white" }}>
        <AiOutlineGoogle />
        <p>Sign up with Google</p>
      </button>
      <button style={{ background: "#A3AAAE", color: "#F9F6EF" }}>
        <AiOutlineApple />
        <p>Sign up with Apple</p>
      </button>
      <animated.button
        onClick={() => setOpen((prev) => !prev)}
        style={{ ...emailSpring, background: "#333", color: "#ccff33" }}
      >
        <Image src="/icon.svg" height={48} width={48} />
        <p>Sign up with Email</p>
      </animated.button>
      <StyledLink style={{ fontSize: "1.2em" }} href="/login">
        Meant to Log In?
      </StyledLink>
    </StyledSignup>
  );
}

const StyledSignup = styled.div`
  height: 100%;
  width: 100%;
  padding: 6%;
  background: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > button {
    margin: 5% 0;
    min-width: 300px;
    width: 60%;
    border: 0;
    border-radius: 24px;
    padding: 10px 10%;
    background: ${(props) => props.theme.bg};
    box-shadow: ${(props) => props.theme.boxShadow};
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    transition: all 100ms ease-in;
    &:hover {
      transition: all 100ms ease-in;
      box-shadow: ${(props) => props.theme.hoverShadow};
    }
    > svg {
      height: 48px;
      width: auto;
    }
    > p {
      margin-left: 5%;
    }
  }
`;
