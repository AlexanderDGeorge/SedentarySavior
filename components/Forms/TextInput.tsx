import styled from "styled-components";
import { inputWrapper } from "./commonStyles";

export default function TextInput(props: {
  label: string;
  value: string;
  setValue: Function;
  children?: JSX.Element;
}) {
  const { label, value, setValue, children } = props;

  return (
    <StyledTextInput>
      <label>{label}</label>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Preset 1"
        />
      </div>
    </StyledTextInput>
  );
}

const StyledTextInput = styled.div`
  ${inputWrapper};
  > div {
    > input {
      background: transparent;
      border: 0;
      color: ${(props) => props.theme.color};
      font-size: 18px;
      outline: none;
    }
  }
`;
