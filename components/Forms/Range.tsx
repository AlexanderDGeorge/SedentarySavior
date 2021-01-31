import styled from "styled-components";
import { inputWrapper } from "./commonStyles";

export default function Range(props: {
  label: string;
  value: number;
  setValue: Function;
  options: Array<string>;
  children?: JSX.Element;
}) {
  const { label, value, setValue, options, children } = props;

  return (
    <StyledRange>
      <label>{label}</label>
      <div>
        <input
          type="range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          max={120}
        />
        <p>{value} min.</p>
      </div>
    </StyledRange>
  );
}

const StyledRange = styled.div`
  ${inputWrapper};
  > div {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > input {
      z-index: 1;
      width: 80%;
      background-color: ${(props) => props.theme.lime};
      /* &::-webkit-slider-runnable-track {
        height: 10px;
        -webkit-appearance: none;
        color: ${(props) => props.theme.lime};
        border-radius: 8px;
      }
      &::-webkit-slider-thumb {
        width: 10px;
        -webkit-appearance: none;
        height: 10px;
        margin-top: -2px;
        cursor: ew-resize;
        background: ${(props) => props.theme.lime};
      } */
    }
    > svg {
      position: absolute;
      width: 80%;
      fill: ${(props) => props.theme.color};
    }
  }
`;
