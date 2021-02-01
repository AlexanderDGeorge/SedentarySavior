import styled, { css } from "styled-components";
import { AiOutlineApple, AiOutlineGoogle } from "react-icons/ai";
import { StyledLink } from "../styled-components/Links";
import Image from "next/image";
import { animated, config, useSpring } from "react-spring";
import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "../styled-components/Buttons";
import useOnOutsideCLick from "../util/useOnOutsideClick";
import { auth } from "../config/firebase-config";

export default function Signup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const buttonRef = useRef(null);

  const [emailSpring, setEmailSpring] = useSpring(() => ({
    height: 68,
    config: config.stiff,
  }));

  useEffect(() => {
    if (open) {
      setEmailSpring({ height: 440 });
    } else {
      setEmailSpring({ height: 68 });
    }
  }, [open]);

  useOnOutsideCLick(buttonRef, () => setOpen(false));

  const handleSubmission = (e) => {
    e.preventDefault();
    // auth.
  };

  return (
    <StyledSignup>
      <StyledAuthButton style={{ background: "#4285F4", color: "white" }}>
        <AiOutlineGoogle />
        <p>Sign-Up with Google</p>
      </StyledAuthButton>
      <StyledAuthButton style={{ background: "#A3AAAE", color: "#F9F6EF" }}>
        <AiOutlineApple />
        <p>Sign-Up with Apple</p>
      </StyledAuthButton>
      <StyledExpandableButton
        ref={buttonRef}
        onClick={() => setOpen(true)}
        style={{ ...emailSpring, background: "#333", color: "#ccff33" }}
      >
        <div>
          <Image src="/icon.svg" height={48} width={48} />
          <p>Sign-Up with Email</p>
        </div>
        <form onSubmit={handleSubmission} onClick={(e) => e.stopPropagation()}>
          <label htmlFor="Name">Name</label>
          <input
            id="Name"
            name="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            name="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            name="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="Confirm Password">Confirm Password</label>
          <input
            id="Confirm Password"
            name="Confirm Password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
        </form>
      </StyledExpandableButton>
      <StyledLink style={{ fontSize: "1.2em" }} href="/login">
        Meant to Log In?
      </StyledLink>
    </StyledSignup>
  );
}

const StyledSignup = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 6%;
  background: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const buttonCSS = css`
  margin: 5% 0;
  min-height: 68px;
  min-width: 300px;
  width: 60%;
  border: 0;
  border-radius: 36px;
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
  svg {
    height: 48px;
    width: auto;
  }
  p {
    margin-left: 5%;
    text-align: center;
  }
`;

const StyledExpandableButton = styled(animated.div)`
  ${buttonCSS}
  flex-direction: column;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
  > form {
    margin-top: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
    > input {
      margin: 5px 0 15px 0;
      border: 1px solid transparent;
      border-radius: 16px;
      padding: 10px;
      background: #444;
      color: white;
      font-size: 1em;
      outline: none;
      &:hover {
        border: 1px solid ${(props) => props.theme.neubg};
      }
      &:focus {
        border: 1px solid ${(props) => props.theme.lime};
      }
    }
  }
`;

const StyledAuthButton = styled.button`
  ${buttonCSS}
`;
