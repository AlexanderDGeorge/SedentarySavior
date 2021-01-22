import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { BiDownArrow } from "react-icons/bi";

export default function Day(props) {
  const hours = useSpring({
    height: `${(props.hours * 100) / 24}%`,
    from: {
      height: "0%",
    },
  });

  const date = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  });

  const [info, setInfoSpring] = useSpring(() => ({
    opacity: 0,
  }));

  return (
    <StyledDay>
      <animated.p>
        {props.hours}
        <BiDownArrow />
      </animated.p>
      <animated.p style={hours}></animated.p>
      <animated.p style={date}>{props.date}</animated.p>
    </StyledDay>
  );
}

const StyledDay = styled.div`
  width: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    > p:nth-of-type(1) {
      opacity: 1;
    }
  }
  > p {
    width: 16px;
    margin: 8px 0;
    color: ${(props) => props.theme.color};
    text-align: center;
  }
  > p:nth-of-type(1) {
    width: auto;
    opacity: 0;
    font-size: 2em;
    transition: all 0.2s ease-in-out;
  }
  > p:nth-of-type(2) {
    border-radius: 8px;
    background: ${(props) => props.theme.orange};
  }
`;
