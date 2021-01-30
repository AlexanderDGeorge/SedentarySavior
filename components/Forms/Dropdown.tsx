import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { animated, config, useSpring } from "react-spring";
import { useEffect, useRef, useState } from "react";
import useOnOutsideClick from "../../util/useOnOutsideClick";

export default function Dropdown(props: {
  label: string;
  options: Array<string>;
  value: string;
  setValue: Function;
}) {
  const { label, options, value, setValue } = props;
  const [open, setOpen] = useState(false);
  const close = {
    height: 0,
    opacity: 0,
    config: config.stiff,
  };
  const [spring, setSpring] = useSpring(() => close);
  const ref = useRef();

  useOnOutsideClick(ref, () => setSpring(close));

  useEffect(() => {
    if (open) {
      setSpring({ height: 26 * options.length, opacity: 1 });
    } else {
      setSpring(close);
    }
  }, [open]);

  return (
    <StyledDropdown ref={ref}>
      <label htmlFor={label}>{label}</label>
      <div onClick={() => setOpen((prev) => !prev)}>
        {value}
        <FiChevronDown />
        <Options style={spring}>
          {options.map((option, i) => (
            <p key={i} onClick={() => setValue(option)}>
              {option}
            </p>
          ))}
        </Options>
      </div>
    </StyledDropdown>
  );
}

const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  > label {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  > div {
    position: relative;
    padding: 8px;
    border: 2px dashed ${(props) => props.theme.bg};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    &:hover {
      border: 2px dashed ${(props) => props.theme.lime};
    }
    > svg {
      position: absolute;
      right: 0;
      top: 8px;
      height: 24px;
      width: 24px;
    }
  }
`;

const Options = styled(animated.div)`
  width: 100%;
  color: ${(props) => props.theme.color};
  > p {
    padding: 4px;
    font-size: 16px;
    transition: all 0s;
    &:hover {
      color: #333;
      background: ${(props) => props.theme.lime};
    }
  }
`;
