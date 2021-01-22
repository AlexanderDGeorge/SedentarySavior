import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

export default function InfoGraphic() {
  return (
    <StyledInfoGraphic>
      <Graphic1 />
    </StyledInfoGraphic>
  );
}

const StyledInfoGraphic = styled.div`
  height: 100%;
  width: 100%;
`;

function Graphic1() {
  const spring = useSpring({
    number: 12.0,
    from: {
      number: 0.0,
    },
    config: {
      friction: 80,
    },
  });

  return (
    <StyledGraphic1>
      <animated.h1>
        {spring.number.interpolate((number) => number.toFixed(0) + "hrs")}
      </animated.h1>
      <h2>the average person spends sitting per day</h2>
    </StyledGraphic1>
  );
}

const StyledGraphic1 = styled.div`
  /* height: 60%; */
  width: 100%;
  padding: 6% 20%;
  background: ${(props) => props.theme.lime};
  display: flex;
  align-items: center;
  justify-content: space-around;
  > h1 {
    width: 300px;
    font-size: 8em;
    color: ${(props) => props.theme.bg};
    margin-right: 6%;
  }
  > h2 {
    width: 200px;
    color: ${(props) => props.theme.bg};
  }
`;
