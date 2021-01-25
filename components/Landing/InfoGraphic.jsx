import { useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import useOnElementInView from "../../util/useOnElementInView";

export default function InfoGraphic() {
  return (
    <>
      <Graphic1 />
      <Graphic2 />
    </>
  );
}

function Graphic1() {
  const ref = useRef();
  const [spring, setSpring] = useSpring(() => ({
    number: 0,
    config: {
      friction: 100,
    },
  }));

  useOnElementInView(ref, () => setSpring({ number: 12 }));

  return (
    <StyledGraphic1 ref={ref}>
      <h2>
        THE <br /> AVERAGE <br /> PERSON <br /> SPENDS
      </h2>
      <animated.h1>
        {spring.number.interpolate((number) => number.toFixed(0) + "HRS")}
      </animated.h1>
      <h2>
        SITTING <br /> PER <br /> DAY
      </h2>
    </StyledGraphic1>
  );
}

const StyledGraphic1 = styled.div`
  width: 100%;
  padding: 12% 6%;
  background: ${(props) => props.theme.lime};
  display: flex;
  align-items: center;
  justify-content: space-around;
  > h1 {
    font-size: 8em;
    color: ${(props) => props.theme.bg};
    font-weight: 800;
  }
  > h2 {
    font-weight: 800;
    color: ${(props) => props.theme.bg};
    text-orientation: upright;
    &:first-child {
      text-align: right;
    }
    &:last-child {
      text-align: left;
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Graphic2() {
  const ref = useRef();

  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(-40%)",
    config: config.gentle,
  }));

  useOnElementInView(ref, () =>
    setSpring({
      opacity: 1,
      transform: "translateY(0%)",
    })
  );

  return (
    <StyledGraphic2 ref={ref}>
      <animated.h1 style={spring}>3.2 MILLION </animated.h1>
      <animated.h2 style={spring}>
        DEATHS PER YEAR ARE RELATED TO PHYSICAL INACTIVITY
      </animated.h2>
    </StyledGraphic2>
  );
}

const StyledGraphic2 = styled.div`
  width: 100%;
  padding: 12% 6%;
  background: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  > h1,
  h2 {
    color: ${(props) => props.theme.bg};
  }
`;
