import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <h3>Sources</h3>
        <a href="https://www.juststand.org/">juststand.org</a>
      </StyledList>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  padding: 12% 6%;
  display: flex;
  align-items: top;
`;

const StyledList = styled.ul`
  min-height: 200px;
  > a {
    margin: 10px 0;
  }
`;
