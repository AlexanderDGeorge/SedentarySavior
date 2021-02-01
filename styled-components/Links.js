import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${(props) => props.theme.link};
  border: 0;
  outline: 0;
  text-decoration: none;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;
