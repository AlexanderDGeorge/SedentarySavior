import styled from "styled-components";

export default function SetTimer(props: {
  minutes: number;
  setMinutes: Function;
  running: boolean;
}) {
  return (
    <StyledSetTimer>
      <input
        type="number"
        value={props.minutes.toFixed(1)}
        onChange={(e) => props.setMinutes(parseFloat(e.target.value))}
        step={0.5}
        min={0}
        max={120}
        disabled={props.running}
      />
      <h4>{props.minutes > 1 ? "minutes" : "minute"}</h4>
    </StyledSetTimer>
  );
}

const StyledSetTimer = styled.div`
  height: 100px;
  width: 100px;
  margin: 10px 0;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.color};
  border-radius: 16px;
  border: 2px solid black;
  box-shadow: 0 4px 16px -8px ${(props) => props.theme.bg};
  > input {
    width: 100%;
    border: 0;
    font-size: 2em;
    text-align: center;
    background: transparent;
    color: white;
    outline: none;
    &:focus {
      color: ${(props) => props.theme.lime};
    }
    &:disabled {
      color: ${(props) => props.theme.orange};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
