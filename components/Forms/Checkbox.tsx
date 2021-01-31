import styled from "styled-components";
import { inputWrapper } from "./commonStyles";

export default function Checkbox(props: {
  label: string;
  value: string[];
  setValue: Function;
  options: Array<string>;
}) {
  const { label, value, setValue, options } = props;

  return (
    <StyledCheckbox>
      <label>{label}</label>
      <div></div>
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled.div`
  ${inputWrapper};
`;
