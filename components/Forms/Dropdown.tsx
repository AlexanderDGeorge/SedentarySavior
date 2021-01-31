import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { animated, config, useSpring } from "react-spring";
import { useEffect, useRef, useState } from "react";
import useOnOutsideClick from "../../util/useOnOutsideClick";
import { inputWrapper } from "./commonStyles";

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
      setSpring({ height: 26 * options.length + 10, opacity: 1 });
    } else {
      setSpring(close);
    }
  }, [open]);

  return (
    <StyledDropdown ref={ref}>
      <label htmlFor={label}>{label}</label>
      <div onClick={() => setOpen((prev) => !prev)}>
        {value}
        <FiChevronDown style={open ? { transform: "rotate(180deg)" } : {}} />
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
  ${inputWrapper};
  > div {
    > svg {
      position: absolute;
      right: 8px;
      height: 24px;
      width: 24px;
      transition: all 0.2s ease-out;
    }
  }
`;

const Options = styled(animated.div)`
  width: calc(100% - 24px);
  color: ${(props) => props.theme.color};
  > p {
    padding: 4px;
    font-size: 16px;
    transition: all 0s;
    &:hover {
      color: #333;
      background: ${(props) => props.theme.lime};
    }
    &:first-of-type {
      margin-top: 10px;
    }
  }
`;
