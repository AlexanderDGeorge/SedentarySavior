import styled from "styled-components";
import CallToAction from "./CallToAction";
import InfoGraphic from "./InfoGraphic";
import TopBar from "./TopBar";

export default function Splash() {
  return (
    <StyledSplash>
      <TopBar />
      <CallToAction />
      <InfoGraphic />
    </StyledSplash>
  );
}

const StyledSplash = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.bg};
  overflow-y: auto;
  * {
    color: ${(props) => props.theme.color};
  }
`;
